import crypto from 'crypto';
import { cookies } from 'next/headers';

export const SESSION_COOKIE_NAME = 'abc_admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours

interface SessionPayload {
  username: string;
  exp: number;
}

function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || 'Admin@123',
  };
}

function getSessionSecret(): string {
  if (process.env.ADMIN_SESSION_SECRET) {
    return process.env.ADMIN_SESSION_SECRET;
  }
  const { password } = getAdminCredentials();
  return crypto
    .createHash('sha256')
    .update(`abc-mutual-fund-session-key:${password}`)
    .digest('hex');
}

function constantTimeEquals(a: string, b: string): boolean {
  const hashA = crypto.createHash('sha256').update(a).digest();
  const hashB = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  const expected = getAdminCredentials();
  const userMatch = constantTimeEquals(username.trim(), expected.username);
  const passMatch = constantTimeEquals(password, expected.password);
  return userMatch && passMatch;
}

export function createSessionToken(username: string): string {
  const payload: SessionPayload = {
    username,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload), 'utf-8').toString('base64url');
  const signature = crypto
    .createHmac('sha256', getSessionSecret())
    .update(encodedPayload)
    .digest('base64url');
  return `${encodedPayload}.${signature}`;
}

export function verifySessionToken(token: string | undefined): SessionPayload | null {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [encodedPayload, providedSignature] = parts;
  const expectedSignature = crypto
    .createHmac('sha256', getSessionSecret())
    .update(encodedPayload)
    .digest('base64url');

  if (!constantTimeEquals(providedSignature, expectedSignature)) {
    return null;
  }

  try {
    const decoded = JSON.parse(
      Buffer.from(encodedPayload, 'base64url').toString('utf-8')
    ) as SessionPayload;

    if (!decoded.username || typeof decoded.exp !== 'number') {
      return null;
    }
    if (decoded.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return decoded;
  } catch {
    return null;
  }
}

export async function getAdminSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  return verifySessionToken(token);
}

export function getSessionCookieOptions(isHttps: boolean) {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: isHttps,
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  };
}
