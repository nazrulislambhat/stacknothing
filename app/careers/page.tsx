'use client';

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
          remote frontend architects, headless specialists, and design system
          contributors.
        </p>
      </div>

      {/* Rolling Openings & Temporary Contract Notice */}
      <div className=" p-4 border-2 border-red-brand  text-xs font-mono space-y-1">
        <span className="text-red-brand font-bold uppercase">
          TEMPORARY & CONTRACT RECRUITMENT NOTICE:
        </span>{' '}
        All listed engineering and design roles are structured as temporary or
        project-based contract positions to support high-velocity client
        sprints. Exceptional contributors may transition into long-term
        ecosystem partnerships.
      </div>

      <div className="space-y-6">
        {/* Highlighted Fresh Grad / Internship Position */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-2 border-green-brand bg-green-brand/10 shadow-[4px_4px_0px_var(--text-primary)]"
        >
          <div className="space-y-2">
            <div className="text-[10px] bg-green-brand text-black px-2 py-0.5 font-bold uppercase inline-block font-mono">
              ★ FEATURED // FRESH GRAD & INTERN FELLOWSHIP
            </div>
            <h3 className="text-2xl font-black uppercase text-studio-text">
              Engineering Intern & Fresh Graduate Fellowship
            </h3>
            <p className="text-xs opacity-90 font-mono">
              Stack: React, TypeScript, Next.js, Modern Git Workflows.
            </p>
          </div>
          <NextLink
            href="/careers/apply?role=graduate-intern"
            className="brutal-button px-6 py-3 text-xs uppercase bg-green-brand text-black whitespace-nowrap text-center font-bold"
          >
            Apply Now ➔
          </NextLink>
        </motion.div>

        {/* Position 1 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-studio-box"
        >
          <div className="space-y-2">
            <div className="text-[10px] bg-green-brand text-black px-2 py-0.5 font-bold uppercase inline-block font-mono">
              TEMP / CONTRACT // 01
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
            className="brutal-button px-6 py-3 text-xs uppercase bg-primary-brand text-white whitespace-nowrap text-center font-bold"
          >
            Apply Now ➔
          </NextLink>
        </motion.div>

        {/* Position 2 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-studio-box"
        >
          <div className="space-y-2">
            <div className="text-[10px] bg-studio-text text-studio-bg px-2 py-0.5 font-bold uppercase inline-block font-mono">
              TEMP / CONTRACT // 02
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
            className="brutal-button px-6 py-3 text-xs uppercase bg-studio-text text-studio-bg whitespace-nowrap text-center font-bold"
          >
            Apply Now ➔
          </NextLink>
        </motion.div>

        {/* Position 3 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-studio-box"
        >
          <div className="space-y-2">
            <div className="text-[10px] bg-red-brand text-white px-2 py-0.5 font-bold uppercase inline-block font-mono">
              TEMP / CONTRACT // 03
            </div>
            <h3 className="text-2xl font-black uppercase">
              Senior Drupal & Headless Engineer
            </h3>
            <p className="text-xs opacity-80 font-mono">
              Stack: Drupal, Acquia Site Studio, PHP, Headless APIs.
            </p>
          </div>
          <NextLink
            href="/careers/apply?role=drupal-engineer"
            className="brutal-button px-6 py-3 text-xs uppercase bg-primary-brand text-white whitespace-nowrap text-center font-bold"
          >
            Apply Now ➔
          </NextLink>
        </motion.div>

        {/* Position 4 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-studio-box"
        >
          <div className="space-y-2">
            <div className="text-[10px] bg-green-brand text-black px-2 py-0.5 font-bold uppercase inline-block font-mono">
              TEMP / CONTRACT // 04
            </div>
            <h3 className="text-2xl font-black uppercase">
              UI/UX & Design Systems Specialist
            </h3>
            <p className="text-xs opacity-80 font-mono">
              Stack: Figma, Tailwind v4, Design Tokens, Component Libraries.
            </p>
          </div>
          <NextLink
            href="/careers/apply?role=ui-ux-specialist"
            className="brutal-button px-6 py-3 text-xs uppercase bg-studio-text text-studio-bg whitespace-nowrap text-center font-bold"
          >
            Apply Now ➔
          </NextLink>
        </motion.div>

        {/* Position 5 */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-2 border-dashed border-studio-text bg-studio-box"
        >
          <div className="space-y-2">
            <div className="text-[10px] bg-studio-text text-studio-bg px-2 py-0.5 font-bold uppercase inline-block font-mono">
              TEMP / CONTRACT // 05
            </div>
            <h3 className="text-2xl font-black uppercase">
              General Engineering Pool
            </h3>
            <p className="text-xs opacity-80 font-mono">
              Temporary project-based application for specialized technical
              scopes.
            </p>
          </div>
          <NextLink
            href="/careers/apply?role=general-application"
            className="brutal-button px-6 py-3 text-xs uppercase bg-black text-white whitespace-nowrap text-center font-bold"
          >
            Submit Profile ➔
          </NextLink>
        </motion.div>
      </div>
    </motion.div>
  );
}
