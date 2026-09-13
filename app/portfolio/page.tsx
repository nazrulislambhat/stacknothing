import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      {/* Header Title */}
      <div>
        <div className="border-l-4 border-[#FF007F] pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CLIENTS, LABS & DEPLOYMENTS
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Portfolio & Ecosystem
        </h1>
      </div>

      {/* Current Clients Section */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#00FF66]">
          ACTIVE CLIENTS & PRODUCTIONS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="brutal-box p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
                CONSTRUCTION
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Nayab Constructions
              </h3>
              <p className="text-zinc-400 text-xs mb-4">
                Corporate web infrastructure and digital footprint.
              </p>
            </div>
            <a
              href="http://nayabconstructions.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-white underline underline-offset-4"
            >
              nayabconstructions.com ↗
            </a>
          </div>

          <div className="brutal-box p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
                TRAVEL & TOURS
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Irzam Tour & Travel
              </h3>
              <p className="text-zinc-400 text-xs mb-4">
                Booking-ready tour operator platform.
              </p>
            </div>
            <a
              href="https://irzamtourandtravel.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-white underline underline-offset-4"
            >
              irzamtourandtravel.com ↗
            </a>
          </div>

          <div className="brutal-box p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
                E-COMMERCE
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Mehandi by Sana
              </h3>
              <p className="text-zinc-400 text-xs mb-4">
                Custom artisanal e-commerce web storefront.
              </p>
            </div>
            <span className="text-xs font-bold text-zinc-300">
              mehandibysana.com
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
                PORTFOLIO
              </div>
              <h3 className="text-lg font-black uppercase mb-2">
                Nazrul Islam
              </h3>
              <p className="text-zinc-400 text-xs mb-4">
                Senior frontend architect personal web portal.
              </p>
            </div>
            <span className="text-xs font-bold text-zinc-300">
              nazrulislam.dev
            </span>
          </div>
        </div>
      </section>

      {/* Products & Labs Section */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-[#00E5FF]">
          PRODUCTS & ECOSYSTEM SUITES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="brutal-box p-8 border-2 border-[#00E5FF] shadow-[6px_6px_0px_#00E5FF]">
            <div className="text-[10px] bg-[#00E5FF] text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
              LIVE FLAGSHIP
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">Dhikrly</h3>
            <p className="text-zinc-400 text-xs md:text-sm mb-6">
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
          </div>

          <div className="brutal-box p-8 border-2 border-dashed border-zinc-600">
            <div className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 font-bold uppercase inline-block mb-3">
              IN DEVELOPMENT
            </div>
            <h3 className="text-2xl font-black uppercase mb-2">
              Internal Products Hub
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm mb-6">
              Upcoming micro-utilities, productivity suites, and developer
              component registries.
            </p>
            <span className="text-xs font-mono text-zinc-500 uppercase">
              [LAUNCHING Q3/Q4 2026]
            </span>
          </div>
        </div>
      </section>

      {/* Blogs & Media Section */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-yellow-400">
          EDITORIAL & BLOGS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="brutal-box p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] bg-yellow-400 text-black px-2 py-0.5 font-bold uppercase inline-block mb-3">
                OPEN SOURCE
              </div>
              <h3 className="text-xl font-black uppercase mb-2">FossNoobs</h3>
              <p className="text-zinc-400 text-xs mb-4">
                Minimal, Linux-inspired open source technology design blog and
                resource hub.
              </p>
            </div>
            <span className="text-xs font-bold text-zinc-300">
              fossnoobs.com
            </span>
          </div>

          <div className="brutal-box p-6 flex flex-col justify-between">
            <div>
              <div className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 font-bold uppercase inline-block mb-3">
                COMING SOON
              </div>
              <h3 className="text-xl font-black uppercase mb-2">
                StackNothing Blog
              </h3>
              <p className="text-zinc-400 text-xs mb-4">
                Engineering breakdowns, architectural case studies, and Next.js
                16 internals.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              blog.stacknothing.com
            </span>
          </div>
        </div>
      </section>

      {/* Past Clients Section */}
      <section className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          HISTORICAL ARCHIVES & PAST CLIENTS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="brutal-box p-6 opacity-75">
            <h3 className="text-lg font-black uppercase mb-1">Phandroid</h3>
            <p className="text-zinc-400 text-xs">
              High-traffic mobile tech publishing ecosystem contribution.
            </p>
          </div>

          <div className="brutal-box p-6 opacity-75">
            <h3 className="text-lg font-black uppercase mb-1">Hacking Saga</h3>
            <p className="text-zinc-400 text-xs">
              Security, software engineering, and digital publication platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
