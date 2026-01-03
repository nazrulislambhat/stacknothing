"use client";

import { Section } from "@/components/ui/section";
import { AuroraBackground } from "@/components/ui-library/aurora-background";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full">
      <AuroraBackground className="h-[50vh] min-h-[400px]">
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-6 dark:text-white"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-light text-neutral-200 max-w-2xl"
          >
            A showcase of projects that turn ideas into reality.
          </motion.p>
        </div>
      </AuroraBackground>

      <Section className="bg-background">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Project Showcase</h2>
            <p className="text-muted-foreground">Our diverse portfolio of web and software solutions is coming soon.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
