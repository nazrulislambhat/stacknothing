'use client';

import { motion } from 'motion/react';

export default function PrivacyPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8 max-w-4xl mx-auto text-xs md:text-sm leading-relaxed text-studio-text"
    >
      <div>
        <div className="border-l-4 border-primary-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          LEGAL & COMPLIANCE DIRECTORY // STACKNOTHING LLC
        </div>
        <h1 className="text-4xl font-black uppercase">Privacy Policy</h1>
        <p className="text-xs opacity-60 mt-1 font-mono">
          Last updated: September 2026
        </p>
      </div>

      <div className="brutal-box p-8 space-y-6">
        <h2 className="text-xl font-black uppercase">01. Data Collection</h2>
        <p className="opacity-80">
          StackNothing LLC collects minimal telemetry and direct form submission
          inputs (such as names and email addresses) solely for project scoping
          and client communication during our public beta.
        </p>

        <h2 className="text-xl font-black uppercase">
          02. Cookies & Local Storage
        </h2>
        <p className="opacity-80">
          We utilize local storage strictly for preserving user interface
          preferences (such as dark/light mode state and currency selection). No
          third-party behavioral advertising trackers are utilized.
        </p>

        <h2 className="text-xl font-black uppercase">03. Contact Inquiries</h2>
        <p className="opacity-80">
          For any data privacy concerns or removal requests, contact{' '}
          <strong className="text-studio-text">nazrul@stacknothing.com</strong>{' '}
          directly.
        </p>
      </div>
    </motion.div>
  );
}
