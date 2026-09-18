'use client';

import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="brutal-box max-w-2xl w-full p-6 md:p-8 border-2 border-studio-text bg-studio-box text-studio-text space-y-6 shadow-[8px_8px_0px_var(--text-primary)] relative"
          >
            <div className="flex justify-between items-start border-b border-studio-text/20 pb-4">
              <div>
                <div className="text-[10px] font-mono text-green-brand font-bold uppercase">
                  INSTANT CAL.com SYNC
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mt-1">
                  Schedule Direct Engineering Call
                </h3>
              </div>
              <button
                onClick={onClose}
                className="brutal-button px-3 py-1 text-xs uppercase font-mono font-bold bg-red-brand text-white"
              >
                [X] Close
              </button>
            </div>

            <div className="w-full h-[400px] border-2 border-studio-text bg-[var(--bg-primary)] flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="text-xs font-mono opacity-80 uppercase">
                Embed your live Cal.com iframe or widget below:
              </div>
              <a
                href="https://cal.com/nazrul"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button px-6 py-4 text-xs uppercase bg-green-brand text-black font-bold tracking-wider"
              >
                Open Cal.com in Full Window ↗
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
