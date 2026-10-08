import { env } from 'cloudflare:workers';

const COOKIE_NAME = '__ford_admin_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

type AdminSession = {
  userId: string;
  email: string;
  exp: number;
};

function secret() {
  const value = (env as unknown as {
    ADMIN_SESSION_SECRET?: string;
  }).ADMIN_SESSION_SECRET;

  if (!value) {
    throw new Error('ADMIN_SESSION_SECRET is not configured');
  }

  return value;
}

function configuredEmail() {
  return (
    (env as unknown as {
      ADMIN_EMAIL?: string;
    }).ADMIN_EMAIL || ''
  )
    .trim()
    .toLowerCase();
}

function configuredPassword() {
  return (
    (env as unknown as {
      ADMIN_PASSWORD?: string;
    }).ADMIN_PASSWORD || ''
  );
}

function base64urlEncode(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function base64urlDecode(value: string) {
  const padded =
    value.replace(/-/g, '+').replace(/_/g, '/') +
    '='.repeat((4 - (value.length % 4)) % 4);

  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));

  return new TextDecoder().decode(bytes);
}

async function sign(value: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret()),
    {
      name: 'HMAC',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(value)
  );

  let binary = '';

  for (const byte of new Uint8Array(signature)) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function getCookieValue(cookieHeader: string) {
  for (const part of cookieHeader.split(';')) {
    const [name, ...rest] = part.trim().split('=');

    if (name === COOKIE_NAME) {
      return rest.join('=');
    }
  }

  return null;
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

export async function verifyAdminCredentials(
  email: string,
  password: string
) {
  const expectedEmail = configuredEmail();
  const expectedPassword = configuredPassword();

  const emailInput = email.trim().toLowerCase();

  const emailMatch =
    !!expectedEmail &&
    safeEqual(emailInput, expectedEmail);

  const passwordMatch =
    !!expectedPassword &&
    safeEqual(password, expectedPassword);

  return emailMatch && passwordMatch;
}

export async function createAdminSession(email: string) {
  const payload: AdminSession = {
    userId: 'admin',
    email: email.trim().toLowerCase(),
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE,
  };

  const encoded = base64urlEncode(JSON.stringify(payload));
  const signature = await sign(encoded);

  return `${encoded}.${signature}`;
}

export async function getAdminSessionFromCookie(cookieHeader: string) {
  const token = getCookieValue(cookieHeader);

  if (!token) {
    return null;
  }

  const dot = token.lastIndexOf('.');

  if (dot <= 0) {
    return null;
  }

  const encoded = token.slice(0, dot);
  const providedSignature = token.slice(dot + 1);

  try {
    const expectedSignature = await sign(encoded);

    if (!safeEqual(providedSignature, expectedSignature)) {
      return null;
    }

    const payload = JSON.parse(
      base64urlDecode(encoded)
    ) as AdminSession;

    if (
      !payload ||
      payload.userId !== 'admin' ||
      typeof payload.email !== 'string' ||
      typeof payload.exp !== 'number' ||
      payload.exp <= Math.floor(Date.now() / 1000)
    ) {
      return null;
    }

    const expectedEmail = configuredEmail();

    if (
      !expectedEmail ||
      payload.email.toLowerCase() !== expectedEmail
    ) {
      return null;
    }

    return {
      userId: payload.userId,
      email: payload.email,
    };
  } catch {
    return null;
  }
}

export function sessionCookie(token: string) {
  return [
    `${COOKIE_NAME}=${token}`,
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
    `Max-Age=${SESSION_MAX_AGE}`,
  ].join('; ');
}

export function clearSessionCookie() {
  return [
    `${COOKIE_NAME}=`,
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
    'Max-Age=0',
  ].join('; ');
}