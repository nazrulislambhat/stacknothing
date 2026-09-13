import Link from 'next/link';

export default function UiUxService() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div>
        <div className="border-l-4 border-yellow-400 pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          CORE CAPABILITY // 04
        </div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
          UI/UX & Figma-to-Code
        </h1>
      </div>

      <div className="brutal-box p-8 space-y-6 text-zinc-300 text-xs md:text-sm leading-relaxed">
        <p>
          We translate static design layouts directly into pixel-perfect, highly
          maintainable React component registries. No loss in translation
          between product designers and frontend architects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/20">
          <div>
            <h3 className="text-white font-black uppercase mb-2">
              Deliverables
            </h3>
            <ul className="space-y-2 font-mono">
              <li>✓ Custom Tailwind design systems</li>
              <li>✓ Accessible, keyboard-navigable primitives</li>
              <li>✓ Storybook component documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-black uppercase mb-2">Execution</h3>
            <ul className="space-y-2 font-mono">
              <li>✓ Direct Figma token mapping</li>
              <li>✓ Dark/light mode architecture</li>
              <li>✓ Micro-interaction polish</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="/contact"
          className="brutal-button px-6 py-3 text-xs uppercase bg-yellow-400 text-black font-bold"
        >
          Request Design System ➔
        </Link>
      </div>
    </div>
  );
}
