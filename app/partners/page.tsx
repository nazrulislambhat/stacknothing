'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function PartnersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 max-w-4xl mx-auto"
    >
      <div>
        <div className="border-l-4 border-yellow-400 pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          COLLABORATION NETWORK
        </div>
        <h1 className="text-4xl font-black uppercase">Ecosystem Partners</h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mt-2 max-w-xl leading-relaxed">
          StackNothing collaborates with select infrastructure providers,
          open-source maintainers, and digital creators to power our tool
          suites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 border-2 border-[#00FF66]"
        >
          <div className="text-xs text-[#00FF66] font-bold mb-2">
            [FLAGSHIP APP]
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">dhikrly.com</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
            Our premier consumer utility sharing underlying Tailwind
            configuration tokens and design layout schemas.
          </p>
          <a
            href="https://dhikrly.com"
            target="_blank"
            rel="noreferrer"
            className="underline text-xs font-bold uppercase text-[var(--text-primary)]"
          >
            Visit Partner Property ↗
          </a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 border-2 border-[#00E5FF]"
        >
          <div className="text-xs text-[#00E5FF] font-bold mb-2">
            [INFRASTRUCTURE]
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Vercel & Cloudflare
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
            Global edge computing execution layer ensuring sub-millisecond route
            transitions across all ecosystem domains.
          </p>
          <span className="text-xs text-zinc-500 uppercase font-mono">
            [VERIFIED NETWORK]
          </span>
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="brutal-box p-8 text-center bg-zinc-100 dark:bg-zinc-950"
      >
        <h3 className="text-lg font-black uppercase mb-2">
          Want to list your product in our ecosystem?
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs max-w-md mx-auto mb-6">
          We integrate select developer tools and consumer applications.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block"
        >
          Submit Proposal ➔
        </Link>
      </motion.div>
    </motion.div>
  );
}
