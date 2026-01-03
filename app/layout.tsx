import type { Metadata } from 'next';
import { Inter_Tight, Nunito } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { StackNavbar } from '@/components/stack-navbar';
import { StackFooter } from '@/components/stack-footer';

const inter = Inter_Tight({ subsets: ['latin'] });
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'StackNothing | Versatile Web Development Agency',
  description: 'StackNothing is a versatile web development agency turning ideas into reality. We specialize in React, Next.js, Drupal, and more.',
  keywords: 'Web Development, React, Next.js, Agency, Innovation, StackNothing',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <meta name="theme-color" content="#ffffff" />
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <StackNavbar />
            <main className="flex-grow pt-16 md:pt-20">
              {children}
            </main>
            <StackFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
