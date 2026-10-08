import {
  verifyAdminCredentials,
  createAdminSession,
  sessionCookie,
} from '../../../lib/admin-auth';

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const email = String(form.get('email') || '');
    const password = String(form.get('password') || '');

    const valid = await verifyAdminCredentials(email, password);

    if (!valid) {
      return Response.redirect(
        new URL('/admin?error=1', request.url),
        303
      );
    }

    const token = await createAdminSession(email);

    return new Response(null, {
      status: 303,
      headers: {
        Location: '/admin',
        'Set-Cookie': sessionCookie(token),
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Admin login failed', error);

    return Response.redirect(
      new URL('/admin?error=1', request.url),
      303
    );
  }
}