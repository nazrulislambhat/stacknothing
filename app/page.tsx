'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { HireDevWidget } from './components/hire-dev-widget';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Box */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="brutal-box p-8 md:p-14 relative overflow-hidden bg-studio-box space-y-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-green-brand font-bold tracking-widest flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-green-brand animate-ping"></span>
            [STUDIO & PRODUCT ECOSYSTEM]
          </div>
          <div className="text-[10px] font-mono border-2 border-studio-text px-3 py-1 bg-[var(--bg-primary)]">
            VERSION 16.0 // EDGE DEPLOYED
          </div>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            Hard-Edged Systems & Digital Utilities.
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-mono">
            We architect standalone consumer products like{' '}
            <a
              href="https://dhikrly.com"
              target="_blank"
              rel="noreferrer"
              className="text-studio-text underline decoration-green-brand decoration-2 font-bold hover:bg-green-brand hover:text-black transition-colors px-1"
            >
              dhikrly.com
            </a>
            , custom UI component primitives, and high-performance agency
            solutions without legacy bloat.
          </p>
        </div>

        {/* Live Ticker Bar */}
        <div className="border-t-2 border-b-2 border-studio-text py-3 overflow-hidden bg-[var(--bg-primary)]">
          <div className="animate-ticker text-xs font-mono uppercase tracking-widest space-x-8 opacity-90">
            <span>⚡ TURBOPACK OPTIMIZED</span>
            <span>•</span>
            <span>🚀 60+ MULTILINGUAL SITES SHIPPED</span>
            <span>•</span>
            <span>🔒 OFFLINE-FIRST ARCHITECTURE</span>
            <span>•</span>
            <span>⚡ NEXT.JS 16 APP ROUTER</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/contact"
            className="brutal-button px-8 py-4 text-xs uppercase bg-primary-brand text-white font-bold tracking-wider"
          >
            Start Project ➔
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-studio-text px-8 py-4 text-xs uppercase font-bold hover:border-red-brand hover:text-red-brand transition-colors bg-[var(--bg-primary)]"
          >
            View Portfolio & Clients ↗
          </Link>
        </div>
      </motion.section>

      {/* Studio Metrics Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="brutal-box p-6 bg-studio-box border-2 border-studio-text space-y-1">
          <div className="text-[10px] font-mono opacity-60 uppercase">
            Performance
          </div>
          <div className="text-3xl font-black text-green-brand">99%</div>
          <div className="text-[11px] font-mono opacity-80">
            Lighthouse Scores
          </div>
        </div>
        <div className="brutal-box p-6 bg-studio-box border-2 border-studio-text space-y-1">
          <div className="text-[10px] font-mono opacity-60 uppercase">
            Stack
          </div>
          <div className="text-3xl font-black text-primary-brand">100%</div>
          <div className="text-[11px] font-mono opacity-80">
            Strict TypeScript
          </div>
        </div>
        <div className="brutal-box p-6 bg-studio-box border-2 border-studio-text space-y-1">
          <div className="text-[10px] font-mono opacity-60 uppercase">
            Delivery
          </div>
          <div className="text-3xl font-black text-red-brand">2-4 Wk</div>
          <div className="text-[11px] font-mono opacity-80">
            High-Velocity Sprints
          </div>
        </div>
        <div className="brutal-box p-6 bg-studio-box border-2 border-studio-text space-y-1">
          <div className="text-[10px] font-mono opacity-60 uppercase">
            Infrastructure
          </div>
          <div className="text-3xl font-black text-studio-text">Edge</div>
          <div className="text-[11px] font-mono opacity-80">
            Vercel & Cloudflare
          </div>
        </div>
      </section>

      {/* Active Ecosystem Grid */}
      <section id="ecosystem" className="space-y-6">
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider">
          ACTIVE ECOSYSTEM PRODUCTS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dhikrly Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 flex flex-col justify-between border-2 border-red-brand bg-studio-box shadow-[6px_6px_0px_var(--text-primary)]"
          >
            <div className="space-y-3">
              <div className="inline-block bg-green-brand text-black text-[10px] font-bold px-2 py-0.5 uppercase font-mono">
                LIVE V1.2
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight">
                dhikrly.com
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-mono">
                A minimal digital athkar and mindful tracking suite designed
                with zero distractions and offline-first data persistence.
              </p>
            </div>
            <div className="pt-6">
              <a
                href="https://dhikrly.com"
                target="_blank"
                rel="noreferrer"
                className="brutal-button block text-center py-3 text-xs uppercase bg-primary-brand text-white font-bold tracking-wider"
              >
                [ LAUNCH APP ↗ ]
              </a>
            </div>
          </motion.div>

          {/* Stack UI Card */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 flex flex-col justify-between border-2 border-primary-brand bg-studio-box shadow-[6px_6px_0px_var(--text-primary)]"
          >
            <div className="space-y-3">
              <div className="inline-block bg-primary-brand text-white text-[10px] font-bold px-2 py-0.5 uppercase font-mono">
                INTERNAL REGISTRY
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight">
                STACK UI COMPONENTS
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-mono">
                Raw, unstyled blocks and high-performance React primitives
                engineered explicitly for modern Next.js 16 architectures.
              </p>
            </div>
            <div className="pt-6">
              <span className="border-2 border-studio-text block text-center py-3 text-xs uppercase bg-[var(--bg-primary)] opacity-60 cursor-not-allowed font-mono font-bold">
                [ REGISTRY LOCKED ]
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-6">
        <div className="border-l-4 border-primary-brand pl-4 text-sm font-bold uppercase tracking-wider">
          STUDIO CAPABILITIES & SERVICES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/services/web-dev"
            className="brutal-box p-6 space-y-3 block hover:border-primary-brand transition-colors group bg-studio-box flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="text-2xl group-hover:scale-110 transition-transform origin-left">
                ⚡
              </div>
              <h4 className="font-black uppercase text-sm">
                Custom Web & App Dev ➔
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-mono">
                Tailored web systems engineered for high concurrency, elite SEO
                scores, and maintainable modular structures.
              </p>
            </div>
            <div className="text-[10px] font-mono text-primary-brand font-bold pt-2">
              EXPLORE ARCHITECTURE →
            </div>
          </Link>

          <Link
            href="/services/ecommerce"
            className="brutal-box p-6 space-y-3 block hover:border-red-brand transition-colors group bg-studio-box flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="text-2xl group-hover:scale-110 transition-transform origin-left">
                🛒
              </div>
              <h4 className="font-black uppercase text-sm">
                E-commerce Platforms ➔
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-mono">
                Headless WooCommerce, Shopify setups, custom store architecture,
                and performance-tuned checkout funnels.
              </p>
            </div>
            <div className="text-[10px] font-mono text-red-brand font-bold pt-2">
              EXPLORE E-COMMERCE →
            </div>
          </Link>

          <Link
            href="/services/mobile"
            className="brutal-box p-6 space-y-3 block hover:border-green-brand transition-colors group bg-studio-box flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="text-2xl group-hover:scale-110 transition-transform origin-left">
                📱
              </div>
              <h4 className="font-black uppercase text-sm">
                Cross-Platform Apps ➔
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-mono">
                Mobile applications built via React Native and Capacitor,
                delivering unified iOS and Android codebases.
              </p>
            </div>
            <div className="text-[10px] font-mono text-green-brand font-bold pt-2">
              EXPLORE MOBILE →
            </div>
          </Link>

          <Link
            href="/services/refactoring"
            className="brutal-box p-6 space-y-3 block hover:border-studio-text transition-colors group bg-studio-box flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="text-2xl group-hover:scale-110 transition-transform origin-left">
                🔧
              </div>
              <h4 className="font-black uppercase text-sm">
                Legacy Refactoring ➔
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-mono">
                Rescuing bloated codebases and monolithic web apps, transforming
                them into lightning-fast Next.js 16 architectures.
              </p>
            </div>
            <div className="text-[10px] font-mono font-bold pt-2">
              EXPLORE REFACTORING →
            </div>
          </Link>
        </div>
      </section>

      {/* Hire Developer Widget */}
      <HireDevWidget />
    </div>
  );
}
