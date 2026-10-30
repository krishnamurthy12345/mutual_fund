'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  BarChart2,
  PieChart,
  Layers,
} from 'lucide-react';

const strategies = [
  {
    image:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80',
    icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
    title: 'Downside Protection',
    description:
      'Diversified portfolio construction using debt, gold and other asset classes to help manage portfolio volatility across market cycles.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
    icon: <TrendingUp className="w-7 h-7 text-emerald-600" />,
    title: 'SIP & Mutual Fund Growth',
    description:
      'Systematic investment strategies across equity, hybrid and diversified mutual funds designed for long-term wealth creation.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    icon: <RefreshCw className="w-7 h-7 text-emerald-600" />,
    title: 'Strategic Rebalancing',
    description:
      'Periodic portfolio reviews and allocation adjustments to keep investments aligned with changing goals, risk levels and market conditions.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    icon: <Layers className="w-7 h-7 text-emerald-600" />,
    title: 'PMS & AIF Solutions',
    description:
      'Access to portfolio management and alternative investment strategies for investors looking for professionally managed opportunities.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    icon: <PieChart className="w-7 h-7 text-emerald-600" />,
    title: 'Diversified Asset Allocation',
    description:
      'Balanced allocation across equity, debt, gold, REITs and other investment categories based on individual financial objectives.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    icon: <BarChart2 className="w-7 h-7 text-emerald-600" />,
    title: 'Tax-Aware Investing',
    description:
      'Investment planning that considers taxation, holding periods and portfolio structure as part of a broader long-term financial strategy.',
  },
];

export default function WealthStrategies() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
        bg-white
        border-y
        border-slate-200
        text-slate-900
      "
    >
      {/* ========================================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ========================================================= */}

      <div
        className="
          absolute
          top-0
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
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          bg-emerald-500/[0.025]
          rounded-full
          blur-[100px]
          pointer-events-none
        "
      />

      {/* ========================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ========================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
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
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-emerald-500
                animate-pulse
              "
            />

            Institutional Advisory
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              text-slate-900
              mb-4
              tracking-tight
            "
          >
            The ABC Mutual Fund{' '}
            <span
              className="
                bg-gradient-to-r
                from-emerald-700
                via-emerald-500
                to-emerald-400
                bg-clip-text
                text-transparent
              "
            >
              Advantage
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              text-slate-600
              max-w-xl
              mx-auto
              text-base
              leading-relaxed
            "
          >
            Structured investment strategies designed to diversify,
            manage risk and build long-term wealth through different
            market cycles.
          </p>

          {/* Divider */}

          <div
            className="
              w-16
              h-1
              bg-emerald-500
              rounded-full
              mx-auto
              mt-6
            "
          />
        </motion.div>

        {/* ========================================================= */}
        {/* STRATEGY CARDS */}
        {/* ========================================================= */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            lg:gap-8
          "
        >
          {strategies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-50px',
              }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-white
                border
                border-slate-200
                hover:border-emerald-300
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                hover:shadow-emerald-900/10
              "
            >

              {/* ================================================= */}
              {/* CARD IMAGE */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  w-full
                  h-56
                  overflow-hidden
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                  loading="lazy"
                />

                {/* Dark Gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/70
                    via-slate-900/20
                    to-transparent
                    transition-opacity
                    duration-500
                    group-hover:from-slate-950/50
                  "
                />

                {/* Emerald Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-emerald-600/0
                    group-hover:bg-emerald-600/10
                    transition-all
                    duration-500
                  "
                />

                {/* Image Number */}

                <div
                  className="
                    absolute
                    top-4
                    right-4
                    w-9
                    h-9
                    rounded-full
                    bg-white/90
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-bold
                    text-emerald-700
                    shadow-lg
                  "
                >
                  0{idx + 1}
                </div>

                {/* Image Bottom Label */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-5
                    right-5
                    text-white
                  "
                >
                  <span
                    className="
                      inline-block
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      font-semibold
                      text-emerald-300
                      mb-1
                    "
                  >
                    ABC Mutual Fund
                  </span>

                  <div
                    className="
                      text-sm
                      font-medium
                      text-white/90
                    "
                  >
                    Strategic Wealth Management
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* CARD CONTENT */}
              {/* ================================================= */}

              <div className="relative p-8">

                {/* Card Glow */}

                <div
                  className="
                    absolute
                    -top-20
                    -right-20
                    w-40
                    h-40
                    bg-emerald-100
                    rounded-full
                    blur-3xl
                    opacity-0
                    group-hover:opacity-70
                    transition-opacity
                    duration-700
                    pointer-events-none
                  "
                />

                {/* ================================================= */}
                {/* ICON */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    -mt-16
                    mb-6
                    w-14
                    h-14
                    rounded-xl
                    bg-white
                    border
                    border-emerald-200
                    shadow-lg
                    flex
                    items-center
                    justify-center
                    z-20
                    group-hover:bg-emerald-600
                    group-hover:border-emerald-600
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      group-hover:[&>svg]:text-white
                      transition-colors
                      duration-300
                    "
                  >
                    {item.icon}
                  </div>
                </div>

                {/* ================================================= */}
                {/* TITLE */}
                {/* ================================================= */}

                <h3
                  className="
                    relative
                    text-xl
                    font-bold
                    text-slate-900
                    mb-3
                    group-hover:text-emerald-700
                    transition-colors
                    duration-300
                  "
                >
                  {item.title}
                </h3>

                {/* ================================================= */}
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <p
                  className="
                    relative
                    text-slate-600
                    text-sm
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>

                {/* ================================================= */}
                {/* READ MORE */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-emerald-600
                    opacity-0
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                  "
                >
                  <span>Explore Strategy</span>

                  <span
                    className="
                      w-6
                      h-px
                      bg-emerald-500
                      transition-all
                      duration-300
                      group-hover:w-10
                    "
                  />
                </div>
              </div>

              {/* ================================================= */}
              {/* BOTTOM ACCENT */}
              {/* ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-8
                  right-8
                  h-[2px]
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-500
                  to-transparent
                  scale-x-0
                  group-hover:scale-x-100
                  transition-transform
                  duration-500
                "
              />

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}