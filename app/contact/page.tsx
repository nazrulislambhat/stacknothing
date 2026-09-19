'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [tier, setTier] = useState<string>('Sprint Audit ($2,500 / ₹95,000)');
  const [message, setMessage] = useState<string>('');
  const [botField, setBotField] = useState<string>(''); // Honeypot state

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name,
          email,
          phone,
          message: `[Tier: ${tier}]\n[Phone: ${phone || 'N/A'}]\n\n${message}`,
          botField, // Passed to backend for spam check
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to transmit message.');
      }

      setSuccessMessage(
        'Transmission successful! Message dispatched to inbox.',
      );
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setBotField('');
    } catch (error: unknown) {
      const errText =
        error instanceof Error ? error.message : 'Transmission failed.';
      setErrorMessage(errText);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto space-y-8 text-studio-text"
    >
      <div>
        <div className="border-l-4 border-green-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          DIRECT LINE & INQUIRIES
        </div>
        <h1 className="text-4xl font-black uppercase">Initiate Dialogue</h1>
        <p className="text-xs mt-2 opacity-80">
          Reach out directly via email at{' '}
          <a
            href="mailto:team@stacknothing.com"
            className="text-studio-text underline font-bold"
          >
            team@stacknothing.com
          </a>{' '}
          or transmit your project parameters below.
        </p>
      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="brutal-box p-6 bg-studio-box flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <div className="text-[10px] opacity-60 uppercase font-bold">
            PRIMARY DIRECT EMAIL
          </div>
          <div className="text-lg text-primary-brand uppercase">
            team@stacknothing.com
          </div>
        </div>
        <a
          href="mailto:team@stacknothing.com"
          className="brutal-button px-4 py-2 text-xs uppercase bg-primary-brand text-white"
        >
          Send Email ↗
        </a>
      </motion.div>

      <form onSubmit={handleSubmit} className="brutal-box p-8 space-y-6">
        {successMessage && (
          <div className="border-2 border-green-brand p-4 bg-green-brand/10 text-xs font-mono text-green-brand font-bold">
            [✓ SUCCESS]: {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="border-2 border-red-brand p-4 bg-red-brand/10 text-xs font-mono text-red-brand font-bold">
            [!] ERROR: {errorMessage}
          </div>
        )}

        {/* Hidden Honeypot anti-spam field */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <label htmlFor="botField">
            Do not fill this out if you are human:
          </label>
          <input
            type="text"
            id="botField"
            name="botField"
            tabIndex={-1}
            autoComplete="off"
            value={botField}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBotField(e.target.value)
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase mb-2 opacity-80">
              YOUR NAME *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              placeholder="e.g. Nazrul Islam"
              className="w-full border-2 border-studio-text px-4 py-3 text-xs text-studio-text bg-[var(--bg-primary)] focus:outline-none focus:border-green-brand"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase mb-2 opacity-80">
              EMAIL *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="example@stacknothing.com"
              className="w-full border-2 border-studio-text px-4 py-3 text-xs text-studio-text bg-[var(--bg-primary)] focus:outline-none focus:border-green-brand"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 opacity-80">
            PHONE NUMBER (OPTIONAL)
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            placeholder="+1 (173) 173-1703"
            className="w-full border-2 border-studio-text px-4 py-3 text-xs text-studio-text bg-[var(--bg-primary)] focus:outline-none focus:border-green-brand"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 opacity-80">
            ENGAGEMENT TIER
          </label>
          <select
            value={tier}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setTier(e.target.value)
            }
            className="w-full border-2 border-studio-text px-4 py-3 text-xs text-studio-text bg-[var(--bg-primary)] focus:outline-none focus:border-green-brand"
          >
            <option>Sprint Audit ($2,500 / ₹95,000)</option>
            <option>MVP Product Build ($8,500+ / ₹3,50,000+)</option>
            <option>Design System Retainer ($5,000/mo / ₹1,80,000/mo)</option>
            <option>Ecosystem Partnership / General</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 opacity-80">
            PROJECT SCOPE SPECIFICATION *
          </label>
          <textarea
            rows={5}
            required
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            placeholder="Define technical constraints, goals, and delivery timelines..."
            className="w-full border-2 border-studio-text p-4 text-xs text-studio-text bg-[var(--bg-primary)] focus:outline-none focus:border-green-brand resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          disabled={isSubmitting}
          className="brutal-button w-full py-4 text-xs uppercase tracking-wider cursor-pointer bg-primary-brand text-white font-bold disabled:opacity-50"
        >
          {isSubmitting
            ? 'TRANSMITTING VIA RESEND EDGE...'
            : 'TRANSMIT MESSAGE ➔'}
        </motion.button>
      </form>
    </motion.div>
  );
}
