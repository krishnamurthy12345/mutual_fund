import type { Metadata } from 'next';
import AdminPortalClient from '@/components/AdminPortalClient';

export const metadata: Metadata = {
  title: 'Admin Portal | ABC Mutual Fund',
  description:
    'Manage mutual fund offers, client benefits, and standing advisory policies.',
};

export default function AdminPage() {
  return <AdminPortalClient />;
}
