'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function EcommerceService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-16"
    >
      <div>
        <div className="border-l-4 border-[#00E5FF] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CORE CAPABILITY // 02
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          E-Commerce Platforms
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mt-3 max-w-2xl leading-relaxed">
          Headless commerce systems and high-conversion checkout pipelines
          engineered to eliminate cart abandonment and scale revenue
          effortlessly.
        </p>
      </div>

      {/* Overview Block */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="brutal-box p-8 space-y-6 text-zinc-700 dark:text-zinc-300 text-xs md:text-sm leading-relaxed"
      >
        <h2 className="text-xl font-black uppercase text-[var(--text-primary)]">
          The Headless Advantage
        </h2>
        <p>
          Traditional monolithic e-commerce platforms suffer from rigid
          templates, sluggish database queries, and bloated third-party plugins.
          By decoupling the frontend presentation layer from the backend
          commerce engine, we deliver blistering catalog speeds and complete
          creative autonomy.
        </p>
        <p>
          Whether building custom storefronts on top of headless{' '}
          <strong className="text-[var(--text-primary)]">WooCommerce</strong> or
          integrating robust{' '}
          <strong className="text-[var(--text-primary)]">
            Shopify Storefront APIs
          </strong>
          , our stores are tuned to convert traffic instantly across mobile and
          desktop devices.
        </p>
      </motion.div>

      {/* Detailed Grid Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4">
          <div className="text-xs font-bold uppercase text-[#00E5FF]">
            COMMERCE BACKENDS
          </div>
          <h3 className="text-2xl font-black uppercase">Supported Engines</h3>
          <ul className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Headless WooCommerce:</strong> Custom React frontends
              paired with resilient WP REST/GraphQL APIs
            </li>
            <li>
              <strong>Shopify Plus & Storefront API:</strong> Lightning-fast
              GraphQL queries for dynamic collections
            </li>
            <li>
              <strong>Custom Checkout Funnels:</strong> Frictionless single-page
              checkout flows
            </li>
            <li>
              <strong>Payment Gateways:</strong> Razorpay, Stripe, PayPal, and
              regional UPI integrations
            </li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4">
          <div className="text-xs font-bold uppercase text-[#FF007F]">
            CONVERSION OPTIMIZATION
          </div>
          <h3 className="text-2xl font-black uppercase">Revenue Focus</h3>
          <ul className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Instant Search:</strong> Algolia or custom edge-cached
              product search indexing
            </li>
            <li>
              <strong>Cart Persistence:</strong> Local storage + server-side
              cart state synchronization
            </li>
            <li>
              <strong>Inventory Management:</strong> Real-time stock updates and
              webhook triggers
            </li>
            <li>
              <strong>Analytics & Pixels:</strong> Clean server-side event
              tracking without script bloat
            </li>
          </ul>
        </div>
      </div>

      {/* Studio Workflow Steps */}
      <div className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#00FF66]">
          E-COMMERCE ROLLOUT PIPELINE
        </div>
        <div className="space-y-4">
          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                PHASE 01
              </div>
              <h4 className="text-lg font-black uppercase">
                Catalog Mapping & API Configuration
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Structuring product taxonomies, attribute filters, and headless
                endpoints.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              WEEK 1
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                PHASE 02
              </div>
              <h4 className="text-lg font-black uppercase">
                Storefront UI & Secure Checkout Build
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Crafting high-contrast product pages, cart drawers, and secure
                payment handshakes.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              WEEKS 2-3
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                PHASE 03
              </div>
              <h4 className="text-lg font-black uppercase">
                Sandbox Testing & Go-Live
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                End-to-end transaction testing, webhook verification, and DNS
                domain pointing.
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
          Ready to scale your store performance?
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs max-w-md mx-auto">
          Upgrade your storefront to a headless architecture designed to
          maximize conversion rates.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link
            href="/contact"
            className="brutal-button px-6 py-3 text-xs uppercase bg-[#00E5FF] text-black font-bold"
          >
            Launch Headless Store ➔
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-[var(--text-primary)] px-6 py-3 text-xs uppercase font-bold hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors"
          >
            View Client Stores
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
