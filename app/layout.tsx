import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'STACKNOTHING LLC // Agency & Product Ecosystem',
  description: 'Hard-edged engineering, UI components, and software suites.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mono.variable} font-mono bg-black text-white antialiased min-h-screen flex flex-col justify-between brutal-grid`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 border-b-2 border-white bg-black">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link
              href="/"
              className="border-2 border-white bg-white text-black px-4 py-2 font-bold tracking-tighter uppercase text-sm shadow-[4px_4px_0px_#00FF66]"
            >
              [STACKNOTHING.]
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
              <Link
                href="/#ecosystem"
                className="hover:text-[#00FF66] transition-colors"
              >
                [ ECOSYSTEM ]
              </Link>
              <Link
                href="/pricing"
                className="hover:text-[#00E5FF] transition-colors"
              >
                [ PRICING ]
              </Link>
              <Link
                href="/partners"
                className="hover:text-[#FF007F] transition-colors"
              >
                [ PARTNERS ]
              </Link>
              <Link
                href="/careers"
                className="hover:text-yellow-400 transition-colors"
              >
                [ CAREERS ]
              </Link>
            </nav>

            <Link
              href="/contact"
              className="brutal-button px-5 py-2 text-xs uppercase tracking-wider"
            >
              INITIALIZE ↗
            </Link>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow py-12 max-w-7xl mx-auto w-full px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t-2 border-white bg-black py-8 text-xs font-mono">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="border-2 border-white px-3 py-1 bg-zinc-900 text-[#00FF66]">
              STATUS: ALL SYSTEMS OPERATIONAL [OK]
            </div>
            <div className="flex flex-wrap gap-4 uppercase font-bold text-zinc-400">
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <span>/</span>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <span>/</span>
              <Link href="/refund" className="hover:text-white">
                Refunds
              </Link>
              <span>/</span>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
