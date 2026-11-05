'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Video } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const vlogs = [
  {
    id: "1",
    title: "SIP vs Lumpsum Mutual Fund Investing",
    description: "Detailed analysis on when to deploy lumpsum capital vs automated monthly SIPs during market peaks.",
    category: "Mutual Fund Basics",
    duration: "10:15",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "2",
    title: "Multi-Asset Allocation Funds Explained",
    description: "Why multi-asset NFOs outpace traditional FDs by combining Gold, Equity, and Debt under one umbrella.",
    category: "Asset Allocation",
    duration: "12:40",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "3",
    title: "Navigating Market Volatility & Dips",
    description: "How structural domestic mutual fund inflows cushion Indian equity markets against global sell-offs.",
    category: "Market Outlook",
    duration: "14:20",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "4",
    title: "Equity vs Debt Mutual Funds Strategy",
    description: "How to structure debt mutual funds for short-term liquidity while keeping long-term equity growth on track.",
    category: "Portfolio Planning",
    duration: "09:50",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "5",
    title: "Selecting Top Performing NFOs",
    description: "Key metrics to check before investing in New Fund Offers (NFOs) and thematic sectoral mutual funds.",
    category: "NFO Analysis",
    duration: "11:10",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "6",
    title: "Annual Portfolio Rebalancing Guide",
    description: "Step-by-step guide to trimming equity gains and shifting into debt to lock in compounding returns.",
    category: "Wealth Growth",
    duration: "13:05",
    youtubeId: "dQw4w9WgXcQ"
  }
];

export default function VlogHub() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-32 bg-slate-950 text-slate-100 relative overflow-hidden">
      
      {/* Background Video Layer for Vlog Hub Section */}
      <div className="absolute inset-0 z-0 opacity-15 overflow-hidden pointer-events-none">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={getAssetPath("/videos/vlog-bg.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-800 pb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
              <Video className="w-4 h-4 text-red-500" /> Mutual Fund Intelligence & Media
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Investor Education Hub</h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm">
            Watch our SEBI-aligned wealth breakdown vlogs on systematic investment plans, market macro trends, and asset allocation.
          </p>
        </div>

        {/* 6 Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vlogs.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-red-800/60 transition-all group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div 
                  onClick={() => setActiveVideo(item.youtubeId)}
                  className="relative aspect-video bg-slate-950 cursor-pointer overflow-hidden flex items-center justify-center group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-80" />
                  
                  {/* Play Button matching Red/Burgundy brand */}
                  <div className="w-14 h-14 rounded-full bg-red-800 hover:bg-red-700 text-white flex items-center justify-center z-20 shadow-xl group-hover:scale-110 transition-transform border border-red-600/50">
                    <Play className="w-6 h-6 fill-current ml-0.5 text-amber-400" />
                  </div>

                  <span className="absolute bottom-3 right-3 z-20 bg-slate-950/90 border border-slate-800 px-2.5 py-1 text-[11px] font-bold text-amber-400 rounded-md">
                    {item.duration}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => setActiveVideo(item.youtubeId)}
                  className="w-full bg-slate-950 hover:bg-red-800 hover:text-white border border-slate-800 text-slate-200 text-xs font-bold uppercase tracking-widest py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  Watch Episode <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-950 text-slate-400 hover:text-white flex items-center justify-center border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                  title="Mutual Fund Advisory Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}