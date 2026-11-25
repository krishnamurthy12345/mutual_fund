import type { NextRequest } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { validatePatchOfferPayload } from '@/lib/offer-validation';
import { deleteOffer, updateOffer } from '@/lib/offers-store';

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return Response.json({ error: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    const validation = validatePatchOfferPayload(body);
    if (!validation.ok) {
      return Response.json({ error: validation.error }, { status: 400 });
    }

    const updated = await updateOffer(id, validation.data);
    if (!updated) {
      return Response.json({ error: 'Offer not found.' }, { status: 404 });
    }

    return Response.json({ offer: updated });
  } catch {
    return Response.json({ error: 'Unable to update offer.' }, { status: 400 });
  }
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getAdminSession();
  if (!session) {
    return Response.json({ error: 'Admin authentication required.' }, { status: 401 });
  }

  const { id } = await context.params;
  const deleted = await deleteOffer(id);
  if (!deleted) {
    return Response.json({ error: 'Offer not found.' }, { status: 404 });
  }

  return Response.json({ deleted: true, id });
}
