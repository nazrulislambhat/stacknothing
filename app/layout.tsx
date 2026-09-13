import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { SiteHeader } from './components/site-header';

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
        <SiteHeader />

        <main className="flex-grow py-12 max-w-7xl mx-auto w-full px-6">
          {children}
        </main>

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
