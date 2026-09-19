'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function WebDevServicePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-primary-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          ENGINEERING DIVISION // 01
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Custom Web & App Development
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          High-concurrency, SEO-optimized web systems engineered on Next.js 16,
          TypeScript, Drupal, WordPress, and modern edge infrastructure.
        </p>
      </div>

      {/* Core Capabilities & Design Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-primary-brand font-bold">
            CORE CAPABILITIES
          </div>
          <h3 className="text-2xl font-black uppercase">
            Next.js 16 App Router Architecture
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Leveraging Turbopack, React Server Components, and optimized
            streaming layouts to achieve lightning-fast sub-second route
            transitions.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Strict TypeScript type-safety pipelines</li>
            <li>✓ Core Web Vitals 99+ optimization</li>
            <li>✓ Zero-downtime Vercel & Cloudflare deployments</li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-green-brand font-bold">
            DESIGN SYSTEMS
          </div>
          <h3 className="text-2xl font-black uppercase">
            Tailwind v4 & Brutalist UIs
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Translating complex design tokens into clean, modular, and
            maintainable component libraries without UI drift.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Custom CSS variable theme mapping</li>
            <li>✓ Fully responsive mobile-first layouts</li>
            <li>✓ Accessible keyboard-navigable primitives</li>
          </ul>
        </div>
      </div>

      {/* Expanded CMS & Enterprise Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-green-brand font-bold">
            ENTERPRISE CMS
          </div>
          <h3 className="text-2xl font-black uppercase">
            Drupal Enterprise Solutions
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Advanced Drupal architecture, custom module development, Site Studio
            component design, Twig templating, and secure PHP backends for
            global enterprises.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Drupal Site Studio & Layout Builder integration</li>
            <li>✓ Custom Twig theme development & PHP modules</li>
            <li>✓ Headless Drupal with Next.js frontends</li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-red-brand font-bold">
            CONTENT PLATFORMS
          </div>
          <h3 className="text-2xl font-black uppercase">
            WordPress & WooCommerce Systems
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Custom WordPress theme architecture, plugin development, advanced
            WooCommerce checkouts, and high-performance caching optimization.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Custom plugin development & security hardening</li>
            <li>✓ Shop page caching diagnostic & resolution</li>
            <li>✓ Gutenberg block creation & ACF integration</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Box */}
      <div className="brutal-box p-8 text-center bg-studio-box space-y-4">
        <h3 className="text-xl font-black uppercase">
          Ready to architect your web system?
        </h3>
        <p className="text-xs max-w-md mx-auto opacity-80">
          Initiate a technical scoping sprint with our senior frontend
          architects.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block bg-primary-brand text-white hover:bg-primary-brand/90 transition-colors"
        >
          Initialize Project ➔
        </Link>
      </div>
    </motion.div>
  );
}
