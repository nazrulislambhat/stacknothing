'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function MVPServicePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-5xl mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          ENGINEERING DIVISION // 04
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Startup MVP Fast-Track
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          Fixed-scope, rapid prototyping and production engineering designed for
          early-stage founders looking to go from Figma to an investor-ready MVP
          in 3 to 4 weeks.
        </p>
      </div>

      {/* Core MVP Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-green-brand font-bold">
            RAPID PROTOTYPING
          </div>
          <h3 className="text-2xl font-black uppercase">
            Figma to Production Code
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            We translate your design wireframes into resilient, production-ready
            Next.js 16 codebases without sacrificing performance or technical
            debt.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Component architecture & design system setup</li>
            <li>✓ Authentication, database, and API route integration</li>
            <li>✓ Responsive layout optimization across all viewports</li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-primary-brand font-bold">
            INVESTOR-READY
          </div>
          <h3 className="text-2xl font-black uppercase">Launch & Demo Speed</h3>
          <p className="text-xs leading-relaxed opacity-80">
            Engineered specifically to help you demo to investors or launch on
            Product Hunt with blazing-fast Vercel edge deployments.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Strict TypeScript type-safety from day one</li>
            <li>✓ 90+ Core Web Vitals performance guarantee</li>
            <li>✓ Scalable foundation ready for seed-round expansion</li>
          </ul>
        </div>
      </div>

      {/* Guarantee Box */}
      <div className="brutal-box p-8 border-2 border-green-brand bg-green-brand/5 space-y-4">
        <div className="text-xs text-green-brand font-bold uppercase">
          THE 4-WEEK MILESTONE GUARANTEE
        </div>
        <h3 className="text-xl font-black uppercase">
          From concept to live production URL in under a month.
        </h3>
        <p className="text-xs leading-relaxed opacity-80 max-w-3xl">
          Startups live or die by speed to market. We eliminate endless scoping
          meetings and focus entirely on delivering a rock-solid, functional
          product that users can interact with immediately.
        </p>
      </div>

      {/* Call to Action Box */}
      <div className="brutal-box p-8 text-center bg-studio-box space-y-4">
        <h3 className="text-xl font-black uppercase">
          Ready to build your MVP?
        </h3>
        <p className="text-xs max-w-md mx-auto opacity-80">
          Secure your sprint timeline and get your product in front of real
          users fast.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block bg-primary-brand text-white hover:bg-primary-brand/90 transition-colors"
        >
          Initialize MVP Sprint ➔
        </Link>
      </div>
    </motion.div>
  );
}
