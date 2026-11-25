import { getAdminSession } from '@/lib/auth';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return Response.json({ authenticated: false }, { headers: { 'Cache-Control': 'no-store' } });
  }
  return Response.json(
    { authenticated: true, username: session.username },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
