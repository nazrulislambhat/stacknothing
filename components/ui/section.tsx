import { cn } from "@/app/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-12 md:py-24", className)} {...props}>
      {children}
    </section>
  );
}
