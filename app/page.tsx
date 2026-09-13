'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="border-2 border-[#00FF66] bg-[#00FF66]/10 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono"
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00FF66] animate-ping"></span>
          <span className="font-black uppercase text-[var(--text-primary)]">
            SYSTEM STATUS: PUBLIC BETA
          </span>
        </div>
        <div className="text-zinc-600 dark:text-zinc-300 font-bold uppercase">
          [ESTIMATED STABLE LAUNCH:{' '}
          <span className="text-[#00FF66]">NOV 4, 2026</span>]
        </div>
      </motion.div>
      {/* Hero Box with Micro-Animation Entry */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="brutal-box p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-4 right-4 text-[10px] border border-[var(--text-primary)] px-2 py-1 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold uppercase animate-pulse">
          NEXT.JS 16 CORE LAB
        </div>

        <div className="text-xs text-[#00FF66] mb-4 font-bold tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping"></span>
          [STUDIO & PRODUCT ECOSYSTEM]
        </div>

        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-none">
          HARD-EDGED SYSTEMS & DIGITAL UTILITIES.
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
          We architect standalone consumer products like{' '}
          <a
            href="https://dhikrly.com"
            target="_blank"
            className="text-[var(--text-primary)] underline decoration-[#00FF66] decoration-2 font-bold hover:bg-[#00FF66] hover:text-black transition-colors px-1"
          >
            dhikrly.com
          </a>
          , custom UI component primitives, and high-performance agency
          solutions.
        </p>

        {/* Live Ticker Bar */}
        <div className="border-t border-b border-[var(--text-primary)]/20 py-3 mb-8 overflow-hidden">
          <div className="animate-ticker text-xs font-mono uppercase tracking-widest space-x-8">
            <span>⚡ TURBOPACK OPTIMIZED</span>
            <span>•</span>
            <span>🚀 60+ MULTILINGUAL SITES SHIPPED</span>
            <span>•</span>
            <span>🔒 OFFLINE-FIRST ARCHITECTURE</span>
            <span>•</span>
            <span>⚡ TURBOPACK OPTIMIZED</span>
            <span>•</span>
            <span>🚀 60+ MULTILINGUAL SITES SHIPPED</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="brutal-button px-6 py-3 text-xs uppercase"
          >
            Start Project ➔
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-[var(--text-primary)] px-6 py-3 text-xs uppercase font-bold hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors shadow-[4px_4px_0px_var(--text-primary)]"
          >
            View Portfolio & Clients ↗
          </Link>
        </div>
      </motion.section>

      {/* Active Ecosystem Grid */}
      <section id="ecosystem" className="space-y-6">
        <div className="border-l-4 border-[#00FF66] pl-4 text-sm font-bold uppercase tracking-wider">
          ACTIVE ECOSYSTEM PRODUCTS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dhikrly Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 flex flex-col justify-between border-2 border-[#00FF66] shadow-[6px_6px_0px_#00FF66]"
          >
            <div>
              <div className="inline-block bg-[#00FF66] text-black text-xs font-bold px-2 py-0.5 mb-4 uppercase">
                LIVE V1.2
              </div>
              <h3 className="text-3xl font-black uppercase mb-3">
                dhikrly.com
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
                A minimal digital athkar and mindful tracking suite designed
                with zero distractions and offline-first data persistence.
              </p>
            </div>
            <a
              href="https://dhikrly.com"
              target="_blank"
              rel="noreferrer"
              className="brutal-button text-center py-3 text-xs uppercase bg-[#00FF66] text-black shadow-[4px_4px_0px_currentColor]"
            >
              [ LAUNCH APP ↗ ]
            </a>
          </motion.div>

          {/* Stack UI Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 flex flex-col justify-between border-2 border-[#00E5FF] shadow-[6px_6px_0px_#00E5FF]"
          >
            <div>
              <div className="inline-block bg-[#00E5FF] text-black text-xs font-bold px-2 py-0.5 mb-4 uppercase">
                INTERNAL REGISTRY
              </div>
              <h3 className="text-3xl font-black uppercase mb-3">
                STACK UI COMPONENTS
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
                Raw, unstyled blocks and high-performance React primitives
                engineered explicitly for modern Next.js 16 architectures.
              </p>
            </div>
            <span className="border-2 border-[var(--text-primary)] text-center py-3 text-xs uppercase bg-zinc-100 dark:bg-black text-zinc-400 cursor-not-allowed">
              [ REGISTRY LOCKED ]
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#FF007F] pl-4 text-sm font-bold uppercase tracking-wider">
          STUDIO CAPABILITIES & SERVICES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/services/web-dev"
            className="brutal-box p-6 space-y-3 block hover:border-[#00FF66] transition-colors group"
          >
            <div className="text-xl group-hover:scale-125 transition-transform origin-left">
              🔧
            </div>
            <h4 className="font-black uppercase text-sm">
              Custom Web & App Dev ➔
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Tailored web systems engineered for high concurrency, elite SEO
              scores, and maintainable modular structures.
            </p>
          </Link>

          <Link
            href="/services/ecommerce"
            className="brutal-box p-6 space-y-3 block hover:border-[#00E5FF] transition-colors group"
          >
            <div className="text-xl group-hover:scale-125 transition-transform origin-left">
              🛒
            </div>
            <h4 className="font-black uppercase text-sm">
              E-commerce Platforms ➔
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Headless WooCommerce, Shopify setups, custom store architecture,
              and performance-tuned checkout funnels.
            </p>
          </Link>

          <Link
            href="/services/web-dev"
            className="brutal-box p-6 space-y-3 block hover:border-yellow-400 transition-colors group"
          >
            <div className="text-xl group-hover:scale-125 transition-transform origin-left">
              🌐
            </div>
            <h4 className="font-black uppercase text-sm">Web Apps & PWAs ➔</h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Progressive web applications utilizing modern JavaScript
              frameworks, Service Workers, and native device feel.
            </p>
          </Link>

          <Link
            href="/services/mobile"
            className="brutal-box p-6 space-y-3 block hover:border-[#FF007F] transition-colors group"
          >
            <div className="text-xl group-hover:scale-125 transition-transform origin-left">
              📱
            </div>
            <h4 className="font-black uppercase text-sm">
              Cross-Platform Apps ➔
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Mobile applications built via React Native and Capacitor,
              delivering unified iOS and Android codebases.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
