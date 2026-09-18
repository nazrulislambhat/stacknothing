'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

interface Token {
  name: string;
  hex: string;
  variable: string;
  description: string;
}

const tokens: Token[] = [
  {
    name: 'Brand Primary',
    hex: '#1f01b9',
    variable: 'var(--primary-brand)',
    description:
      'Core agency signature blue for primary actions and active states.',
  },
  {
    name: 'Brand Red',
    hex: '#db4a2b',
    variable: 'var(--red-brand)',
    description:
      'High-contrast alert tone used for critical badges and error boundaries.',
  },
  {
    name: 'Brand Green',
    hex: '#b2d12e',
    variable: 'var(--green-brand)',
    description:
      'Vibrant accent for success metrics, guarantees, and active highlights.',
  },
  {
    name: 'Brand Third',
    hex: '#3d155f',
    variable: 'var(--third-brand)',
    description:
      'Deep structural accent for multi-layered brutalist card contrast.',
  },
];

export default function TokensPage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedToken(hex);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto space-y-12 text-studio-text"
    >
      <div>
        <div className="border-l-4 border-primary-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          DESIGN SYSTEM // TAILWIND V4 TOKENS
        </div>
        <h1 className="text-4xl font-black uppercase tracking-tight">
          Semantic Color Architecture
        </h1>
        <p className="text-xs md:text-sm mt-2 max-w-xl leading-relaxed opacity-80">
          The official design tokens powering StackNothing LLC. Click any token
          to copy its hex code to your clipboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tokens.map((token) => (
          <motion.div
            key={token.name}
            whileHover={{ y: -2 }}
            onClick={() => handleCopy(token.hex)}
            className="brutal-box p-6 border-2 border-studio-text bg-studio-box space-y-4 cursor-pointer relative group"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono opacity-60 uppercase">
                  {token.variable}
                </span>
                <h3 className="text-2xl font-black uppercase mt-1">
                  {token.name}
                </h3>
              </div>
              <div
                className="w-10 h-10 border-2 border-studio-text"
                style={{ backgroundColor: token.hex }}
              />
            </div>

            <p className="text-xs font-mono opacity-80">{token.description}</p>

            <div className="pt-4 border-t border-studio-text/20 flex justify-between items-center font-mono text-xs">
              <span className="font-bold">{token.hex}</span>
              <span className="text-primary-brand font-bold uppercase group-hover:underline">
                {copiedToken === token.hex ? '[✓ COPIED]' : 'Copy Hex ➔'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
