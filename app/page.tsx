"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Layers, Zap, Globe } from "lucide-react";
import { AuroraBackground } from "@/components/ui-library/aurora-background";
import { Section } from "@/components/ui/section";
import { Button } from "@nextui-org/react";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <AuroraBackground className="h-[90vh]">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Turning Ideas into Reality.
          </div>
          <div className="font-light text-base md:text-4xl dark:text-neutral-200 py-4 text-center max-w-2xl">
            Nothing is off-limits. We build the future.
          </div>
          <div className="flex gap-4">
             <Link href="/contact">
              <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-8 py-3 font-semibold transition-transform hover:scale-105 active:scale-95">
                Let's Collaborate
              </button>
            </Link>
             <Link href="/services">
              <button className="bg-transparent border border-black dark:border-white rounded-full w-fit text-black dark:text-white px-8 py-3 font-semibold transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
                Our Services <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* About Brief */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Versatile. Minimalist. Flexible.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At StackNothing, we believe in limitless possibilities. We are a versatile web development agency crafting custom digital solutions—whether it’s React, Next.js, Drupal, or beyond.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our name reflects our philosophy: starting from "nothing" and building something significant. We aren't tied to a single stack, giving us the freedom to choose the best tool for your unique needs.
                </p>
                <Link href="/about" className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4">
                  Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden glass flex items-center justify-center bg-gradient-to-br from-secondary to-background border border-border">
                <span className="text-9xl font-bold opacity-5 select-none text-primary">SN</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {/* Service 1 */}
               <div className="p-8 rounded-2xl bg-background border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 group text-left">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Web Development</h3>
                  <p className="text-muted-foreground">Dynamic websites and complex web apps using React, Next.js, and modern frameworks.</p>
               </div>
               {/* Service 2 */}
               <div className="p-8 rounded-2xl bg-background border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 group text-left">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Custom Software</h3>
                  <p className="text-muted-foreground">Tailored software solutions designed to transform your business operations.</p>
               </div>
               {/* Service 3 */}
               <div className="p-8 rounded-2xl bg-background border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 group text-left">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">CMS Development</h3>
                  <p className="text-muted-foreground">Scalable content management systems with Drupal and WordPress expertise.</p>
               </div>
            </div>
            <div className="mt-12">
              <Link href="/services">
                <Button size="lg" variant="ghost" className="font-semibold">
                  View All Services
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center space-y-8">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to build something <span className="text-primary/60">extraordinary?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              From idea to reality, we are here to help you every step of the way. Let's start the conversation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 text-lg h-12">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/contact">
                 <Button size="lg" variant="bordered" className="rounded-full px-8 text-lg h-12">
                  Contact Us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
