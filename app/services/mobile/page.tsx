'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function MobileService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto space-y-16"
    >
      <div>
        <div className="border-l-4 border-[#FF007F] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CORE CAPABILITY // 03
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Cross-Platform Mobile Apps
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mt-3 max-w-2xl leading-relaxed">
          Native-feeling mobile applications built efficiently via React Native
          and Capacitor, delivering unified iOS and Android codebases without
          performance compromises.
        </p>
      </div>

      {/* Overview Block */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="brutal-box p-8 space-y-6 text-zinc-700 dark:text-zinc-300 text-xs md:text-sm leading-relaxed"
      >
        <h2 className="text-xl font-black uppercase text-[var(--text-primary)]">
          Unified Mobile Architecture
        </h2>
        <p>
          Maintaining separate native codebases for iOS (Swift) and Android
          (Kotlin) doubles maintenance overhead and slows feature rollout. We
          leverage{' '}
          <strong className="text-[var(--text-primary)]">React Native</strong>{' '}
          and <strong className="text-[var(--text-primary)]">Capacitor</strong>{' '}
          to build robust, high-frequency mobile utilities from a single unified
          codebase.
        </p>
        <p>
          From smooth 60fps gestures and animations to secure local storage and
          offline data persistence, our mobile solutions deliver uncompromising
          native ergonomics.
        </p>
      </motion.div>

      {/* Detailed Grid Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8 space-y-4">
          <div className="text-xs font-bold uppercase text-[#FF007F]">
            FRAMEWORKS & TOOLING
          </div>
          <h3 className="text-2xl font-black uppercase">Mobile Stack</h3>
          <ul className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>React Native / Expo:</strong> High-performance
              cross-platform application runtime
            </li>
            <li>
              <strong>Ionic Capacitor:</strong> Web-to-native bridge for PWA and
              hybrid app wrappers
            </li>
            <li>
              <strong>Styling:</strong> NativeWind / Tailwind CSS token parity
            </li>
            <li>
              <strong>State Management:</strong> Zustand & MMKV ultra-fast local
              storage
            </li>
          </ul>
        </div>

        <div className="brutal-box p-8 space-y-4">
          <div className="text-xs font-bold uppercase text-[#00FF66]">
            DEVICE CAPABILITIES
          </div>
          <h3 className="text-2xl font-black uppercase">Native Integration</h3>
          <ul className="space-y-3 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Hardware Access:</strong> Camera, GPS location, and
              biometric authentication (FaceID/TouchID)
            </li>
            <li>
              <strong>Push Notifications:</strong> Firebase Cloud Messaging
              (FCM) integration
            </li>
            <li>
              <strong>Offline-First:</strong> SQLite & async persistence for
              zero-connectivity usability
            </li>
            <li>
              <strong>App Store Deployment:</strong> Full submission pipeline
              for Apple App Store & Google Play
            </li>
          </ul>
        </div>
      </div>

      {/* Studio Workflow Steps */}
      <div className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
          MOBILE APP LIFECYCLE
        </div>
        <div className="space-y-4">
          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                STAGE 01
              </div>
              <h4 className="text-lg font-black uppercase">
                UI Prototyping & Navigation Design
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Establishing touch targets, gesture handlers, and navigation
                stacks.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              WEEK 1
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                STAGE 02
              </div>
              <h4 className="text-lg font-black uppercase">
                Feature Implementation & API Wiring
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                Building business logic, offline sync layers, and device
                hardware bridges.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              WEEKS 2-4
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-500 font-mono">
                STAGE 03
              </div>
              <h4 className="text-lg font-black uppercase">
                Store Review & Public Release
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                TestFlight/Internal testing tracks, metadata optimization, and
                store publication.
              </p>
            </div>
            <span className="text-xs font-mono bg-zinc-200 dark:bg-zinc-800 px-3 py-1 font-bold">
              WEEK 5
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="brutal-box p-8 bg-zinc-100 dark:bg-zinc-950 text-center space-y-4">
        <h3 className="text-2xl font-black uppercase">
          Ready to launch your mobile application?
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs max-w-md mx-auto">
          Bring your product concept to iOS and Android devices with a unified,
          high-performance codebase.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link
            href="/contact"
            className="brutal-button px-6 py-3 text-xs uppercase bg-[#FF007F] text-white font-bold"
          >
            Build Mobile App ➔
          </Link>
          <Link
            href="/pricing"
            className="border-2 border-[var(--text-primary)] px-6 py-3 text-xs uppercase font-bold hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors"
          >
            View Engagement Tiers
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
