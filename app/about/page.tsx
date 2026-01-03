"use client";

import { Section } from "@/components/ui/section";
import { AuroraBackground } from "@/components/ui-library/aurora-background";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <AuroraBackground className="h-[60vh] min-h-[400px]">
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 dark:text-white">About Us</h1>
          <p className="text-xl md:text-2xl font-light text-neutral-200 max-w-2xl">
            Where possibilities are limitless, and innovation knows no bounds.
          </p>
        </div>
      </AuroraBackground>

      {/* Story */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded on the belief that the best solutions often come from unconventional thinking, StackNothing was born out of a desire to break free from the constraints of traditional development practices. Our name, StackNothing, symbolizes our ability to start with nothing and build something extraordinary. We embrace the art of minimalism, focusing on what truly matters—delivering impactful, user-centric digital solutions that stand the test of time.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
               <p className="text-muted-foreground text-lg leading-relaxed">
                  At StackNothing, our mission is to provide tailored web and software solutions that meet our clients’ unique needs. We believe in the power of flexibility and adaptability, working across various technology stacks without being confined to just one. Whether it’s React, Next.js, Drupal, WordPress, Tailwind, or any other modern framework or technology, we have the expertise to turn ideas into reality.
               </p>
             </div>
             <div className="p-8 border border-border/50 rounded-2xl glass bg-background/50">
                <h3 className="text-xl font-semibold mb-4">Why We Do It</h3>
                <ul className="space-y-4">
                  {[
                    "To empower businesses with digital tools.",
                    "To simplify the complex.",
                    "To drive innovation in every project.",
                    "To build lasting partnerships."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
           </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "We push the boundaries of what’s possible, always seeking new and better ways to solve problems." },
              { title: "Flexibility", desc: "We adapt to the ever-changing digital landscape, leveraging a variety of technology stacks to deliver the best solutions." },
              { title: "Simplicity", desc: "We believe in the power of minimalism, stripping away the unnecessary to focus on what truly matters." },
              { title: "Collaboration", desc: "We work closely with our clients, understanding their goals and vision to deliver solutions that exceed expectations." },
              { title: "Quality", desc: "We are committed to delivering high-quality work that not only meets but exceeds industry standards." }
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
