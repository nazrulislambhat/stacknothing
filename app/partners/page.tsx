import Link from 'next/link';

export default function PartnersPage() {
  return (
    <div className="space-y-12">
      <div>
        <div className="border-l-4 border-yellow-400 pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          COLLABORATION NETWORK
        </div>
        <h1 className="text-4xl font-black uppercase">Ecosystem Partners</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-box p-8">
          <div className="text-xs text-[#00FF66] font-bold mb-2">
            [FLAGSHIP APP]
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">dhikrly.com</h3>
          <p className="text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
            Our premier consumer utility sharing underlying Tailwind
            configuration tokens and design layout schemas.
          </p>
          <a
            href="https://dhikrly.com"
            target="_blank"
            rel="noreferrer"
            className="underline text-xs font-bold uppercase text-white"
          >
            Visit Partner Property ↗
          </a>
        </div>

        <div className="brutal-box p-8">
          <div className="text-xs text-[#00E5FF] font-bold mb-2">
            [INFRASTRUCTURE]
          </div>
          <h3 className="text-2xl font-black uppercase mb-3">
            Vercel & Cloudflare
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm mb-6 leading-relaxed">
            Global edge computing execution layer ensuring sub-millisecond route
            transitions across all ecosystem domains.
          </p>
          <span className="text-xs text-zinc-500 uppercase">
            [VERIFIED NETWORK]
          </span>
        </div>
      </div>

      <div className="brutal-box p-8 text-center bg-zinc-950">
        <h3 className="text-lg font-black uppercase mb-2">
          Want to list your product in our ecosystem?
        </h3>
        <p className="text-zinc-400 text-xs max-w-md mx-auto mb-6">
          We integrate select developer tools and consumer applications.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block"
        >
          Submit Proposal ➔
        </Link>
      </div>
    </div>
  );
}
