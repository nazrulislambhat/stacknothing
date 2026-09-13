'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <div>
        <div className="border-l-4 border-[#00FF66] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          DIRECT LINE & INQUIRIES
        </div>
        <h1 className="text-4xl font-black uppercase">Initiate Dialogue</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-2">
          Reach out directly via email at{' '}
          <a
            href="mailto:nazrul@stacknothing.com"
            className="text-[var(--text-primary)] underline font-bold"
          >
            nazrul@stacknothing.com
          </a>{' '}
          or transmit your project parameters below.
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="brutal-box p-6 bg-zinc-100 dark:bg-zinc-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <div className="text-[10px] text-zinc-500 uppercase font-bold">
            PRIMARY DIRECT EMAIL
          </div>
          <div className="text-lg font-black uppercase">
            nazrul@stacknothing.com
          </div>
        </div>
        <a
          href="mailto:nazrul@stacknothing.com"
          className="brutal-button px-4 py-2 text-xs uppercase bg-[var(--text-primary)] text-[var(--bg-primary)]"
        >
          Send Email ↗
        </a>
      </motion.div>

      <form className="brutal-box p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase mb-2 text-zinc-600 dark:text-zinc-400">
              YOUR NAME
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Mercer"
              className="w-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)] px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#00FF66]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-2 text-zinc-600 dark:text-zinc-400">
              EMAIL
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              className="w-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)] px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#00FF66]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 text-zinc-600 dark:text-zinc-400">
            ENGAGEMENT TIER
          </label>
          <select className="w-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)] px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#00FF66]">
            <option>Sprint Audit ($2,500 / ₹95,000)</option>
            <option>MVP Product Build ($8,500+ / ₹3,50,000+)</option>
            <option>Design System Retainer ($5,000/mo / ₹1,80,000/mo)</option>
            <option>Ecosystem Partnership / General</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 text-zinc-600 dark:text-zinc-400">
            PROJECT SCOPE SPECIFICATION
          </label>
          <textarea
            rows={5}
            required
            placeholder="Define technical constraints, goals, and delivery timelines..."
            className="w-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)] p-4 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#00FF66] resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="brutal-button w-full py-4 text-xs uppercase tracking-wider bg-[#00FF66] text-black font-bold"
        >
          TRANSMIT MESSAGE ➔
        </motion.button>
      </form>
    </motion.div>
  );
}
