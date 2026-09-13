'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function WebDevService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-16"
    >
      <div>
        <div className="border-l-4 border-[#00FF66] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CORE CAPABILITY // 01
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Custom Web & App Development
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mt-3 max-w-2xl leading-relaxed">
          High-performance web systems engineered for maximum concurrency,
          sub-second route transitions, and uncompromising SEO scores using
          Next.js 16 and TypeScript.
        </p>
      </div>

      {/* Overview Block */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="brutal-box p-8 space-y-6 text-zinc-700 dark:text-zinc-300 text-xs md:text-sm leading-relaxed"
      >
        <h2 className="text-xl font-black uppercase text-[var(--text-primary)]">
          The Engineering Philosophy
        </h2>
        <p>
          We discard bloated enterprise templates and unnecessary JavaScript
          bundles. Every web application we architect is built around the{' '}
          <strong className="text-[var(--text-primary)]">
            Next.js 16 App Router
          </strong>
          , leveraging React Server Components (RSC), Partial Prerendering
          (PPR), and Turbopack builds to deliver lightning-fast experiences that
          convert visitors into active users.
        </p>
        <p>
          Whether you are launching a greenfield SaaS product or modernizing a
          legacy monolithic codebase, our engineering sprints focus on modular
          component isolation, strict type safety, and bulletproof offline
          resilience.
        </p>
      </motion.div>

      {/* Detailed Grid Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4">
          <div className="text-xs font-bold uppercase text-[#00FF66]">
            ARCHITECTURAL STACK
          </div>
          <h3 className="text-2xl font-black uppercase">Modern Tooling</h3>
          <ul className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Framework:</strong> Next.js 16 (App Router & PPR)
            </li>
            <li>
              <strong>Language:</strong> Strict TypeScript for scalable types
            </li>
            <li>
              <strong>Styling:</strong> Tailwind CSS v4 & custom brutalist
              tokens
            </li>
            <li>
              <strong>State & Motion:</strong> Zustand & Framer Motion
              (`motion/react`)
            </li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4">
          <div className="text-xs font-bold uppercase text-[#00E5FF]">
            PERFORMANCE METRICS
          </div>
          <h3 className="text-2xl font-black uppercase">
            Guaranteed Benchmarks
          </h3>
          <ul className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Core Web Vitals:</strong> 99-100 across all Lighthouse
              categories
            </li>
            <li>
              <strong>Bundle Optimization:</strong> Zero hydration mismatch &
              minimal client JS
            </li>
            <li>
              <strong>Caching:</strong> Smart edge caching with invalidation
              hooks
            </li>
            <li>
              <strong>Security:</strong> Enterprise-grade CSP headers &
              sanitization
            </li>
          </ul>
        </div>
      </div>

      {/* Studio Workflow Steps */}
      <div className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FF007F]">
          THE DEVELOPMENT LIFECYCLE
        </div>
        <div className="space-y-4">
          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                STEP 01
              </div>
              <h4 className="text-lg font-black uppercase">
                Architecture & Token Mapping
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Deep dive into data flows, API boundaries, and design token
                hierarchies.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              DAYS 1-3
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                STEP 02
              </div>
              <h4 className="text-lg font-black uppercase">
                Component Engineering & Core Sprints
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Iterative shipping of server primitives, atomic UI blocks, and
                database integrations.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              WEEKS 1-3
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                STEP 03
              </div>
              <h4 className="text-lg font-black uppercase">
                Load Testing & Edge Deployment
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Rigorous stress testing, Core Web Vitals verification, and
                Vercel/Cloudflare production release.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              WEEK 4
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="brutal-box p-8 bg-zinc-100 dark:bg-zinc-950 text-center space-y-4">
        <h3 className="text-2xl font-black uppercase">
          Ready to build your web architecture?
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs max-w-md mx-auto">
          Book an architectural sprint or reach out directly to discuss your
          custom project specifications.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link
            href="/contact"
            className="brutal-button px-6 py-3 text-xs uppercase bg-[#00FF66] text-black font-bold"
          >
            Initialize Project Sprint ➔
          </Link>
          <Link
            href="/pricing"
            className="border-2 border-[var(--text-primary)] px-6 py-3 text-xs uppercase font-bold hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors"
          >
            View Regional Pricing
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
