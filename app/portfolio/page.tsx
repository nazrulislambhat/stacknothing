'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-6xl mx-auto"
    >
      {/* Header Title with Reveal */}
      <div>
        <div className="border-l-4 border-[#FF007F] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CLIENTS, PARTNERSHIPS & DEPLOYMENTS
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Portfolio & Ecosystem Archive
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mt-2 max-w-2xl leading-relaxed">
          A comprehensive record of institutional brand partnerships, internal
          product incubations, Indian client deployments, and high-concurrency
          web systems.
        </p>
      </div>

      {/* Institutional Partnerships */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-yellow-400">
          INSTITUTIONAL PARTNERSHIPS
        </div>
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 border-2 border-yellow-400 shadow-[6px_6px_0px_#FACC15]"
          >
            <div className="text-[10px] bg-yellow-400 text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
              OFFICIAL BRAND PARTNER
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">IIT Roorkee</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-4 leading-relaxed">
              Serving as official brand and technology partners for premier
              institutional initiatives, powering high-visibility digital
              experiences and technical infrastructure.
            </p>
            <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
              [VERIFIED INSTITUTIONAL COLLABORATION]
            </span>
          </motion.div>
        </div>
      </section>

      {/* Active Indian & Regional Client Deployments */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#00FF66]">
          INDIAN & REGIONAL CLIENT PRODUCTIONS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] bg-[var(--text-primary)] text-[var(--bg-primary)] px-2 py-0.5 font-bold uppercase inline-block mb-3">
                CONSTRUCTION
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Nayab Constructions
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-4">
                Corporate web infrastructure and digital footprint.
              </p>
            </div>
            <a
              href="http://nayabconstructions.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[var(--text-primary)] underline underline-offset-4"
            >
              nayabconstructions.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] bg-[var(--text-primary)] text-[var(--bg-primary)] px-2 py-0.5 font-bold uppercase inline-block mb-3">
                TRAVEL & TOURS
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Irzam Tour & Travel
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-4">
                Booking-ready tour operator platform.
              </p>
            </div>
            <a
              href="https://irzamtourandtravel.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[var(--text-primary)] underline underline-offset-4"
            >
              irzamtourandtravel.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] bg-[var(--text-primary)] text-[var(--bg-primary)] px-2 py-0.5 font-bold uppercase inline-block mb-3">
                E-COMMERCE
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Mehandi by Sana
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-4">
                Custom artisanal e-commerce web storefront.
              </p>
            </div>
            <a
              href="https://mehandibysana.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[var(--text-primary)] underline underline-offset-4"
            >
              mehandibysana.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] bg-[var(--text-primary)] text-[var(--bg-primary)] px-2 py-0.5 font-bold uppercase inline-block mb-3">
                PORTFOLIO
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Nazrul Islam
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-4">
                Senior frontend architect personal web portal.
              </p>
            </div>
            <a
              href="https://nazrulislam.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-[var(--text-primary)] underline underline-offset-4"
            >
              nazrulislam.dev ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* Internal Products & Incubations */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
          INTERNAL PRODUCTS & ECOSYSTEM SUITES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 border-2 border-[#00E5FF] shadow-[6px_6px_0px_#00E5FF]"
          >
            <div className="text-[10px] bg-[#00E5FF] text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
              LIVE FLAGSHIP
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">Dhikrly</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-6">
              Minimal digital athkar and mindful tracking utility suite.
            </p>
            <a
              href="https://dhikrly.com"
              target="_blank"
              rel="noreferrer"
              className="brutal-button px-4 py-2 text-xs uppercase bg-[#00E5FF] text-black inline-block font-bold"
            >
              dhikrly.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 border-2 border-dashed border-zinc-500"
          >
            <div className="text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-800 px-2 py-0.5 font-bold uppercase inline-block mb-3">
              INTERNAL LABS
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">
              Component Registries & Plugins
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mb-6">
              Internal WooCommerce caching diagnostic tools, Chrome Focus Guard
              extensions, and UI primitive libraries.
            </p>
            <span className="text-xs font-mono text-zinc-500 uppercase">
              [ACTIVE R&D PIPELINE]
            </span>
          </motion.div>
        </div>
      </section>

      {/* Editorial & Media Section */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#FF007F]">
          EDITORIAL & MEDIA PROPERTIES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] bg-[#FF007F] text-white px-2 py-0.5 font-bold uppercase inline-block mb-3">
                OPEN SOURCE
              </div>
              <h3 className="text-xl font-black uppercase mb-2">FossNoobs</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-4">
                Minimal, Linux-inspired open source technology design blog and
                resource hub.
              </p>
            </div>
            <span className="text-xs font-bold text-zinc-500">
              fossnoobs.com
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] bg-zinc-200 dark:bg-zinc-800 text-zinc-800 px-2 py-0.5 font-bold uppercase inline-block mb-3">
                COMING SOON
              </div>
              <h3 className="text-xl font-black uppercase mb-2">
                StackNothing Blog
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-4">
                Engineering breakdowns, architectural case studies, and Next.js
                16 internals.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              blog.stacknothing.com
            </span>
          </motion.div>
        </div>
      </section>

      {/* Historical Archives & Past Clients */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          HISTORICAL ARCHIVES & PAST CLIENTS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="brutal-box p-6 opacity-75">
            <h3 className="text-lg font-black uppercase mb-1">Phandroid</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs">
              High-traffic mobile tech publishing ecosystem contribution.
            </p>
          </div>

          <div className="brutal-box p-6 opacity-75">
            <h3 className="text-lg font-black uppercase mb-1">Hacking Saga</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs">
              Security, software engineering, and digital publication platform.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
