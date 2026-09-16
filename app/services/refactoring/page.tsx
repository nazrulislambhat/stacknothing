'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function RefactoringServicePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-5xl mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          ENGINEERING DIVISION // 03
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Legacy Refactoring & Speed-Tuning
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          Rescuing bloated WordPress/WooCommerce codebases and monolithic web
          apps, transforming them into headless, lightning-fast Next.js 16
          architectures.
        </p>
      </div>

      {/* Core Refactoring Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-red-brand font-bold">
            MONOLITH RESCUE
          </div>
          <h3 className="text-2xl font-black uppercase">
            WordPress & WooCommerce Extraction
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Eliminating database bloat, plugin conflicts, and severe shop page
            caching failures by decoupling backend logic into robust headless
            APIs.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ WooCommerce 0-product caching diagnostics & fix</li>
            <li>✓ Database query optimization & index restructuring</li>
            <li>✓ Secure migration to headless WordPress or custom CMS</li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-green-brand font-bold">
            MIGRATION PIPELINE
          </div>
          <h3 className="text-2xl font-black uppercase">
            Next.js 16 Edge Migration
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Rebuilding legacy spaghetti code into clean, modular TypeScript
            systems leveraging React Server Components and Turbopack.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Zero-downtime DNS & route redirection strategies</li>
            <li>✓ Core Web Vitals score overhaul (Sub-second LCP)</li>
            <li>✓ Strict TypeScript type-safety enforcement</li>
          </ul>
        </div>
      </div>

      {/* Telemetry Warning Box */}
      <div className="brutal-box p-8 border-2 border-primary-brand bg-primary-brand/5 space-y-4">
        <div className="text-xs text-primary-brand font-bold uppercase">
          THE REFACTORING GUARANTEE
        </div>
        <h3 className="text-xl font-black uppercase">
          Is your current stack losing revenue to slow load times?
        </h3>
        <p className="text-xs leading-relaxed opacity-80 max-w-3xl">
          Every 100ms of latency drops conversion rates by up to 7%. Our senior
          architects audit your entire DOM, strip unnecessary third-party
          scripts, and rebuild your digital footprint for elite performance.
        </p>
      </div>

      {/* Call to Action Box */}
      <div className="brutal-box p-8 text-center bg-studio-box space-y-4">
        <h3 className="text-xl font-black uppercase">
          Ready to rescue your legacy infrastructure?
        </h3>
        <p className="text-xs max-w-md mx-auto opacity-80">
          Book an architecture sprint and let our engineering division diagnose
          your bottlenecks.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block bg-primary-brand text-white hover:bg-primary-brand/90 transition-colors"
        >
          Initialize Refactor Sprint ➔
        </Link>
      </div>
    </motion.div>
  );
}
