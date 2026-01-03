"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Plan = {
  name: string;
  priceUSD: string;
  priceINR: string;
  desc: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: "Ultra Low-Cost",
    priceUSD: "-",
    priceINR: "₹15,000 - ₹30,000",
    desc: "Designed for ultra-low-end customers looking to get started online.",
    features: [
      "Simple Website (Up to 3 Pages)",
      "Responsive Design",
      "Basic SEO Setup",
      "Hosting (1 Year Included)",
      "CMS Setup (WordPress)",
      "1 Month Basic Support"
    ]
  },
  {
    name: "Basic Plan",
    priceUSD: "$2,000 - $5,000",
    priceINR: "₹50,000 - ₹1,00,000",
    desc: "Ideal for small businesses or startups looking to establish an online presence.",
    features: [
      "Custom Website (Up to 5 Pages)",
      "Basic SEO Optimization",
      "Responsive Design",
      "CMS Setup (WordPress/Drupal)",
      "1 Month Support",
      "Standard API Integrations"
    ]
  },
  {
    name: "Standard Plan",
    priceUSD: "$5,000 - $15,000",
    priceINR: "₹1,00,000 - ₹3,00,000",
    desc: "Perfect for growing businesses requiring more advanced features.",
    features: [
      "Custom Website (Up to 15 Pages)",
      "Advanced SEO Optimization",
      "Mobile-First Design",
      "E-commerce Integration",
      "3 Months Support",
      "UI/UX Design & Prototyping"
    ],
    popular: true
  },
  {
    name: "Premium Plan",
    priceUSD: "$15,000 - $50,000",
    priceINR: "₹3,00,000 - ₹10,00,000",
    desc: "Designed for enterprises with complex requirements.",
    features: [
      "Full Custom Software Development",
      "Enterprise Web Applications",
      "Advanced UI/UX",
      "Custom CMS Development",
      "6 Months Support",
      "Digital Strategy Consulting"
    ]
  },
  {
    name: "Custom Solutions",
    priceUSD: "Starts at $50,000",
    priceINR: "Starts at ₹10,00,000",
    desc: "For businesses with unique needs or large-scale projects.",
    features: [
      "Tailored Services",
      "Full Project Consultation",
      "Dedicated Project Management",
      "Long-Term Support",
      "Custom Integrations",
      "Ongoing Optimization"
    ]
  }
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<"USD" | "INR">("INR");

  return (
    <div className="flex flex-col w-full pt-12">
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-muted-foreground text-xl mb-8">
              Flexible pricing to suit businesses of all sizes. Transparent and value-driven.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 bg-muted/50 w-fit mx-auto p-1 rounded-full border border-border/50">
              <button
                onClick={() => setCurrency("INR")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  currency === "INR" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                India (₹)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  currency === "USD" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                International ($)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {plans.map((plan, idx) => {
                 if (currency === 'USD' && plan.name === 'Ultra Low-Cost') return null;

                 return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={`relative p-8 rounded-3xl border flex flex-col ${
                      plan.popular 
                        ? "border-primary/50 bg-secondary/30 shadow-lg ring-1 ring-primary/20" 
                        : "border-border/50 bg-card hover:bg-muted/10 transition-colors"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" /> Most Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-2xl font-bold mb-4">
                      {currency === "USD" ? plan.priceUSD : plan.priceINR}
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 h-10">{plan.desc}</p>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/contact" className="mt-auto">
                      <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-transparent hover:border-border"
                      }`}>
                        Get Started
                      </button>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          <div className="mt-16 text-center space-y-4">
             <h3 className="text-2xl font-bold">Add-Ons & Extras</h3>
             <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Additional Pages", "Ongoing Support", "Performance Optimization",
                  "Content Creation", "Custom API Dev", "Digital Marketing"
                ].map((item, i) => (
                   <span key={i} className="px-4 py-2 rounded-lg bg-muted border border-border/50 text-sm">
                      {item}
                   </span>
                ))}
             </div>
             <p className="text-muted-foreground mt-4">Contact us for a custom quote on add-ons.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
