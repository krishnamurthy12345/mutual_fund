'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import { getAssetPath } from '@/lib/utils';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Focus', href: '/focus' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* ========================================================= */}
        {/* BRAND - LOGO + NAME - CLICK TO HOME */}
        {/* ========================================================= */}
        <Link
          href="/"
          aria-label="ABC Mutual Fund Home"
          onClick={closeMobileMenu}
          className="flex items-center gap-3 group cursor-pointer shrink-0"
        >
          {/* Logo container */}
          <div className="relative group/logo">
            <div className="absolute -inset-2 rounded-2xl bg-emerald-400/20 blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />

            <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center overflow-hidden group-hover/logo:border-emerald-300 group-hover/logo:shadow-lg group-hover/logo:shadow-emerald-500/15 transition-all duration-300">
              <Image
                src={getAssetPath("/images/abc-logo.svg")}
                alt="ABC Mutual Fund Logo"
                fill
                priority
                sizes="48px"
                className="object-contain p-1.5 transition-transform duration-500 group-hover/logo:scale-105"
              />
            </div>
          </div>

          {/* Brand Name */}
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-tight leading-none transition-colors duration-300 group-hover:text-emerald-600">
              ABC{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-serif italic font-normal transition-colors duration-300">
                MUTUAL FUND
              </span>
            </span>

            <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mt-0.5 group-hover:text-emerald-600 transition-colors duration-300">
              Wealth & Investment Advisory
            </span>
          </div>
        </Link>

        {/* ========================================================= */}
        {/* DESKTOP NAVIGATION (>= lg) */}
        {/* ========================================================= */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 transition-colors duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 ${
                  isActive ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-emerald-500 after:transition-all after:duration-300 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ========================================================= */}
        {/* RIGHT SIDE CONTROLS (ALWAYS VISIBLE ACROSS ALL BREAKPOINTS) */}
        {/* ========================================================= */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Social Icons (Desktop only >= xl to keep tablet/md clean) */}
          <div className="hidden xl:flex items-center gap-1.5 pr-2 border-r border-slate-200 dark:border-slate-800">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/belliscapital"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook Page"
              title="Facebook"
              className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/belliscapital/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
              title="Instagram"
              className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
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
              aria-label="X (Twitter) Profile"
              title="X (Twitter)"
              className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* ======================================================= */}
          {/* THEME TOGGLE: EXPLICITLY SHOWN ON ALL DEVICES (MOBILE, MD, LG, XL) */}
          {/* ======================================================= */}
          <div className="flex items-center shrink-0">
            <ThemeToggle />
          </div>

          {/* Book Consultation Button (Shows on sm, md, lg, xl) */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md hover:shadow-emerald-600/20 transition-all duration-200 shrink-0"
          >
            <span>Consultation</span>
            <span className="text-emerald-200">↗</span>
          </Link>

          {/* Mobile / Tablet Menu Button (< lg) */}
          <button
            onClick={toggleMobileMenu}
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-200 shrink-0"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE / TABLET MENU DROPDOWN & BACKDROP (< lg) */}
      {/* ========================================================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-20 bg-slate-900/50 backdrop-blur-sm -z-10 animate-fade-in"
            onClick={closeMobileMenu}
          />

          <div className="bg-white/98 dark:bg-slate-900/98 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 shadow-xl px-6 py-6 space-y-5">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                        : 'text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50/60 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Consultation Link in Drawer */}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>Book Consultation</span>
                <span>↗</span>
              </Link>
            </div>

            {/* Social Accounts & Drawer Controls */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Official Channels
              </span>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/belliscapital"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/belliscapital/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600"
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
                <a
                  href="https://x.com/belliscapital"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-600"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
