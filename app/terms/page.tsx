export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <div className="border-l-4 border-white pl-4 text-sm font-bold uppercase tracking-wider mb-2">
          LEGAL FRAMEWORK
        </div>
        <h1 className="text-4xl font-black uppercase">Terms & Conditions</h1>
        <p className="text-xs text-zinc-400 mt-2">
          Effective Date: January 1, 2026
        </p>
      </div>

      <div className="brutal-box p-8 space-y-6 text-xs text-zinc-300 leading-relaxed">
        <section>
          <h2 className="text-white font-bold uppercase mb-2">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing stacknothing.com or utilizing our digital apps
            (including dhikrly.com), you agree to these legal conditions.
          </p>
        </section>
        <section>
          <h2 className="text-white font-bold uppercase mb-2">
            2. Intellectual Property
          </h2>
          <p>
            All framework codebases, UI primitives, and branding remain property
            of StackNothing Studio until custom contracts assign full ownership
            upon project sign-off.
          </p>
        </section>
        <section>
          <h2 className="text-white font-bold uppercase mb-2">
            3. Governing Billing (USD)
          </h2>
          <p>
            All transactions are executed in United States Dollars (USD) with
            mandatory deposits preceding custom technical sprints.
          </p>
        </section>
      </div>
    </div>
  );
}
