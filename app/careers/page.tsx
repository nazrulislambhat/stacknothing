import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <div className="border-l-4 border-yellow-400 pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          STUDIO COLLECTIVE
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          Open Positions
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm mt-2 max-w-xl leading-relaxed">
          We operate lean, remote-first, and focus on high-impact systems. We
          value pristine code execution, architectural taste, and shipping
          velocity over corporate credentials.
        </p>
      </div>

      {/* Active Openings Grid */}
      <div className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-widest text-emerald-500">
          ACTIVE RECS (2 OPEN)
        </div>

        {/* Role 1 */}
        <div className="brutal-box p-8 space-y-4 border-2 border-[#00FF66]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <h3 className="text-2xl font-black uppercase">
              Senior Frontend Architect
            </h3>
            <span className="text-[10px] bg-[#00FF66] text-black font-bold px-2.5 py-1 uppercase">
              REMOTE / CONTRACT
            </span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
            Looking for an expert fluent in Next.js 16, React Server Components,
            TypeScript, and Tailwind CSS to lead high-concurrency client
            implementations and custom UI registries.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/careers/apply?role=frontend-architect"
              className="brutal-button px-5 py-2 text-xs uppercase bg-[#00FF66] text-black font-bold"
            >
              Apply for Role ➔
            </Link>
          </div>
        </div>

        {/* Role 2 */}
        <div className="brutal-box p-8 space-y-4 border-2 border-[#00E5FF]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <h3 className="text-2xl font-black uppercase">
              Full Stack / Next.js Engineer
            </h3>
            <span className="text-[10px] bg-[#00E5FF] text-black font-bold px-2.5 py-1 uppercase">
              REMOTE / PART-TIME
            </span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
            Build headless e-commerce checkouts, serverless backend integrations
            (Supabase/Firebase), and robust API pipelines for independent studio
            products.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/careers/apply?role=fullstack-engineer"
              className="brutal-button px-5 py-2 text-xs uppercase bg-[#00FF66] text-black font-bold"
            >
              Apply for Role ➔
            </Link>
          </div>
        </div>
      </div>

      {/* Culture Values */}
      <div className="border-t-2 border-[var(--text-primary)] pt-12">
        <div className="text-xs font-bold uppercase tracking-wider mb-8">
          HOW WE BUILD
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="brutal-box p-6 space-y-2">
            <h4 className="font-black uppercase text-sm">
              01 / Autonomy First
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Complete control over your working hours, provided milestones are
              met and documentation is clean.
            </p>
          </div>
          <div className="brutal-box p-6 space-y-2">
            <h4 className="font-black uppercase text-sm">02 / Modern Stack</h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              No legacy enterprise bloat. We push bleeding-edge Next.js,
              TypeScript, and high-performance primitives.
            </p>
          </div>
          <div className="brutal-box p-6 space-y-2">
            <h4 className="font-black uppercase text-sm">
              03 / Product Ownership
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Engineers here architect software utilities and share directly in
              product scaling outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
