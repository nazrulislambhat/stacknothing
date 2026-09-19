'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

const previousClients = [
  {
    name: 'HackingSaga',
    url: 'https://hackingsaga.com',
    category: 'Cyber Security & Dev',
    accent: 'border-studio-text',
  },
  {
    name: 'Iqra Bakers',
    url: 'https://iqrabakers.com',
    category: 'E-Commerce',
    accent: 'border-green-brand',
  },
  {
    name: 'Phandroid',
    url: 'https://phandroid.com',
    category: 'Tech Media & Publishing',
    accent: 'border-primary-brand',
  },
  {
    name: 'IFED Trust',
    url: 'https://ifedtrust.com',
    category: 'Institutional & Non-Profit',
    accent: 'border-studio-text',
  },
  {
    name: 'Veolia',
    url: 'https://veolia.com',
    category: 'Enterprise Environmental Services',
    accent: 'border-green-brand',
  },
  {
    name: 'British Business Bank',
    url: 'https://www.britishbusinessbank.co.uk',
    category: 'Government Financial Institution',
    accent: 'border-primary-brand',
  },
  {
    name: 'University of East London (UEL)',
    url: 'https://www.uel.ac.uk',
    category: 'Higher Education',
    accent: 'border-studio-text',
  },
  {
    name: 'American Medical Association (AMA)',
    url: 'https://www.ama-assn.org',
    category: 'Global Healthcare Organization',
    accent: 'border-green-brand',
  },
  {
    name: 'Millboard',
    url: 'https://www.millboard.com/en-gb/',
    category: 'Decking and cladding brand',
    accent: 'border-primary-brand',
  },
];

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-16 mx-auto text-studio-text md:py-12"
    >
      <div>
        <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CLIENTS, PARTNERSHIPS & DEPLOYMENTS
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Portfolio & Ecosystem Archive
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-2xl leading-relaxed opacity-80">
          A comprehensive record of current enterprise engagements, global brand
          partnerships, institutional collaborations, and high-concurrency web
          systems.
        </p>
      </div>

      {/* Current Enterprise Sprint: Novartis */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-green-brand">
          CURRENT ENTERPRISE SPRINT
        </div>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="brutal-box p-8 border-2 border-green-brand bg-studio-box shadow-[6px_6px_0px_var(--color-brand-green,var(--text-primary))]"
        >
          <div className="text-[10px] bg-green-brand text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
            ACTIVE GLOBAL DEPLOYMENT // 2026
          </div>
          <h3 className="text-2xl font-black uppercase mb-2">Novartis</h3>
          <p className="text-xs md:text-sm mb-4 leading-relaxed opacity-80">
            Embedding senior frontend architecture capacity to deliver
            high-performance, scalable web applications and robust digital
            infrastructure for global healthcare operations.
          </p>
          <span className="text-xs font-mono font-bold text-green-brand">
            [ACTIVE ENTERPRISE ENGINEERING SPRINT]
          </span>
        </motion.div>
      </section>

      {/* Global & Previous Enterprise Clients */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-primary-brand">
          GLOBAL & PREVIOUS ENTERPRISE CLIENTS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previousClients.map((client, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`brutal-box p-6 flex flex-col justify-between border-2 ${client.accent} bg-studio-box`}
            >
              <div>
                <div className="text-[10px] bg-studio-text text-studio-bg px-2 py-0.5 font-bold uppercase inline-block mb-3">
                  {client.category}
                </div>
                <h3 className="text-lg font-black uppercase mb-2">
                  {client.name}
                </h3>
              </div>
              <a
                href={client.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold underline underline-offset-4 font-mono mt-4 pt-3 border-t border-studio-text/20 hover:text-green-brand"
              >
                {client.url.replace('https://', '').replace('www.', '')} ↗
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-green-brand">
          INSTITUTIONAL PARTNERSHIPS
        </div>
        <div className="grid grid-cols-1 gap-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="brutal-box p-8 border-2 border-studio-text bg-studio-box shadow-[6px_6px_0px_var(--text-primary)]"
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

      {/* Regional & Indie Productions */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-green-brand">
          REGIONAL CLIENT & INDIE PRODUCTIONS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text bg-studio-box"
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
              className="text-xs font-bold underline underline-offset-4 font-mono"
            >
              nayabconstructions.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text bg-studio-box"
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
              className="text-xs font-bold underline underline-offset-4 font-mono"
            >
              irzamtourandtravel.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text bg-studio-box"
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
            <a
              href="https://mehandibysana.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold underline underline-offset-4 font-mono"
            >
              mehandibysana.com ↗
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="brutal-box p-6 flex flex-col justify-between border-2 border-studio-text bg-studio-box"
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
            <a
              href="https://nazrulislam.dev/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold underline underline-offset-4 font-mono"
            >
              nazrulislam.dev ↗
            </a>
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
            className="brutal-box p-8 border-2 border-studio-text bg-studio-box shadow-[6px_6px_0px_var(--text-primary)]"
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
            className="brutal-box p-8 border-2 border-dashed border-studio-text bg-studio-box opacity-90"
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
