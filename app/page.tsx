import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Box */}
      <section className="brutal-box p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-[10px] border border-white px-2 py-1 bg-white text-black font-bold uppercase">
          NEXT.JS 16 CORE LAB
        </div>

        <div className="text-xs text-[#00FF66] mb-4 font-bold tracking-widest">
          [STUDIO & PRODUCT ECOSYSTEM]
        </div>

        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 leading-none">
          HARD-EDGED SYSTEMS & DIGITAL UTILITIES.
        </h1>

        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
          We architect standalone consumer products like{' '}
          <a
            href="https://dhikrly.com"
            target="_blank"
            className="text-white underline decoration-[#00FF66] decoration-2"
          >
            dhikrly.com
          </a>
          , custom UI component primitives, and high-performance agency
          solutions for scaling businesses.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 border-t border-b border-white/20 py-4 font-mono text-xs">
          <div>
            <div className="text-white font-bold text-lg">60+</div>
            <div className="text-zinc-500">Multilingual Sites</div>
          </div>
          <div>
            <div className="text-white font-bold text-lg">Next.js 16</div>
            <div className="text-zinc-500">Core Architecture</div>
          </div>
          <div>
            <div className="text-white font-bold text-lg">100%</div>
            <div className="text-zinc-500">Offline-First Capable</div>
          </div>
          <div>
            <div className="text-white font-bold text-lg">Zero</div>
            <div className="text-zinc-500">Corporate Bloat</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="brutal-button px-6 py-3 text-xs uppercase"
          >
            Start Project ➔
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-white px-6 py-3 text-xs uppercase font-bold hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_#FFFFFF]"
          >
            View Portfolio & Clients ↗
          </Link>
        </div>
      </section>

      {/* Active Ecosystem Grid */}
      <section id="ecosystem" className="space-y-6">
        <div className="border-l-4 border-[#00FF66] pl-4 text-sm font-bold uppercase tracking-wider">
          ACTIVE ECOSYSTEM PRODUCTS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dhikrly Card */}
          <div className="brutal-box p-8 flex flex-col justify-between border-2 border-[#00FF66] shadow-[6px_6px_0px_#00FF66]">
            <div>
              <div className="inline-block bg-[#00FF66] text-black text-xs font-bold px-2 py-0.5 mb-4 uppercase">
                LIVE V1.2
              </div>
              <h3 className="text-3xl font-black uppercase mb-3">
                dhikrly.com
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
                A minimal digital athkar and mindful tracking suite designed
                with zero distractions and offline-first data persistence.
              </p>
            </div>
            <a
              href="https://dhikrly.com"
              target="_blank"
              rel="noreferrer"
              className="brutal-button text-center py-3 text-xs uppercase bg-[#00FF66] text-black shadow-[4px_4px_0px_#FFFFFF]"
            >
              [ LAUNCH APP ↗ ]
            </a>
          </div>

          {/* Stack UI Card */}
          <div className="brutal-box p-8 flex flex-col justify-between border-2 border-[#00E5FF] shadow-[6px_6px_0px_#00E5FF]">
            <div>
              <div className="inline-block bg-[#00E5FF] text-black text-xs font-bold px-2 py-0.5 mb-4 uppercase">
                INTERNAL REGISTRY
              </div>
              <h3 className="text-3xl font-black uppercase mb-3">
                STACK UI COMPONENTS
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
                Raw, unstyled blocks and high-performance React primitives
                engineered explicitly for modern Next.js 16 architectures.
              </p>
            </div>
            <span className="border-2 border-white text-center py-3 text-xs uppercase bg-black text-zinc-500 cursor-not-allowed">
              [ REGISTRY LOCKED ]
            </span>
          </div>
        </div>
      </section>

      {/* Comprehensive Agency Services Grid (Linked to dedicated service pages) */}
      <section className="space-y-6">
        <div className="border-l-4 border-[#FF007F] pl-4 text-sm font-bold uppercase tracking-wider">
          STUDIO CAPABILITIES & SERVICES
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/services/web-dev"
            className="brutal-box p-6 space-y-3 block hover:border-[#00FF66] transition-colors"
          >
            <div className="text-xl">🔧</div>
            <h4 className="font-black uppercase text-sm">
              Custom Web & App Dev ➔
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Tailored web systems engineered for high concurrency, elite SEO
              scores, and maintainable modular structures.
            </p>
          </Link>

          <Link
            href="/services/ecommerce"
            className="brutal-box p-6 space-y-3 block hover:border-[#00E5FF] transition-colors"
          >
            <div className="text-xl">🛒</div>
            <h4 className="font-black uppercase text-sm">
              E-commerce Platforms ➔
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Headless WooCommerce, Shopify setups, custom store architecture,
              and performance-tuned checkout funnels.
            </p>
          </Link>

          <Link
            href="/services/web-dev"
            className="brutal-box p-6 space-y-3 block hover:border-yellow-400 transition-colors"
          >
            <div className="text-xl">🌐</div>
            <h4 className="font-black uppercase text-sm">Web Apps & PWAs ➔</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Progressive web applications utilizing modern JavaScript
              frameworks, Service Workers, and native device feel.
            </p>
          </Link>

          <Link
            href="/services/mobile"
            className="brutal-box p-6 space-y-3 block hover:border-[#FF007F] transition-colors"
          >
            <div className="text-xl">📱</div>
            <h4 className="font-black uppercase text-sm">
              Cross-Platform Apps ➔
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Mobile applications built via React Native and Capacitor,
              delivering unified iOS and Android codebases.
            </p>
          </Link>

          <div className="brutal-box p-6 space-y-3">
            <div className="text-xl">☁️</div>
            <h4 className="font-black uppercase text-sm">Cloud & Serverless</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Robust serverless and cloud integrations leveraging Firebase,
              Supabase, and AWS infrastructure layers.
            </p>
          </div>

          <div className="brutal-box p-6 space-y-3">
            <div className="text-xl">🔐</div>
            <h4 className="font-black uppercase text-sm">
              Authentication Systems
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Secure identification pipelines including Google OAuth, Firebase
              Auth, JWT, and role-based access control.
            </p>
          </div>

          <div className="brutal-box p-6 space-y-3">
            <div className="text-xl">🧩</div>
            <h4 className="font-black uppercase text-sm">Prototyping & MVPs</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Rapid product prototyping to validate market demand and launch
              functional MVPs in record timelines.
            </p>
          </div>

          <Link
            href="/services/ui-ux"
            className="brutal-box p-6 space-y-3 block hover:border-yellow-400 transition-colors"
          >
            <div className="text-xl">🎨</div>
            <h4 className="font-black uppercase text-sm">
              UI/UX & Figma-to-Code ➔
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Pixel-perfect design systems translated directly into clean React
              codebases straight from Figma assets.
            </p>
          </Link>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="brutal-box p-8 bg-zinc-950 text-center flex flex-col items-center space-y-4">
        <h3 className="text-2xl font-black uppercase">
          Ready to scale your architecture?
        </h3>
        <p className="text-zinc-400 text-xs max-w-md">
          Explore our client deployments or book an engineering sprint today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="brutal-button px-8 py-3 text-xs uppercase font-bold inline-block bg-white text-black"
          >
            Initialize Project Now ➔
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-white px-6 py-3 text-xs uppercase font-bold hover:bg-white hover:text-black transition-colors"
          >
            View Portfolio Archive
          </Link>
        </div>
      </section>
    </div>
  );
}
