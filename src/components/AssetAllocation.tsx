'use client';

import { motion } from 'framer-motion';

export default function AssetAllocation() {
  return (
    <section
      id="asset-allocation"
      className="
        py-32
        bg-slate-50
        text-slate-900
        relative
        border-t
        border-slate-200
        overflow-hidden
      "
    >

      {/* =====================================================
          BACKGROUND GREEN GLOW
      ====================================================== */}
      <div
        className="
          absolute
          top-1/3
          left-0
          w-96
          h-96
          bg-emerald-100/50
          rounded-full
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-96
          h-96
          bg-emerald-50
          rounded-full
          blur-[120px]
          pointer-events-none
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          md:grid-cols-2
          gap-16
          items-center
          relative
          z-10
        "
      >

{/* =====================================================
            RIGHT VIDEO
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            relative
            w-full
            h-[380px]
            md:h-[500px]
            rounded-3xl
            overflow-hidden
            bg-white
            border
            border-emerald-100
            shadow-2xl
            shadow-emerald-900/10
            group
          "
        >

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-transform
              duration-1000
              group-hover:scale-105
            "
          >
            <source
              src="/videos/animation.mp4"
              type="video/mp4"
            />
          </video>

          {/* Green Glass Badge */}
          <div
            className="
              absolute
              top-6
              left-6
              px-4
              py-2
              rounded-full
              bg-white/90
              backdrop-blur-md
              border
              border-emerald-200
              shadow-lg
            "
          >
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                font-bold
                text-emerald-700
              "
            >
              Strategic Allocation
            </span>
          </div>

          {/* Bottom Content */}
          <div
            className="
              absolute
              bottom-6
              left-6
              right-6
              pointer-events-none
            "
          >
            <div
              className="
                bg-white/90
                backdrop-blur-md
                rounded-2xl
                px-5
                py-4
                border
                border-emerald-100
                shadow-xl
              "
            >
              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  font-bold
                  text-emerald-600
                  mb-1
                "
              >
                Portfolio Architecture
              </div>

              <div
                className="
                  text-lg
                  font-semibold
                  text-slate-900
                "
              >
                Dynamic Asset Allocation
              </div>
            </div>
          </div>

        </motion.div>

        
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* Label */}
          <div
            className="
              inline-flex
              items-center
              px-3
              py-1
              rounded-full
              bg-emerald-50
              border
              border-emerald-200
              text-emerald-700
              text-xs
              font-bold
              tracking-widest
              uppercase
              mb-5
            "
          >
            Core Mutual Fund Framework
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              tracking-tight
              mb-6
              text-slate-900
              leading-tight
            "
          >
            Multi-Asset
            <br />

            <span
              className="
                font-serif
                italic
                text-emerald-600
                font-normal
              "
            >
              Allocation Strategy
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              text-slate-600
              mb-8
              text-base
              leading-relaxed
              max-w-xl
            "
          >
            Engineered for market volatility. Our dynamic asset
            rebalancing model combines equity mutual funds with
            precious metals and fixed income to protect capital
            during market drawdowns.
          </p>

          {/* =====================================================
              ALLOCATION ITEMS
          ====================================================== */}
          <ul className="space-y-4 text-sm text-slate-700">

            {/* Gold */}
            <li
              className="
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                bg-white
                border
                border-slate-200
                hover:border-emerald-300
                hover:shadow-lg
                hover:shadow-emerald-100/50
                transition-all
                duration-300
              "
            >
              <span
                className="
                  w-3.5
                  h-3.5
                  rounded-full
                  bg-amber-500
                  shadow-md
                  shadow-amber-500/30
                  shrink-0
                "
              />

              <span>
                <strong className="text-slate-900">
                  Gold & Silver:
                </strong>{' '}
                20% – 40% (Inflation Hedge)
              </span>
            </li>

            {/* Equity */}
            <li
              className="
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                bg-white
                border
                border-slate-200
                hover:border-emerald-300
                hover:shadow-lg
                hover:shadow-emerald-100/50
                transition-all
                duration-300
              "
            >
              <span
                className="
                  w-3.5
                  h-3.5
                  rounded-full
                  bg-emerald-600
                  shadow-md
                  shadow-emerald-500/30
                  shrink-0
                "
              />

              <span>
                <strong className="text-slate-900">
                  Equity Mutual Funds:
                </strong>{' '}
                15% – 35% (Compound Growth)
              </span>
            </li>

            {/* Debt */}
            <li
              className="
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                bg-white
                border
                border-slate-200
                hover:border-emerald-300
                hover:shadow-lg
                hover:shadow-emerald-100/50
                transition-all
                duration-300
              "
            >
              <span
                className="
                  w-3.5
                  h-3.5
                  rounded-full
                  bg-emerald-800
                  shadow-md
                  shadow-emerald-700/20
                  shrink-0
                "
              />

              <span>
                <strong className="text-slate-900">
                  Debt & Arbitrage:
                </strong>{' '}
                25% – 50% (Capital Preservation)
              </span>
            </li>

            {/* REIT */}
            <li
              className="
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                bg-white
                border
                border-slate-200
                hover:border-emerald-300
                hover:shadow-lg
                hover:shadow-emerald-100/50
                transition-all
                duration-300
              "
            >
              <span
                className="
                  w-3.5
                  h-3.5
                  rounded-full
                  bg-emerald-400
                  shadow-md
                  shadow-emerald-400/30
                  shrink-0
                "
              />

              <span>
                <strong className="text-slate-900">
                  REITs & Alternatives:
                </strong>{' '}
                Max 10% (Yield Generation)
              </span>
            </li>

          </ul>
        </motion.div>

        
      </div>
    </section>
  );
}