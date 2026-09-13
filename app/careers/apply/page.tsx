'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get('role') || 'General Studio Application';

  const roleTitle =
    roleParam === 'frontend-architect'
      ? 'Senior Frontend Architect'
      : roleParam === 'fullstack-engineer'
        ? 'Full Stack / Next.js Engineer'
        : 'General Studio Application';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <div>
        <Link
          href="/careers"
          className="text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-[var(--text-primary)] mb-4 inline-block"
        >
          ← BACK TO CAREERS
        </Link>
        <div className="border-l-4 border-[#00FF66] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          TALENT RECRUITMENT PORTAL
        </div>
        <h1 className="text-4xl font-black uppercase">
          Applying for: {roleTitle}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-2">
          Submit your technical stack profile, GitHub/portfolio links, and work
          history.
        </p>
      </div>

      <form className="brutal-box p-8 space-y-6">
        <input type="hidden" name="applied_role" value={roleTitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase mb-2 text-zinc-600 dark:text-zinc-400">
              FULL NAME
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
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              className="w-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)] px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#00FF66]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase mb-2 text-zinc-600 dark:text-zinc-400">
              GITHUB / PORTFOLIO URL
            </label>
            <input
              type="url"
              required
              placeholder="https://github.com/username"
              className="w-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)] px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#00FF66]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-2 text-zinc-600 dark:text-zinc-400">
              PRIMARY TECH STACK
            </label>
            <input
              type="text"
              required
              placeholder="Next.js, TypeScript, Tailwind, React"
              className="w-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)] px-4 py-3 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#00FF66]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 text-zinc-600 dark:text-zinc-400">
            WHY STACKNOTHING? / EXPERIENCE SUMMARY
          </label>
          <textarea
            rows={5}
            required
            placeholder="Briefly describe your experience with modern React/Next.js architectures..."
            className="w-full bg-[var(--bg-primary)] border-2 border-[var(--text-primary)] p-4 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[#00FF66] resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="brutal-button w-full py-4 text-xs uppercase tracking-wider bg-[#00FF66] text-black font-bold"
        >
          TRANSMIT APPLICATION ➔
        </motion.button>
      </form>
    </motion.div>
  );
}
