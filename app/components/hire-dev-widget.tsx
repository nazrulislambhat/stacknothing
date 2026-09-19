'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function HireDevWidget() {
  const [selectedRole, setSelectedRole] = useState<string>(
    'Senior Frontend Architect',
  );
  const [engagementType, setEngagementType] = useState<string>('contract');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name,
          email,
          message: `[HIRE WIDGET INQUIRY]\nRole Requested: ${selectedRole}\nEngagement: ${engagementType}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Transmission failed.');

      setSuccess(true);
      setName('');
      setEmail('');
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : 'Failed to transmit request.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="brutal-box p-8 md:p-12 border-2 border-studio-text bg-studio-box space-y-8 shadow-[8px_8px_0px_var(--text-primary)]"
      >
        <div className="space-y-3">
          <div className="border-l-4 border-green-brand pl-4 text-xs font-mono font-bold uppercase tracking-wider">
            DIRECT ENGINEERING DEPLOYMENT // STACKNOTHING LLC
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Hire Senior Engineering Talent
          </h2>
          <p className="text-xs md:text-sm font-mono opacity-80 max-w-2xl leading-relaxed">
            Need elite execution for your sprint? Secure senior-level Next.js,
            React, or headless architecture expertise directly without recruiter
            bloat.
          </p>
        </div>

        {success ? (
          <div className="border-2 border-green-brand p-6 bg-green-brand/10 space-y-3 font-mono">
            <div className="text-sm font-bold text-green-brand uppercase">
              [✓ TRANSMISSION SUCCESSFUL]
            </div>
            <p className="text-xs opacity-90">
              Your engagement request has been dispatched to inbox. We will get
              back to you within 2 hours.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="brutal-button px-4 py-2 text-[10px] uppercase bg-studio-text text-studio-bg font-bold mt-2"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="border-2 border-red-brand p-4 bg-red-brand/10 text-xs font-mono text-red-brand font-bold">
                [!] ERROR: {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase font-bold mb-2 opacity-80">
                  Select Specialty / Role *
                </label>
                <select
                  value={selectedRole}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setSelectedRole(e.target.value)
                  }
                  className="w-full p-3 border-2 border-studio-text bg-transparent text-xs font-mono focus:outline-none focus:border-green-brand uppercase"
                >
                  <option value="Senior Frontend Architect">
                    Senior Frontend Architect (Next.js 16)
                  </option>
                  <option value="Full-Stack React Native Engineer">
                    Full-Stack React Native Engineer
                  </option>
                  <option value="Senior Drupal & Headless Engineer">
                    Senior Drupal & Headless Engineer
                  </option>
                  <option value="UI/UX & Design Systems Specialist">
                    UI/UX & Design Systems Specialist
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-bold mb-2 opacity-80">
                  Engagement Model *
                </label>
                <select
                  value={engagementType}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setEngagementType(e.target.value)
                  }
                  className="w-full p-3 border-2 border-studio-text bg-transparent text-xs font-mono focus:outline-none focus:border-green-brand uppercase"
                >
                  <option value="contract">
                    Project Contract (Fixed Scope)
                  </option>
                  <option value="retainer">Monthly Retainer Sprint</option>
                  <option value="fulltime">Dedicated Partnership</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase font-bold mb-2 opacity-80">
                  Your Name / Company *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  placeholder="e.g. Nazrul Islam"
                  className="w-full p-3 border-2 border-studio-text bg-transparent text-xs font-mono focus:outline-none focus:border-green-brand"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase font-bold mb-2 opacity-80">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  placeholder="example@stacknothing.com"
                  className="w-full p-3 border-2 border-studio-text bg-transparent text-xs font-mono focus:outline-none focus:border-green-brand"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className=" flex-1 py-4 text-xs uppercase bg-black text-white font-bold tracking-wider cursor-pointer disabled:opacity-50 text-center hover:bg-primary-brand"
              >
                {isSubmitting
                  ? 'TRANSMITTING REQUEST...'
                  : 'Initialize Developer Request ➔'}
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}
