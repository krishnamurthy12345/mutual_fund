'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-16 border-t border-emerald-800 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        {/* =====================================================
            MAIN FOOTER GRID
        ====================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* =====================================================
              BRAND & LOGO
          ====================================================== */}
          <div className="md:col-span-2">
            <Link
              href="/"
              aria-label="ABC Mutual Fund Home"
              className="inline-flex items-center gap-3 mb-5 group"
            >
              <div className="relative group/logo">
                <div className="absolute -inset-2 rounded-2xl bg-emerald-400/30 blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />

                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-emerald-400/40 shadow-lg flex items-center justify-center group-hover/logo:border-emerald-300 transition-all duration-300">
                  <Image
                    src="/images/abc-logo.svg"
                    alt="ABC Mutual Fund Logo"
                    fill
                    priority
                    sizes="48px"
                    className="object-contain p-1.5 transition-transform duration-500 group-hover/logo:scale-105"
                  />
                </div>
              </div>

              <div>
                <div className="text-xl font-extrabold text-white tracking-tight leading-none group-hover:text-emerald-300 transition-colors duration-300">
                  ABC{' '}
                  <span className="text-emerald-400 font-serif italic font-normal">
                    MUTUAL FUND
                  </span>
                </div>
                <div className="text-[9px] font-bold tracking-widest text-emerald-200/70 uppercase mt-1">
                  Wealth & Advisory
                </div>
              </div>
            </Link>

            <p className="text-emerald-100/70 text-xs leading-relaxed max-w-sm mb-6">
              SEBI-aligned mutual fund distribution & wealth advisory. We help families,
              salaried professionals, and businesses compound capital systematically through disciplined asset allocation.
            </p>

            {/* Social Media Accounts */}
            <div className="flex items-center gap-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-800 hover:border-emerald-600 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-800 hover:border-emerald-600 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-800 hover:border-emerald-600 transition-all"
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
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-800 hover:border-emerald-600 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-800 hover:border-emerald-600 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.396 0 .029 5.367.029 11.987c0 2.108.549 4.168 1.595 5.97L0 24l6.235-1.587c1.734.945 3.697 1.442 5.796 1.442 6.634 0 12.002-5.367 12.002-11.987S18.665 0 12.031 0zm-.002 21.87c-1.84 0-3.64-.495-5.207-1.432l-.373-.222-3.87 1.015 1.033-3.77-.244-.388c-1.031-1.64-1.575-3.54-1.575-5.485 0-5.522 4.492-10.015 10.019-10.015 5.526 0 10.018 4.493 10.018 10.015 0 5.523-4.492 10.016-10.018 10.016zm5.488-7.488c-.3-.15-1.774-.875-2.049-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.41-1.488-.89-.794-1.492-1.775-1.667-2.075-.175-.3-.019-.462.131-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.584-.492-.505-.675-.514-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.23 5.124 4.53.716.31 1.275.495 1.71.634.719.229 1.374.197 1.892.12.577-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-emerald-900/60 border border-emerald-800 flex items-center justify-center text-emerald-200 hover:text-white hover:bg-emerald-800 hover:border-emerald-600 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/focus" className="hover:text-white transition-colors">
                  Strategic Focus
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Perspectives
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* =====================================================
              MUTUAL FUND STRATEGIES
          ====================================================== */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-5">
              Mutual Fund Focus
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <Link href="/focus" className="hover:text-white transition-colors">
                  Core Equity SIP Architecture
                </Link>
              </li>
              <li>
                <Link href="/focus" className="hover:text-white transition-colors">
                  Multi-Asset Hedging Funds
                </Link>
              </li>
              <li>
                <Link href="/focus" className="hover:text-white transition-colors">
                  Corporate Treasury Surpluses
                </Link>
              </li>
              <li>
                <Link href="/focus" className="hover:text-white transition-colors">
                  Cycle Rebalancing & STP
                </Link>
              </li>
              <li>
                <Link href="/focus" className="hover:text-white transition-colors">
                  Tax-Efficient Withdrawals (SWP)
                </Link>
              </li>
            </ul>
          </div>

          {/* =====================================================
              DIRECT ADVISORY
          ====================================================== */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-5">
              Direct Advisory
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <a
                  href="mailto:abc@gmail.com"
                  className="hover:text-emerald-300 transition-colors break-all"
                >
                  abc@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919488974620"
                  className="hover:text-emerald-300 transition-colors"
                >
                  +91 9876543210
                </a>
              </li>
              <li>
                <span className="text-emerald-200/60 block pt-1">
                  Coimbatore, Tamil Nadu, India
                </span>
              </li>
              <li className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-emerald-300 border-b border-emerald-400 pb-0.5 hover:text-white hover:border-white transition-all text-xs font-bold uppercase tracking-wider"
                >
                  <span>Request Consultation</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="pt-8 border-t border-emerald-800 text-xs text-emerald-100/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} ABC Mutual Fund. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-emerald-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-emerald-300 transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}
        <div className="mt-8 p-5 rounded-2xl bg-emerald-900/40 border border-emerald-800 text-[10px] text-emerald-100/60 leading-relaxed text-justify">
          <span className="font-bold text-emerald-300">SEBI & AMFI Regulatory Disclaimer:</span>{' '}
          Mutual Fund investments are subject to market risks, read all scheme-related documents carefully.
          Past performance is not indicative of future returns. The perspectives and frameworks shared on this
          platform are for educational and advisory orientation purposes.
        </div>
      </div>
    </footer>
  );
}
