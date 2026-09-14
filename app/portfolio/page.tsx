'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 max-w-6xl mx-auto text-studio-text"
    >
      <div>
        <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CLIENTS, PARTNERSHIPS & DEPLOYMENTS
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Portfolio & Ecosystem Archive
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          A comprehensive record of institutional brand partnerships, internal
          product incubations, Indian client deployments, and high-concurrency
          web systems.
        </p>
      </div>

      {/* Institutional Partnerships */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-green-brand">
          INSTITUTIONAL PARTNERSHIPS
        </div>
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 border-2 border-studio-text shadow-[6px_6px_0px_var(--text-primary)]"
          >
            <div className="text-[10px] bg-primary-brand text-white px-2 py-0.5 font-bold uppercase inline-block mb-3">
              OFFICIAL BRAND PARTNER
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">IIT Roorkee</h3>
            <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
              Serving as official brand and technology partners for premier
              institutional initiatives, powering high-visibility digital
              experiences and technical infrastructure.
            </p>
            <span className="text-xs font-mono font-bold text-green-brand">
              [VERIFIED INSTITUTIONAL COLLABORATION]
            </span>
          </motion.div>
        </div>
      </section>

      {/* Indian & Regional Client Productions */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-green-brand">
          INDIAN & REGIONAL CLIENT PRODUCTIONS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text"
          >
            <div>
              <div className="text-[10px] bg-primary-brand text-white px-2 py-0.5 font-bold uppercase inline-block mb-3">
                CONSTRUCTION
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Nayab Constructions
              </h3>
              <p className="text-xs mb-4 opacity-80">
                Corporate web infrastructure and digital footprint.
              </p>
            </div>
            <a
              href="http://nayabconstructions.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold underline underline-offset-4"
            >
              nayabconstructions.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text"
          >
            <div>
              <div className="text-[10px] bg-primary-brand text-white px-2 py-0.5 font-bold uppercase inline-block mb-3">
                TRAVEL & TOURS
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Irzam Tour & Travel
              </h3>
              <p className="text-xs mb-4 opacity-80">
                Booking-ready tour operator platform.
              </p>
            </div>
            <a
              href="https://irzamtourandtravel.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold underline underline-offset-4"
            >
              irzamtourandtravel.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text"
          >
            <div>
              <div className="text-[10px] bg-primary-brand text-white px-2 py-0.5 font-bold uppercase inline-block mb-3">
                E-COMMERCE
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Mehandi by Sana
              </h3>
              <p className="text-xs mb-4 opacity-80">
                Custom artisanal e-commerce web storefront.
              </p>
            </div>
            <span className="text-xs font-bold opacity-60">
              mehandibysana.com
            </span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text"
          >
            <div>
              <div className="text-[10px] bg-primary-brand text-white px-2 py-0.5 font-bold uppercase inline-block mb-3">
                PORTFOLIO
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Nazrul Islam
              </h3>
              <p className="text-xs mb-4 opacity-80">
                Senior frontend architect personal web portal.
              </p>
            </div>
            <span className="text-xs font-bold opacity-60">
              nazrulislam.dev
            </span>
          </motion.div>
        </div>
      </section>

      {/* Internal Products & Incubations */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-primary-brand">
          INTERNAL PRODUCTS & ECOSYSTEM SUITES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 border-2 border-studio-text shadow-[6px_6px_0px_var(--text-primary)]"
          >
            <div className="text-[10px] bg-green-brand text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
              LIVE FLAGSHIP
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">Dhikrly</h3>
            <p className="text-xs md:text-sm mb-6 opacity-80">
              Minimal digital athkar and mindful tracking utility suite.
            </p>
            <a
              href="https://dhikrly.com"
              target="_blank"
              rel="noreferrer"
              className="brutal-button px-4 py-2 text-xs uppercase bg-primary-brand text-white inline-block font-bold"
            >
              dhikrly.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 border-2 border-dashed border-studio-text opacity-90"
          >
            <div className="text-[10px] bg-studio-box text-studio-text px-2 py-0.5 font-bold uppercase inline-block mb-3 border border-studio-text">
              INTERNAL LABS
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">
              Component Registries & Plugins
            </h3>
            <p className="text-xs md:text-sm mb-6 opacity-80">
              Internal WooCommerce caching diagnostic tools, Chrome Focus Guard
              extensions, and UI primitive libraries.
            </p>
            <span className="text-xs font-mono opacity-60 uppercase">
              [ACTIVE R&D PIPELINE]
            </span>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
