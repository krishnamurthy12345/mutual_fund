'use client';

const SESSION_STORAGE_KEY = 'abc_mf_admin_session';
const SESSION_TTL_MS = 12 * 60 * 60 * 1000;

const DEFAULT_USERNAME = process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin';
const DEFAULT_PASSWORD_HASH =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD_HASH ||
  'e86f78a8a3caf0b60d8e74e5942aa6d86dc150cd3c03338aef25b7d2d7e3acc7';

interface ClientAdminSession {
  username: string;
  expiresAt: number;
}

async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function verifyClientAdminCredentials(
  username: string,
  password: string
): Promise<boolean> {
  if (username.trim() !== DEFAULT_USERNAME) {
    return false;
  }
  const enteredHash = await sha256Hex(password);
  return enteredHash === DEFAULT_PASSWORD_HASH.toLowerCase();
}

export function getStoredAdminSession(): ClientAdminSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ClientAdminSession;
    if (!parsed.username || typeof parsed.expiresAt !== 'number') {
      return null;
    }
    if (Date.now() > parsed.expiresAt) {
      window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function setStoredAdminSession(username: string): void {
  if (typeof window === 'undefined') return;
  const session: ClientAdminSession = {
    username: username.trim(),
    expiresAt: Date.now() + SESSION_TTL_MS,
  };
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function clearStoredAdminSession(): void {
  if (typeof window === 'undefined') return;
  window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
}
