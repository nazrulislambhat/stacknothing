'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function EcommerceServicePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          ENGINEERING DIVISION // 05
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          E-Commerce Acceleration
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          High-performance headless storefronts and checkout optimization
          designed to eliminate cart abandonment and scale high-concurrency
          flash sales.
        </p>
      </div>

      {/* Core E-Commerce Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-red-brand font-bold">
            HEADLESS ARCHITECTURE
          </div>
          <h3 className="text-2xl font-black uppercase">
            Shopify & Custom Headless
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Decouple your heavy storefront UI from legacy backends to achieve
            sub-second page loads and seamless mobile shopping experiences.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Lightning-fast product catalog rendering</li>
            <li>✓ Optimized cart and instant checkout flows</li>
            <li>✓ Advanced server-side caching & revalidation</li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-green-brand font-bold">
            REVENUE OPTIMIZATION
          </div>
          <h3 className="text-2xl font-black uppercase">
            Conversion Rate Speed-Tuning
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Every 100ms of latency drops e-commerce conversions. We audit and
            remove render-blocking scripts to maximize your top-line revenue.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Core Web Vitals audit for product & cart pages</li>
            <li>✓ Robust error boundaries for payment gateways</li>
            <li>✓ Global edge caching via Vercel CDN</li>
          </ul>
        </div>
      </div>

      {/* Guarantee Box */}
      <div className="brutal-box p-8 border-2 border-red-brand bg-red-brand/5 space-y-4">
        <div className="text-xs text-red-brand font-bold uppercase">
          THE REVENUE GUARANTEE
        </div>
        <h3 className="text-xl font-black uppercase">
          Stop losing sales to sluggish load times and checkout errors.
        </h3>
        <p className="text-xs leading-relaxed opacity-80 max-w-3xl">
          High-traffic retail demands flawless infrastructure. Our engineering
          division rebuilds your storefront for absolute reliability during peak
          traffic spikes and promotional events.
        </p>
      </div>

      {/* Call to Action Box */}
      <div className="brutal-box p-8 text-center bg-studio-box space-y-4">
        <h3 className="text-xl font-black uppercase">
          Ready to accelerate your store?
        </h3>
        <p className="text-xs max-w-md mx-auto opacity-80">
          Book an e-commerce infrastructure audit and secure your store
          performance.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block bg-primary-brand text-white hover:bg-primary-brand/90 transition-colors"
        >
          Initialize Store Audit ➔
        </Link>
      </div>
    </motion.div>
  );
}
