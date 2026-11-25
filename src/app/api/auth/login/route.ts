import { cookies } from 'next/headers';
import {
  createSessionToken,
  getSessionCookieOptions,
  SESSION_COOKIE_NAME,
  verifyAdminCredentials,
} from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { username?: string; password?: string };
    const username = typeof body.username === 'string' ? body.username : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!username || !password) {
      return Response.json(
        { error: 'Username and password are required.' },
        { status: 400 }
      );
    }

    if (!verifyAdminCredentials(username, password)) {
      return Response.json(
        { error: 'Invalid admin username or password.' },
        { status: 401 }
      );
    }

    const token = createSessionToken(username.trim());
    const forwardedProto = request.headers.get('x-forwarded-proto');
    const isHttps =
      forwardedProto === 'https' || request.url.startsWith('https://');
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, token, getSessionCookieOptions(isHttps));

    return Response.json({ authenticated: true, username: username.trim() });
  } catch {
    return Response.json({ error: 'Unable to process login request.' }, { status: 400 });
  }
}
