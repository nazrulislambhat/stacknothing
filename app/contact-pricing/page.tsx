'use client';

import { Suspense, useState, FormEvent, ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

function ContactPricingContent() {
  const searchParams = useSearchParams();

  // Read selected plan configurations from URL query string
  const planKey: string = searchParams.get('plan') || 'custom';
  const type: string = searchParams.get('type') || 'project';
  const currency: string = searchParams.get('currency') || 'USD';
  const price: string = searchParams.get('price') || 'Custom Quote';

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // Map keys to readable text titles
  const planTitles: Record<string, string> = {
    'landing-page': 'Landing Page & Audit',
    'architecture-sprint': 'Architecture Sprint',
    'mvp-build': 'MVP Product Build',
    'design-retainer': 'Design Retainer',
    custom: 'Custom Engineering Tier',
  };

  const currentPlanTitle = planTitles[planKey] || 'Custom Tier';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'pricing',
          name,
          email,
          estimate: `${price} (${currency})`,
          pages: `Tier: ${currentPlanTitle} [Model: ${type}]`,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit plan selection.');
      }

      setShowPopup(true);
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
      className="max-w-5xl mx-auto space-y-8 text-studio-text md:p-12 relative"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="border-l-4 border-red-brand pl-4 text-sm font-bold uppercase tracking-wider mb-2">
            PRICING INTAKE // STACKNOTHING LLC
          </div>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
            Finalize Plan Details
          </h1>
        </div>
        <Link
          href="/pricing"
          className="text-xs font-mono uppercase underline hover:opacity-75"
        >
          ← Change Plan
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Selected Plan Details Card */}
        <div className="md:col-span-1 brutal-box p-6 border-2 border-studio-text bg-studio-box space-y-4">
          <div className="text-[10px] bg-studio-text text-studio-bg px-2 py-0.5 font-bold uppercase inline-block">
            Selected Tier
          </div>
          <div>
            <h3 className="text-lg font-black uppercase mb-1">
              {currentPlanTitle}
            </h3>
            <p className="text-xs font-mono opacity-80 uppercase">
              Model: {type} {type === 'retainer' && '(/mo)'}
            </p>
          </div>
          <div className="border-t border-studio-text/20 pt-4">
            <div className="text-xs opacity-60 uppercase font-mono">
              Agreed Investment
            </div>
            <div className="text-2xl font-black text-green-brand">
              {price} <span className="text-xs font-mono">({currency})</span>
            </div>
          </div>
        </div>

        {/* Pricing Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 brutal-box p-6 md:p-8 border-2 border-studio-text space-y-5 bg-studio-box"
        >
          {errorMessage && (
            <div className="border-2 border-red-brand p-4 bg-red-brand/10 text-xs font-mono text-red-brand font-bold">
              [!] ERROR: {errorMessage}
            </div>
          )}

          <div>
            <label className="block text-xs font-mono uppercase font-bold mb-1.5">
              Full Name / Point of Contact *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              placeholder="e.g. Alex Rivera"
              className="w-full p-3 border-2 border-studio-text bg-transparent text-xs font-mono focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase font-bold mb-1.5">
              Work Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="alex@company.com"
              className="w-full p-3 border-2 border-studio-text bg-transparent text-xs font-mono focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase font-bold mb-1.5">
              Project Brief & Specific Requirements
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
              placeholder="Briefly describe your objectives or deadlines..."
              className="w-full p-3 border-2 border-studio-text bg-transparent text-xs font-mono focus:outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="brutal-button w-full py-3.5 text-xs uppercase bg-black cursor-pointer text-white font-bold tracking-wide disabled:opacity-50"
          >
            {isSubmitting
              ? 'TRANSMITTING VIA RESEND...'
              : 'Submit Plan Selection ➔'}
          </button>
        </form>
      </div>

      {/* Success Popup Modal with Cal.com integration */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="brutal-box max-w-lg w-full p-6 md:p-8 border-2 border-studio-text bg-studio-box text-studio-text space-y-6 shadow-[8px_8px_0px_var(--text-primary)]"
            >
              <div className="space-y-2">
                <div className="text-[10px] bg-green-brand text-black px-2 py-0.5 font-bold uppercase inline-block">
                  PLAN LOGGED // NEXT STEP
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  Discuss Your Plan with Nazrul
                </h2>
                <p className="text-xs font-mono opacity-80 leading-relaxed">
                  Your request for the{' '}
                  <span className="font-bold underline text-green-brand">
                    {currentPlanTitle}
                  </span>{' '}
                  has been saved and dispatched to inbox. Book a direct sync to
                  lock down specifications and implementation details.
                </p>
              </div>

              <div className="border-t border-studio-text/20 pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://cal.com/nazrul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-button flex-1 text-center py-3.5 text-xs uppercase bg-green-brand text-black font-bold"
                >
                  Schedule on Cal.com ➔
                </a>
                <Link
                  href="/pricing"
                  className="brutal-button text-center py-3.5 px-4 text-xs uppercase bg-studio-text text-studio-bg font-bold"
                >
                  Return to Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactPricingPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center font-mono text-xs uppercase opacity-75">
          Loading pricing configuration...
        </div>
      }
    >
      <ContactPricingContent />
    </Suspense>
  );
}
