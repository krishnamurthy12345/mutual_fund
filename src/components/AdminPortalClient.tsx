'use client';

import React, { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Lock,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Star,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ShieldCheck,
  Search,
} from 'lucide-react';
import {
  FUND_CATEGORIES,
  OFFER_TYPES,
  type FundCategory,
  type MutualFundOffer,
  type OfferType,
} from '@/types/offer';
import { getAssetPath } from '@/lib/utils';

interface AdminPortalClientProps {
  initialAuthenticated: boolean;
  initialUsername: string | null;
  initialOffers: MutualFundOffer[];
}

interface OfferFormState {
  title: string;
  offerType: OfferType;
  fundCategory: FundCategory;
  badgeText: string;
  summary: string;
  details: string;
  eligibility: string;
  minInvestment: string;
  validUntil: string;
  highlightsText: string;
  featured: boolean;
  isActive: boolean;
}

const EMPTY_FORM: OfferFormState = {
  title: '',
  offerType: 'Benefit',
  fundCategory: 'Equity SIP',
  badgeText: '',
  summary: '',
  details: '',
  eligibility: '',
  minInvestment: '',
  validUntil: '',
  highlightsText: '',
  featured: true,
  isActive: true,
};

export default function AdminPortalClient({
  initialAuthenticated,
  initialUsername,
  initialOffers,
}: AdminPortalClientProps) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [adminUser, setAdminUser] = useState<string | null>(initialUsername);
  const [offers, setOffers] = useState<MutualFundOffer[]>(initialOffers);

  // Login form state
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // CRUD form state
  const [form, setForm] = useState<OfferFormState>(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  // List filter & delete confirmation state
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'hidden'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [busyOfferId, setBusyOfferId] = useState<string | null>(null);

  const formSectionRef = useRef<HTMLDivElement>(null);

  const fetchAllAdminOffers = async () => {
    const res = await fetch(getAssetPath('/api/offers?all=true'), {
      cache: 'no-store',
    });
    if (res.status === 401) {
      setAuthenticated(false);
      setAdminUser(null);
      return;
    }
    if (res.ok) {
      const data = (await res.json()) as { offers: MutualFundOffer[] };
      setOffers(data.offers || []);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError(null);
    setIsLoggingIn(true);

    try {
      const res = await fetch(getAssetPath('/api/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: loginUsername,
          password: loginPassword,
        }),
      });
      const data = (await res.json()) as {
        authenticated?: boolean;
        username?: string;
        error?: string;
      };

      if (!res.ok || !data.authenticated) {
        setLoginError(data.error || 'Invalid credentials.');
        return;
      }

      setAuthenticated(true);
      setAdminUser(data.username || loginUsername);
      setLoginPassword('');
      await fetchAllAdminOffers();
    } catch {
      setLoginError('Network error while signing in. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch(getAssetPath('/api/auth/logout'), { method: 'POST' });
    setAuthenticated(false);
    setAdminUser(null);
    setOffers([]);
    setEditingId(null);
    setForm(EMPTY_FORM);
    setFeedback(null);
  };

  const startEdit = (offer: MutualFundOffer) => {
    setEditingId(offer.id);
    setFeedback(null);
    setForm({
      title: offer.title,
      offerType: offer.offerType,
      fundCategory: offer.fundCategory,
      badgeText: offer.badgeText,
      summary: offer.summary,
      details: offer.details,
      eligibility: offer.eligibility,
      minInvestment: offer.minInvestment,
      validUntil: offer.validUntil,
      highlightsText: offer.highlights.join('\n'),
      featured: offer.featured,
      isActive: offer.isActive,
    });
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
  };

  const handleSubmitOffer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);
    setIsSaving(true);

    const highlights = form.highlightsText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    const payload = {
      title: form.title,
      offerType: form.offerType,
      fundCategory: form.fundCategory,
      badgeText: form.badgeText,
      summary: form.summary,
      details: form.details,
      eligibility: form.eligibility,
      minInvestment: form.minInvestment,
      validUntil: form.validUntil,
      highlights,
      featured: form.featured,
      isActive: form.isActive,
    };

    try {
      const endpoint = editingId
        ? getAssetPath(`/api/offers/${editingId}`)
        : getAssetPath('/api/offers');
      const method = editingId ? 'PATCH' : 'POST';

      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.status === 401) {
        setAuthenticated(false);
        setAdminUser(null);
        return;
      }

      const data = (await res.json()) as {
        offer?: MutualFundOffer;
        error?: string;
      };

      if (!res.ok || !data.offer) {
        setFeedback({
          type: 'error',
          message: data.error || 'Could not save offer/policy.',
        });
        return;
      }

      if (editingId) {
        setOffers((prev) =>
          prev.map((item) => (item.id === editingId ? data.offer! : item))
        );
        setFeedback({
          type: 'success',
          message: `Updated "${data.offer.title}" successfully.`,
        });
        setEditingId(null);
      } else {
        setOffers((prev) => [data.offer!, ...prev]);
        setFeedback({
          type: 'success',
          message: `Created "${data.offer.title}" and synced to the website.`,
        });
      }
      setForm(EMPTY_FORM);
    } catch {
      setFeedback({
        type: 'error',
        message: 'Network error while saving. Please try again.',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const toggleOfferFlag = async (
    offer: MutualFundOffer,
    field: 'isActive' | 'featured'
  ) => {
    setBusyOfferId(offer.id);
    setFeedback(null);
    try {
      const res = await fetch(getAssetPath(`/api/offers/${offer.id}`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: !offer[field] }),
      });

      if (res.status === 401) {
        setAuthenticated(false);
        return;
      }

      const data = (await res.json()) as { offer?: MutualFundOffer };
      if (res.ok && data.offer) {
        setOffers((prev) =>
          prev.map((item) => (item.id === offer.id ? data.offer! : item))
        );
      }
    } finally {
      setBusyOfferId(null);
    }
  };

  const handleDeleteOffer = async (id: string) => {
    setBusyOfferId(id);
    setFeedback(null);
    try {
      const res = await fetch(getAssetPath(`/api/offers/${id}`), {
        method: 'DELETE',
      });
      if (res.status === 401) {
        setAuthenticated(false);
        return;
      }
      if (res.ok) {
        setOffers((prev) => prev.filter((item) => item.id !== id));
        if (editingId === id) {
          cancelEdit();
        }
        setConfirmDeleteId(null);
        setFeedback({
          type: 'success',
          message: 'Policy / benefit removed from catalog.',
        });
      }
    } finally {
      setBusyOfferId(null);
    }
  };

  const stats = useMemo(() => {
    const activeCount = offers.filter((o) => o.isActive).length;
    const featuredCount = offers.filter((o) => o.isActive && o.featured).length;
    return {
      total: offers.length,
      active: activeCount,
      hidden: offers.length - activeCount,
      featured: featuredCount,
    };
  }, [offers]);

  const filteredOffers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return offers.filter((offer) => {
      if (statusFilter === 'active' && !offer.isActive) return false;
      if (statusFilter === 'hidden' && offer.isActive) return false;
      if (!query) return true;
      return (
        offer.title.toLowerCase().includes(query) ||
        offer.fundCategory.toLowerCase().includes(query) ||
        offer.offerType.toLowerCase().includes(query) ||
        offer.badgeText.toLowerCase().includes(query)
      );
    });
  }, [offers, statusFilter, searchQuery]);

  /* ========================================================= */
  /* LOGIN VIEW                                                */
  /* ========================================================= */
  if (!authenticated) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-32 pb-24 px-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-300/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-8 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
            <Lock className="w-5 h-5" />
          </div>

          <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
            ABC Mutual Fund
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            Admin Portal Login
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Sign in to create, update, or publish mutual fund offers, client benefits, and advisory policies.
          </p>

          {loginError && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="admin-username"
                className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
              >
                Username
              </label>
              <input
                id="admin-username"
                type="text"
                required
                autoComplete="username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                placeholder="Enter admin username"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full pl-4 pr-11 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all cursor-pointer mt-2"
            >
              {isLoggingIn ? 'Signing In...' : 'Sign In to Admin Portal'}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <Link href="/offers" className="hover:text-emerald-600 transition-colors">
              ← Back to Client Offers
            </Link>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Protected Session
            </span>
          </div>
        </div>
      </main>
    );
  }

  /* ========================================================= */
  /* ADMIN DASHBOARD VIEW                                      */
  /* ========================================================= */
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Top Admin Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin Session · {adminUser || 'admin'}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Mutual Fund{' '}
              <span className="font-serif italic font-normal text-emerald-600 dark:text-emerald-400">
                Offers & Policies Manager
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/offers"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 transition-all"
            >
              <span>View Public Offers Page</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-600" />
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Total Entries
            </span>
            <span className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              {stats.total}
            </span>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
              Live on Website
            </span>
            <span className="text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
              {stats.active}
            </span>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Featured on Home
            </span>
            <span className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              {stats.featured}
            </span>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
              Draft / Hidden
            </span>
            <span className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              {stats.hidden}
            </span>
          </div>
        </div>

        {/* Feedback Banner */}
        {feedback && (
          <div
            className={`p-4 rounded-2xl border text-sm font-medium flex items-center gap-2.5 ${
              feedback.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                : 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900 text-red-700 dark:text-red-300'
            }`}
          >
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}

        {/* Main 2-Column Workspace: Form (Left) + Existing Policies List (Right) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* CREATE / EDIT FORM */}
          <div
            ref={formSectionRef}
            className="lg:col-span-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  {editingId ? (
                    <Pencil className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {editingId ? 'Edit Policy / Offer' : 'Create New Policy or Benefit'}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {editingId
                      ? 'Modify details and save changes immediately'
                      : 'Published items appear immediately on the website'}
                  </p>
                </div>
              </div>

              {editingId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>

            <form onSubmit={handleSubmitOffer} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Offer / Policy Title *
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g., Women Investor SIP Wealth Benefit"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Type *
                  </label>
                  <select
                    value={form.offerType}
                    onChange={(e) =>
                      setForm({ ...form, offerType: e.target.value as OfferType })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  >
                    {OFFER_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Category *
                  </label>
                  <select
                    value={form.fundCategory}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        fundCategory: e.target.value as FundCategory,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  >
                    {FUND_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Highlight Badge
                  </label>
                  <input
                    type="text"
                    value={form.badgeText}
                    onChange={(e) => setForm({ ...form, badgeText: e.target.value })}
                    placeholder="e.g., Zero Advisory Fee"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Validity Period
                  </label>
                  <input
                    type="text"
                    value={form.validUntil}
                    onChange={(e) => setForm({ ...form, validUntil: e.target.value })}
                    placeholder="e.g., 31 Mar 2027"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Short Card Summary *
                </label>
                <textarea
                  rows={2}
                  required
                  value={form.summary}
                  onChange={(e) => setForm({ ...form, summary: e.target.value })}
                  placeholder="Concise 1-2 line overview shown on website cards..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Full Policy / Benefit Details
                </label>
                <textarea
                  rows={3}
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  placeholder="Detailed explanation shown when clients click View Details..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Eligibility
                  </label>
                  <input
                    type="text"
                    value={form.eligibility}
                    onChange={(e) =>
                      setForm({ ...form, eligibility: e.target.value })
                    }
                    placeholder="e.g., Retail & NRI investors"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Min. Allocation
                  </label>
                  <input
                    type="text"
                    value={form.minInvestment}
                    onChange={(e) =>
                      setForm({ ...form, minInvestment: e.target.value })
                    }
                    placeholder="e.g., ₹5,000 / month"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Key Highlights (one per line)
                </label>
                <textarea
                  rows={3}
                  value={form.highlightsText}
                  onChange={(e) =>
                    setForm({ ...form, highlightsText: e.target.value })
                  }
                  placeholder={
                    'Zero onboarding or audit fee\nDedicated quarterly rebalancing\nTax-harvesting report included'
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.isActive}
                    onChange={(e) =>
                      setForm({ ...form, isActive: e.target.checked })
                    }
                    className="w-4 h-4 rounded accent-emerald-600"
                  />
                  <span>Publish on Website (Active)</span>
                </label>

                <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) =>
                      setForm({ ...form, featured: e.target.checked })
                    }
                    className="w-4 h-4 rounded accent-emerald-600"
                  />
                  <span>Feature on Home Page</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSaving}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all cursor-pointer"
              >
                {isSaving
                  ? 'Saving...'
                  : editingId
                    ? 'Save Policy Changes'
                    : 'Create & Publish Policy'}
              </button>
            </form>
          </div>

          {/* EXISTING OFFERS & POLICIES LIST */}
          <div className="lg:col-span-7 space-y-5">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter managed offers & policies..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                />
              </div>

              <div className="flex items-center gap-1.5">
                {(['all', 'active', 'hidden'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setStatusFilter(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors cursor-pointer ${
                      statusFilter === tab
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {filteredOffers.length === 0 ? (
              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 text-center text-sm text-slate-500 dark:text-slate-400">
                No offers or policies match this filter.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredOffers.map((offer) => {
                  const isBusy = busyOfferId === offer.id;
                  return (
                    <div
                      key={offer.id}
                      className={`rounded-2xl bg-white dark:bg-slate-900 border p-5 transition-all ${
                        offer.isActive
                          ? 'border-slate-200 dark:border-slate-800'
                          : 'border-dashed border-slate-300 dark:border-slate-700 opacity-75'
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              offer.isActive
                                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                            }`}
                          >
                            {offer.isActive ? 'Published' : 'Hidden'}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                            {offer.offerType}
                          </span>
                          <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                            {offer.fundCategory}
                          </span>
                        </div>

                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/60">
                          {offer.badgeText}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-1">
                        {offer.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {offer.summary}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            disabled={isBusy}
                            onClick={() => toggleOfferFlag(offer, 'isActive')}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer disabled:opacity-50"
                          >
                            {offer.isActive ? (
                              <>
                                <EyeOff className="w-3.5 h-3.5" />
                                <span>Hide</span>
                              </>
                            ) : (
                              <>
                                <Eye className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Publish</span>
                              </>
                            )}
                          </button>

                          <button
                            type="button"
                            disabled={isBusy}
                            onClick={() => toggleOfferFlag(offer, 'featured')}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50 ${
                              offer.featured
                                ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-50'
                            }`}
                          >
                            <Star
                              className={`w-3.5 h-3.5 ${
                                offer.featured ? 'fill-current' : ''
                              }`}
                            />
                            <span>
                              {offer.featured ? 'Featured' : 'Feature on Home'}
                            </span>
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => startEdit(offer)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 text-xs font-bold transition-colors cursor-pointer"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>

                          {confirmDeleteId === offer.id ? (
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                disabled={isBusy}
                                onClick={() => handleDeleteOffer(offer.id)}
                                className="px-2.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold cursor-pointer"
                              >
                                Confirm
                              </button>
                              <button
                                type="button"
                                onClick={() => setConfirmDeleteId(null)}
                                className="px-2 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteId(offer.id)}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 hover:bg-red-100 text-red-600 dark:text-red-400 text-xs font-bold transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Delete</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
