'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Beta & Launch Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="border-2 border-[var(--text-primary)] bg-[var(--box-bg)] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono shadow-[4px_4px_0px_#b2d12e]"
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#b2d12e] animate-ping"></span>
          <span className="font-black uppercase text-[var(--text-primary)]">
            SYSTEM STATUS: PUBLIC BETA
          </span>
        </div>
        <div className="text-zinc-600 dark:text-zinc-300 font-bold uppercase">
          [ESTIMATED STABLE LAUNCH:{' '}
          <span className="text-[#b2d12e]">NOV 4, 2026</span>]
        </div>
      </motion.div>

      {/* Hero Box */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="brutal-box p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute top-4 right-4 text-[10px] border border-[var(--text-primary)] px-2 py-1 bg-[#1f01b9] text-white font-bold uppercase">
          NEXT.JS 16 CORE LAB
        </div>

        <div className="text-xs text-[#b2d12e] mb-4 font-bold tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#b2d12e] animate-ping"></span>
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
            className="text-[var(--text-primary)] underline decoration-[#b2d12e] decoration-2 font-bold hover:bg-[#b2d12e] hover:text-black transition-colors px-1"
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
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="brutal-button px-6 py-3 text-xs uppercase bg-[#1f01b9] text-white"
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

      {/* Beta Notice Box regarding Email Transmissions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="brutal-box p-6 border-2 border-[#db4a2b] bg-[#db4a2b]/5 space-y-2 text-xs font-mono"
      >
        <div className="text-[#db4a2b] font-bold uppercase tracking-wider">
          ⚠️ NOTICE: BETA CONTACT ROUTING
        </div>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Direct automated contact form email transmissions are currently
          undergoing staging configuration updates during the beta period. If
          your form submission fails, please write to{' '}
          <a
            href="mailto:nazrul@stacknothing.com"
            className="font-bold underline text-[var(--text-primary)]"
          >
            nazrul@stacknothing.com
          </a>{' '}
          directly.
        </p>
      </motion.div>

      {/* Active Ecosystem Grid */}
      <section id="ecosystem" className="space-y-6">
        <div className="border-l-4 border-[#b2d12e] pl-4 text-sm font-bold uppercase tracking-wider">
          ACTIVE ECOSYSTEM PRODUCTS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dhikrly Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 flex flex-col justify-between border-2 border-[var(--text-primary)] shadow-[6px_6px_0px_#b2d12e]"
          >
            <div>
              <div className="inline-block bg-[#b2d12e] text-black text-xs font-bold px-2 py-0.5 mb-4 uppercase">
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
              className="brutal-button text-center py-3 text-xs uppercase bg-[#1f01b9] text-white shadow-[4px_4px_0px_var(--text-primary)]"
            >
              [ LAUNCH APP ↗ ]
            </a>
          </motion.div>

          {/* Stack UI Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 flex flex-col justify-between border-2 border-[var(--text-primary)] shadow-[6px_6px_0px_#1f01b9]"
          >
            <div>
              <div className="inline-block bg-[#1f01b9] text-white text-xs font-bold px-2 py-0.5 mb-4 uppercase">
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
        <div className="border-l-4 border-[#1f01b9] pl-4 text-sm font-bold uppercase tracking-wider">
          STUDIO CAPABILITIES & SERVICES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/services/web-dev"
            className="brutal-box p-6 space-y-3 block hover:border-[#1f01b9] transition-colors group"
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
            className="brutal-box p-6 space-y-3 block hover:border-[#db4a2b] transition-colors group"
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
            href="/services/mobile"
            className="brutal-box p-6 space-y-3 block hover:border-[#b2d12e] transition-colors group"
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

          <Link
            href="/services/ui-ux"
            className="brutal-box p-6 space-y-3 block hover:border-[#3d155f] transition-colors group"
          >
            <div className="text-xl group-hover:scale-125 transition-transform origin-left">
              🎨
            </div>
            <h4 className="font-black uppercase text-sm">
              UI/UX & Figma-to-Code ➔
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Pixel-perfect design tokens translated into clean React and
              Tailwind CSS components without drift.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
