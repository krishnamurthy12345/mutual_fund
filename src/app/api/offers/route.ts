import type { NextRequest } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { validateCreateOfferPayload } from '@/lib/offer-validation';
import { createOffer, getActiveOffers, getAllOffers } from '@/lib/offers-store';

export async function GET(request: NextRequest) {
  const includeAll = request.nextUrl.searchParams.get('all') === 'true';

  if (includeAll) {
    const session = await getAdminSession();
    if (!session) {
      return Response.json({ error: 'Admin authentication required.' }, { status: 401 });
    }
    const offers = await getAllOffers();
    return Response.json({ offers }, { headers: { 'Cache-Control': 'no-store' } });
  }

  const offers = await getActiveOffers();
  return Response.json({ offers }, { headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return Response.json({ error: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const validation = validateCreateOfferPayload(body);
    if (!validation.ok) {
      return Response.json({ error: validation.error }, { status: 400 });
    }

    const created = await createOffer(validation.data);
    return Response.json({ offer: created }, { status: 201 });
  } catch {
    return Response.json({ error: 'Invalid request payload.' }, { status: 400 });
  }
}
