'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { SiteAuditWidget } from './components/site-audit-widget';
import { HireDevWidget } from './components/hire-dev-widget';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Box */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="brutal-box p-8 md:p-12 relative overflow-hidden"
      >
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
        <div className="border-t border-b border-primary-brand py-3 mb-8 overflow-hidden">
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
            className="brutal-button px-6 py-3 text-xs uppercase bg-primary-brand text-white"
          >
            Start Project ➔
          </Link>
          <Link
            href="/portfolio"
            className="border-2 px-6 py-3 text-xs uppercase font-bold hover:border-red-brand hover:text-red-brand transition-colors"
          >
            View Portfolio & Clients ↗
          </Link>
        </div>
      </motion.section>

      {/* Active Ecosystem Grid */}
      <section id="ecosystem" className="space-y-6">
        <div className="border-l-4 border-[#b2d12e] pl-4 text-sm font-bold uppercase tracking-wider">
          ACTIVE ECOSYSTEM PRODUCTS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dhikrly Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 flex flex-col justify-between border-2 border-red-brand shadow-[6px_6px_0px_#b2d12e]"
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
              className="brutal-button text-center py-3 text-xs uppercase bg-[#3139FB] text-white shadow-[4px_4px_0px_var(--text-primary)]"
            >
              [ LAUNCH APP ↗ ]
            </a>
          </motion.div>

          {/* Stack UI Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 flex flex-col justify-between border-2 border-primary-brand shadow-[6px_6px_0px_#3139FB]"
          >
            <div>
              <div className="inline-block bg-primary-brand text-white text-xs font-bold px-2 py-0.5 mb-4 uppercase">
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
            <span className="border-2 border-black text-center py-3 text-xs uppercase bg-zinc-100 dark:bg-black text-zinc-400 cursor-not-allowed">
              [ REGISTRY LOCKED ]
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#3139FB] pl-4 text-sm font-bold uppercase tracking-wider">
          STUDIO CAPABILITIES & SERVICES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/services/web-dev"
            className="brutal-box p-6 space-y-3 block hover:border-[#3139FB] transition-colors group"
          >
            <div className="text-xl group-hover:scale-125 transition-transform origin-left">
              ⚡
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
            href="/services/refactoring"
            className="brutal-box p-6 space-y-3 block hover:border-[#3d155f] transition-colors group"
          >
            <div className="text-xl group-hover:scale-125 transition-transform origin-left">
              🔧
            </div>
            <h4 className="font-black uppercase text-sm">
              Legacy Refactoring ➔
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Rescuing bloated WordPress/WooCommerce codebases and monolithic
              web apps, transforming them into headless, lightning-fast Next.js
              16 architectures.
            </p>
          </Link>
        </div>
      </section>
      <HireDevWidget />
      <SiteAuditWidget />
    </div>
  );
}
