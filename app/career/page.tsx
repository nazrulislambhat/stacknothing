"use client";
import { Section } from "@/components/ui/section";
import { AuroraBackground } from "@/components/ui-library/aurora-background";

export default function CareerPage() {
  return (
    <div className="flex flex-col w-full">
      <AuroraBackground className="h-[40vh] min-h-[300px]">
        <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">Join Our Team</h1>
        </div>
      </AuroraBackground>
      <Section className="bg-background">
        <div className="container mx-auto px-4 text-center py-20">
          <h2 className="text-2xl font-bold mb-4">No Openings Currently</h2>
          <p className="text-muted-foreground">Check back later for exciting opportunities.</p>
        </div>
      </Section>
    </div>
  );
}
