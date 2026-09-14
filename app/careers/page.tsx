'use client';

import Link from 'next/navigation'; // Note: standard Next.js Link is imported from 'next/link'
import NextLink from 'next/link';
import { motion } from 'motion/react';

export default function CareersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-12 max-w-4xl mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          StackNothing TALENT NETWORK // STACKNOTHING LLC
        </div>
        <h1 className="text-4xl font-black uppercase">
          Careers & Engineering Roles
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-xl leading-relaxed opacity-80">
          We operate lean, high-velocity engineering sprints. Open positions for
          remote frontend architects and design system contributors.
        </p>
      </div>

      <div className="space-y-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="space-y-2">
            <div className="text-[10px] bg-green-brand text-black px-2 py-0.5 font-bold uppercase inline-block font-mono">
              OPEN POSITION
            </div>
            <h3 className="text-2xl font-black uppercase">
              Senior Frontend Architect
            </h3>
            <p className="text-xs opacity-80 font-mono">
              Stack: Next.js 16, TypeScript, Tailwind CSS v4, Motion.
            </p>
          </div>
          <NextLink
            href="/careers/apply?role=frontend-architect"
            className="brutal-button px-6 py-3 text-xs uppercase bg-primary-brand text-white whitespace-nowrap text-center"
          >
            Apply Now ➔
          </NextLink>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="space-y-2">
            <div className="text-[10px] bg-studio-box text-studio-text px-2 py-0.5 font-bold uppercase inline-block border border-studio-text font-mono">
              CONTRACT
            </div>
            <h3 className="text-2xl font-black uppercase">
              Full-Stack React Native Engineer
            </h3>
            <p className="text-xs opacity-80 font-mono">
              Stack: React Native, Expo, SQLite, REST/GraphQL APIs.
            </p>
          </div>
          <NextLink
            href="/careers/apply?role=fullstack-engineer"
            className="brutal-button px-6 py-3 text-xs uppercase bg-studio-text text-studio-bg whitespace-nowrap text-center"
          >
            Apply Now ➔
          </NextLink>
        </motion.div>
      </div>
    </motion.div>
  );
}
