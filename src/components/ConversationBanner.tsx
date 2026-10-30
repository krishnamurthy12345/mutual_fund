'use client';

import Link from 'next/link';
import { ArrowUpRight, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function ConversationBanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950 text-white relative overflow-hidden border-t border-emerald-900">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center justify-between">
          <div className="lg:col-span-8 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-3">
              ● Contact & Advisory
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Let's discuss what the{' '}
              <span className="font-serif italic font-normal text-emerald-300">
                opportunity could become.
              </span>
            </h2>
            <p className="text-emerald-100/75 text-sm md:text-base leading-relaxed font-light mb-6">
              Coimbatore, India &nbsp;·&nbsp; Worldwide Virtual Advisory &nbsp;·&nbsp; By Appointment.
              Bring the real question or milestone you are planning for.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-emerald-200/80">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Coimbatore, Tamil Nadu
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                +91 94889 74620
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20 text-center"
            >
              <span>Schedule a Considered Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919488974620"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all border border-white/20 text-center"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

