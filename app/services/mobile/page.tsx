'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function MobileServicePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-5xl mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          ENGINEERING DIVISION // 03
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Cross-Platform Mobile Apps
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          Unified iOS and Android applications built via React Native and native
          capacitor bridges with offline-first data persistence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-green-brand font-bold">
            NATIVE PERFORMANCE
          </div>
          <h3 className="text-2xl font-black uppercase">React Native & Expo</h3>
          <p className="text-xs leading-relaxed opacity-80">
            Single-codebase mobile applications delivering buttery-smooth 60fps
            animations and native device hardware integrations.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Offline-first local SQLite databases</li>
            <li>✓ Push notifications & background sync</li>
            <li>✓ App Store & Google Play publishing support</li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4 border-2 border-studio-text">
          <div className="text-xs text-primary-brand font-bold">
            UNIFIED ECOSYSTEM
          </div>
          <h3 className="text-2xl font-black uppercase">
            Web-to-Mobile Bridges
          </h3>
          <p className="text-xs leading-relaxed opacity-80">
            Seamlessly synchronize your existing web application state with
            native mobile wrappers for dual-platform reach.
          </p>
          <ul className="space-y-2 font-mono text-xs opacity-90 pt-2">
            <li>✓ Shared design tokens across web and app</li>
            <li>✓ REST & GraphQL API synchronization</li>
            <li>✓ Rapid MVP mobile deployment cycles</li>
          </ul>
        </div>
      </div>

      <div className="brutal-box p-8 text-center bg-studio-box space-y-4">
        <h3 className="text-xl font-black uppercase">
          Have a mobile app concept?
        </h3>
        <p className="text-xs max-w-md mx-auto opacity-80">
          Transform your product vision into a production-ready mobile app.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block bg-primary-brand text-white"
        >
          Discuss Mobile Build ➔
        </Link>
      </div>
    </motion.div>
  );
}
