import { env } from 'cloudflare:workers';
import { headers } from 'next/headers';
import { getAdminSessionFromCookie } from './admin-auth';
import seed from '../content/seed.json';
import accessories from '../content/accessories.json';

export const defaults = { ...seed, accessories };

export function database() {
  return (env as unknown as { DB: D1Database }).DB;
}

export async function adminUser() {
  const requestHeaders = await headers();
  const cookie = requestHeaders.get('cookie') || '';

  return await getAdminSessionFromCookie(cookie);
}

export async function readContent() {
  const { results } = await database()
    .prepare('SELECT key,value,revision FROM content')
    .all<{
      key: string;
      value: string;
      revision: number;
    }>();

  const data = structuredClone(defaults) as Record<string, any>;
  const revisions: Record<string, number> = {};

  for (const r of results) {
    if (r.key in data) {
      const saved = JSON.parse(r.value);

      data[r.key] =
        r.key === 'settings'
          ? { ...seed.settings, ...saved }
          : r.key === 'variants'
            ? { ...seed.variants, ...saved }
            : saved;

      revisions[r.key] = r.revision;
    }
  }

  return { data, revisions };
}

export function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

export function sameOrigin(r: Request) {
  return (
    r.headers.get('origin') === new URL(r.url).origin &&
    r.headers.get('content-type')?.includes('application/json')
  );
}

export function safeImage(s: unknown) {
  return (
    typeof s === 'string' &&
    s.length < 1000 &&
    (/^\/?(?:assets|media)\/[a-zA-Z0-9_./-]+$/.test(s) ||
      /^https:\/\//.test(s)) &&
    !s.includes('..')
  );
}

export function validate(key: string, value: any) {
  if (key === 'settings')
    return (
      value &&
      Object.keys(value).every((k) => k in seed.settings) &&
      Object.keys(seed.settings).every(
        (k) => typeof value[k] === 'string' && value[k].length < 500
      ) &&
      Object.entries(value).every(([k, v]) =>
        ['phone', 'email', 'notificationEmail'].includes(k)
          ? true
          : /^https:\/\//.test(String(v))
      ) &&
      /^[0-9 +]{9,16}$/.test(value.phone) &&
      ['email', 'notificationEmail'].every((k) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value[k])
      )
    );

  if (key === 'variants')
    return (
      value &&
      Object.keys(value).every((k) => k in seed.variants) &&
      Object.keys(seed.variants).every((k) => {
        const rows = value[k];

        if (!Array.isArray(rows) || rows.length < 1 || rows.length > 50)
          return false;

        const names = rows.map((v: any) =>
          typeof v?.name === 'string' ? v.name.trim().toLowerCase() : ''
        );

        return (
          new Set(names).size === rows.length &&
          rows.every(
            (v: any) =>
              v &&
              typeof v === 'object' &&
              typeof v.name === 'string' &&
              v.name.trim().length > 0 &&
              v.name.length <= 120 &&
              typeof v.pdf === 'string' &&
              /^[a-zA-Z0-9_./-]{1,200}$/.test(v.pdf) &&
              (v.price === null ||
                (typeof v.price === 'number' &&
                  v.price > 0 &&
                  v.price < 100000)) &&
              Object.values(v).every(
                (x) =>
                  x === null ||
                  typeof x === 'number' ||
                  (typeof x === 'string' &&
                    x.length <= 1000 &&
                    !/[<>]/.test(x))
              )
          )
        );
      })
    );

  if (key === 'accessories')
    return (
      value &&
      Object.keys(value).every((k) => k in accessories) &&
      Object.keys(accessories).every((k) => {
        const catalog = value[k];

        if (
          !catalog ||
          typeof catalog.date !== 'string' ||
          catalog.date.length > 30 ||
          typeof catalog.note !== 'string' ||
          catalog.note.length > 1000 ||
          !Array.isArray(catalog.items) ||
          catalog.items.length > 300
        )
          return false;

        return catalog.items.every(
          (v: any) =>
            v &&
            typeof v.code === 'string' &&
            v.code.trim().length > 0 &&
            v.code.length <= 80 &&
            typeof v.name === 'string' &&
            v.name.trim().length > 0 &&
            v.name.length <= 300 &&
            typeof v.category === 'string' &&
            v.category.length <= 150 &&
            typeof v.unit === 'string' &&
            v.unit.length <= 50 &&
            typeof v.price === 'number' &&
            v.price >= 0 &&
            v.price < 1000000000 &&
            typeof v.note === 'string' &&
            v.note.length <= 1000 &&
            typeof v.check === 'boolean' &&
            Number.isInteger(v.sourceRow) &&
            v.sourceRow >= 0
        );
      })
    );

  if (key === 'banners')
    return (
      Array.isArray(value) &&
      value.length === seed.banners.length &&
      value.every(
        (v: any, i: number) =>
          v.page === seed.banners[i].page &&
          safeImage(v.image) &&
          typeof v.alt === 'string' &&
          v.alt.length < 500
      )
    );

  if (key === 'posts')
    return (
      Array.isArray(value) &&
      value.length === seed.posts.length &&
      value.every(
        (v: any, i: number) =>
          v.slug === seed.posts[i].slug &&
          typeof v.title === 'string' &&
          v.title.trim().length > 0 &&
          v.title.length < 250 &&
          safeImage(v.image) &&
          typeof v.body === 'string' &&
          v.body.length < 40000 &&
          typeof v.published === 'boolean'
      )
    );

  return false;
}