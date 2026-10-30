'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck, Quote } from 'lucide-react';

const reviews = [
  {
    quote: "ABC Mutual Fund redesigned our corporate treasury allocation. Their dynamic multi-asset strategy gave us stable yield during recent equity pullbacks.",
    author: "K. Ramesh",
    role: "Managing Director, Enterprise Tech",
    portfolio: "Multi-Asset PMS Portfolio"
  },
  {
    quote: "The team's clarity on mutual fund SIP execution and tax efficiency is unmatched. I have seen consistent disciplined compounding over 4 years.",
    author: "S. Priya",
    role: "Senior Consultant",
    portfolio: "Systematic SIP Strategy"
  },
  {
    quote: "Direct access to expert advisory with full SEBI-aligned transparency. Their tactical gold & silver hedge protected our retirement fund.",
    author: "V. Anand",
    role: "HNI Investor",
    portfolio: "Wealth Preservation Scheme"
  }
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-slate-900/40 border-y border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="text-red-500 text-xs font-bold tracking-widest uppercase mb-3">Investor Confidence</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Partnering in Financial Excellence</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-slate-950 border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between relative group hover:border-red-800/50 transition-all"
            >
              <Quote className="w-8 h-8 text-red-900/40 mb-4" />
              <p className="text-slate-300 text-sm leading-relaxed mb-8 italic">
                "{item.quote}"
              </p>

              <div>
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <h4 className="text-white font-bold text-base">{item.author}</h4>
                <p className="text-xs text-slate-400">{item.role}</p>
                <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-950/30 px-2.5 py-1 rounded-md border border-red-900/30">
                  {item.portfolio}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}