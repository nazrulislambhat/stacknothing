import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="space-y-12">
      <div>
        <div className="border-l-4 border-yellow-400 pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          STUDIO COLLECTIVE
        </div>
        <h1 className="text-4xl font-black uppercase">Open Positions</h1>
      </div>

      <div className="brutal-box p-8 text-center py-16">
        <div className="text-sm font-bold text-white mb-2 uppercase">
          [0 ACTIVE OPEN RECS]
        </div>
        <p className="text-zinc-400 text-xs max-w-md mx-auto mb-6">
          We operate lean. Exceptional Senior Frontend Architects or Next.js
          Engineers can send open applications.
        </p>
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase inline-block"
        >
          Transmit Spec Sheet ↗
        </Link>
      </div>
    </div>
  );
}
