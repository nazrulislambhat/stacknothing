"use client";

import { Section } from "@/components/ui/section";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services does StackNothing offer?",
    a: "We offer a wide range of digital solutions, including web development, custom software development, UI/UX design, e-commerce solutions, CMS development, API integration, and digital strategy consulting. Our expertise spans across technologies like React, Next.js, Drupal, WordPress, and more."
  },
  {
    q: "What industries does StackNothing serve?",
    a: "We serve clients across various industries, including technology, finance, healthcare, education, retail, and more. Our flexible approach allows us to tailor solutions to meet the specific needs of each industry."
  },
  {
    q: "How does StackNothing approach a new project?",
    a: "We begin with an in-depth consultation to understand your goals and requirements. From there, we create a comprehensive plan outlining the project’s scope, timeline, and deliverables. Our team then works collaboratively to execute the plan, keeping you informed and involved throughout the process."
  },
  {
    q: "What is StackNothing’s technology stack?",
    a: "We are technology-agnostic, meaning we work with a variety of technologies to find the best fit for your project. Our core expertise includes React, Next.js, Drupal, WordPress, Tailwind, and API integrations, among others."
  },
  {
    q: "How long does it take to complete a project?",
    a: "The timeline for a project varies depending on its complexity, scope, and requirements. After our initial consultation, we provide a detailed project timeline. We prioritize delivering high-quality work within the agreed timeframe."
  },
  {
    q: "Does StackNothing offer post-launch support?",
    a: "Yes, we offer ongoing support and maintenance services to ensure your solution remains up-to-date, secure, and optimized for performance. We also provide additional services for updates, feature enhancements, and technical support as needed."
  },
  {
    q: "How much does it cost to work with StackNothing?",
    a: "The cost of a project depends on its size, complexity, and specific requirements. We provide a detailed quote after our initial consultation, ensuring transparency and alignment with your budget."
  },
  {
    q: "Can StackNothing help with an existing project?",
    a: "Absolutely. We can step in at any stage of your project to provide assistance, whether it’s improving performance, adding new features, or completing an unfinished project."
  },
  {
    q: "What makes StackNothing different from other agencies?",
    a: "At StackNothing, we prioritize flexibility, innovation, and client satisfaction. We’re not tied to a single technology stack, allowing us to tailor solutions that best fit your needs. Our collaborative approach ensures that we understand your goals and deliver solutions that exceed expectations."
  },
  {
    q: "How can I get started?",
    a: "Getting started is easy! Simply contact us to discuss your project. We’ll schedule a consultation to learn more about your needs and how we can help."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-full pt-12">
      <Section>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-xl">
              Everything you need to know about working with us.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border/50 rounded-2xl bg-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="flex items-center justify-between w-full p-6 text-left"
                >
                  <span className="text-lg font-semibold">{faq.q}</span>
                  {openIndex === idx ? <Minus className="w-5 h-5 opacity-50" /> : <Plus className="w-5 h-5 opacity-50" />}
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
