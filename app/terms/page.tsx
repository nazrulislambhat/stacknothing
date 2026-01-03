"use client";
import { Section } from "@/components/ui/section";

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full pt-12">
      <Section>
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          <div className="prose dark:prose-invert mt-8">
            <p>By using our website, you agree to these terms. This is a placeholder agreement for StackNothing.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
