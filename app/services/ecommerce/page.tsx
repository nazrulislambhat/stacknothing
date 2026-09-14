'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function EcommerceServicePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-5xl mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          ENGINEERING DIVISION // 02
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          E-commerce Platforms & Stores
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          High-conversion headless storefronts, custom WooCommerce
          architectures, and performance-tuned checkout pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-red-brand font-bold">
            HEADLESS COMMERCE
          </div>
          <h3 className="text-2xl font-black uppercase">
            WooCommerce & Shopify Headless
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Decoupling backend catalog management from lightning-fast Next.js
            frontend interfaces to eliminate caching bottlenecks.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Custom shop page caching diagnostics</li>
            <li>✓ Secure payment gateway integrations</li>
            <li>✓ Multi-currency & international checkout</li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-green-brand font-bold">
            CONVERSION FOCUS
          </div>
          <h3 className="text-2xl font-black uppercase">Optimized Funnels</h3>
          <p className="text-xs leading-relaxed opacity-80">
            Engineered checkout flows designed to reduce cart abandonment and
            maximize transactional throughput.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Sub-second product catalog search</li>
            <li>✓ Mobile-first responsive purchase UX</li>
            <li>✓ Automated order webhook handling</li>
          </ul>
        </div>
      </div>

      <div className="brutal-box p-8 text-center bg-studio-box space-y-4">
        <h3 className="text-xl font-black uppercase">
          Scale your e-commerce storefront
        </h3>
        <p className="text-xs max-w-md mx-auto opacity-80">
          Build high-performance storefronts engineered for maximum conversion.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block bg-primary-brand text-white"
        >
          Start Store Build ➔
        </Link>
      </div>
    </motion.div>
  );
}
