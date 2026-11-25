import type { Metadata } from 'next';
import { getAdminSession } from '@/lib/auth';
import { getAllOffers } from '@/lib/offers-store';
import AdminPortalClient from '@/components/AdminPortalClient';

export const metadata: Metadata = {
  title: 'Admin Portal | ABC Mutual Fund',
  description:
    'Manage mutual fund offers, client benefits, and standing advisory policies.',
};

export default async function AdminPage() {
  const session = await getAdminSession();
  const initialOffers = session ? await getAllOffers() : [];

  return (
    <AdminPortalClient
      initialAuthenticated={Boolean(session)}
      initialUsername={session?.username ?? null}
      initialOffers={initialOffers}
    />
  );
}
