'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Sparkles,
} from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Goal-Based SIP & Compounding',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-28 pb-24 relative overflow-hidden">
      {/* ========================================================= */}
      {/* BACKGROUND AMBIENT GLOWS */}
      {/* ========================================================= */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[550px] h-[550px] bg-emerald-300/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* ========================================================= */}
        {/* SECTION 1: TOP HERO (LEFT TEXT + RIGHT MEDIA IMAGE) */}
        {/* ========================================================= */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28 pt-4">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-50 border border-emerald-200 text-emerald-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              A Considered Conversation
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-6">
              Bring the
              <br />
              <span className="font-serif italic font-normal text-emerald-600">
                real question.
              </span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl font-normal mb-8">
              For families, salaried professionals, and business owners facing a mutual fund
              or capital allocation decision that matters. Share enough to frame it — no account statements,
              PAN numbers, or confidential documents needed.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                100% Confidential
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-600" />
                Private Consultations
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Coimbatore • In-Person & Virtual
              </span>
            </div>
          </motion.div>

          {/* Right Media Arch Portal matching Image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Outer offset hairline contour */}
            <div className="absolute inset-0 max-w-[460px] mx-auto border border-emerald-300 dark:border-emerald-500/30 rounded-t-[230px] rounded-b-2xl translate-x-3 translate-y-3 pointer-events-none" />

            <div className="relative h-[380px] sm:h-[440px] md:h-[480px] w-full max-w-[460px] rounded-t-[220px] rounded-b-2xl overflow-hidden bg-slate-900 border-2 border-white dark:border-slate-800 shadow-2xl group">
              <Image
                src={getAssetPath("/images/consultation.webp")}
                alt="Advisory consultation meeting with Indian clients"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-5 left-6 right-6 p-4 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                  Rajasekar Sekar
                </span>
                <p className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-snug">
                  Advising long-term mutual fund investors with structural asset allocation and compounding discipline.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: EDITORIAL LAYOUT (LEFT NOTES + RIGHT FORM) */}
        {/* ========================================================= */}
        <section className="pt-12 border-t border-slate-200">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* =====================================================
                LEFT COLUMN: CONTEXT NOTES + CONTACT DETAILS + SOCIAL
            ====================================================== */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-3">
                  Private · Coimbatore, Tamil Nadu
                </span>

                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                  Clarity begins with context.
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
                  Share enough to frame the conversation. We respect your confidentiality and focus on what the
                  capital must achieve over time. Do not include sensitive account numbers or statements.
                </p>
              </div>

              {/* 3 Context Note Cards (Matching vinumammen.com structure) */}
              <div className="space-y-4">
                {/* Note 1 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1.5">
                    01. Goal-Based SIP & Wealth
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Long-term compounding, time horizons, behavioral discipline during market corrections,
                    and the financial milestones your investment capital must support.
                  </p>
                </div>

                {/* Note 2 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1.5">
                    02. Business & Treasury Allocation
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Corporate surplus deployment, liquid and arbitrage strategies, capital preservation,
                    and structuring cash buffers without sacrificing tax efficiency.
                  </p>
                </div>

                {/* Note 3 */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1.5">
                    03. Portfolio Review & Rebalancing
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Evaluating existing mutual fund holdings, eliminating scheme overlap, shifting gains from
                    equity to fixed income, and executing systematic transfer plans (STP).
                  </p>
                </div>
              </div>

              {/* Direct Reach Information */}
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 block">
                  Direct Contact Coordinates
                </span>

                <div className="grid sm:grid-cols-2 gap-4 pt-1">
                  <a
                    href="tel:+919488974620"
                    className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 text-xs font-semibold"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span>+91 9876543210</span>
                  </a>

                  <a
                    href="mailto:belliscapitalofficial@gmail.com"
                    className="flex items-center gap-3 text-slate-700 hover:text-emerald-700 text-xs font-semibold"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate">abc@gmail.com</span>
                  </a>
                </div>

                <div className="flex items-center gap-3 text-slate-600 text-xs pt-1">
                  <div className="w-8 h-8 rounded-lg bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>Coimbatore, Tamil Nadu, India • In-Person by Appointment & Worldwide Virtual Advisory</span>
                </div>
              </div>

              {/* Connected Social Accounts */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">
                  Connect on Official Channels
                </span>

                <div className="flex items-center gap-2.5">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/raja-sekar-8a3a78113"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 flex items-center justify-center text-slate-600 hover:text-emerald-700 shadow-sm transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/belliscapital"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 flex items-center justify-center text-slate-600 hover:text-emerald-700 shadow-sm transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/belliscapital/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 flex items-center justify-center text-slate-600 hover:text-emerald-700 shadow-sm transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://x.com/belliscapital"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X (Twitter)"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 flex items-center justify-center text-slate-600 hover:text-emerald-700 shadow-sm transition-all"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919488974620"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 flex items-center justify-center text-slate-600 hover:text-emerald-700 shadow-sm transition-all"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 0C5.396 0 .029 5.367.029 11.987c0 2.108.549 4.168 1.595 5.97L0 24l6.235-1.587c1.734.945 3.697 1.442 5.796 1.442 6.634 0 12.002-5.367 12.002-11.987S18.665 0 12.031 0zm-.002 21.87c-1.84 0-3.64-.495-5.207-1.432l-.373-.222-3.87 1.015 1.033-3.77-.244-.388c-1.031-1.64-1.575-3.54-1.575-5.485 0-5.522 4.492-10.015 10.019-10.015 5.526 0 10.018 4.493 10.018 10.015 0 5.523-4.492 10.016-10.018 10.016zm5.488-7.488c-.3-.15-1.774-.875-2.049-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.41-1.488-.89-.794-1.492-1.775-1.667-2.075-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.23 5.124 4.53.716.31 1.275.495 1.71.634.719.229 1.374.197 1.892.12.577-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT COLUMN: FORM (BRAND FORM MATCHING VINUMAMMEN STYLE)
            ====================================================== */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-2xl pointer-events-none" />

                <div className="relative bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-slate-200 shadow-2xl shadow-emerald-900/10">
                  <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-16"
                    >
                      <div className="relative mb-6">
                        <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl" />
                        <div className="relative w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-200 text-emerald-600">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold text-slate-900 mb-3">
                        Context Received.
                      </h3>

                      <p className="text-slate-600 max-w-sm text-sm leading-relaxed mb-8">
                        Thank you for sharing the context of your decision. Rajasekar Sekar and our senior mutual fund
                        advisors will review your question and reach out to schedule your conversation.
                      </p>

                      <button
                        type="button"
                        onClick={() => setStatus('idle')}
                        className="bg-slate-900 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-md"
                      >
                        Submit Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                          What's the decision in front of you?
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                          Read directly by Rajasekar Sekar & senior advisors. Never shared, never added to a spam list.
                        </p>
                      </div>

                      {/* Name */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Full Name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400"
                        />
                      </div>

                      {/* Email & Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@company.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      {/* Conversation Topic */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                          Conversation About
                        </label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
                        >
                          <option value="Goal-Based SIP & Compounding">Goal-Based SIP & Compounding</option>
                          <option value="Multi-Asset Allocation & Hedging">Multi-Asset Allocation & Hedging</option>
                          <option value="Corporate / Business Treasury Surplus">Corporate / Business Treasury Surplus</option>
                          <option value="Existing Mutual Fund Portfolio Review">Existing Mutual Fund Portfolio Review</option>
                          <option value="NRI Wealth & Mutual Fund Planning">NRI Wealth & Mutual Fund Planning</option>
                          <option value="General Mutual Fund Advisory">General Mutual Fund Advisory</option>
                        </select>
                      </div>

                      {/* In Two or Three Sentences */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                          In Two or Three Sentences
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="What is the real question or context in front of you?"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-400 resize-none"
                        />
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="group mt-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Transmitting Context...
                          </>
                        ) : (
                          <>
                            Request a private conversation
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>

                      <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                        We value your privacy. No automated sales pitches or third-party disclosures.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: BOTTOM QUOTE BAND (MATCHING VINUMAMMEN STYLE) */}
        {/* ========================================================= */}
        <section className="mt-24 pt-16 border-t border-slate-200 text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-slate-700 max-w-3xl mx-auto leading-relaxed">
            "Technology should remove complexity — not remove judgment.
            A mutual fund portfolio, disciplined for life."
          </blockquote>
          <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-emerald-600">
            ABC Mutual Fund • Wealth & Investment Advisory
          </span>
        </section>
      </div>
    </main>
  );
}
