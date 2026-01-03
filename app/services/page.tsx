"use client";

import { Section } from "@/components/ui/section";
import { Code2, Settings, Palette, ShoppingBag, Database, Link as LinkIcon, BarChart } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    desc: "We build powerful, dynamic websites that drive engagement and deliver results. From responsive design to seamless user experiences, our web development services ensure your online presence stands out.",
    details: ["Custom Website Development", "Single Page Applications (SPA)", "Interactive Experiences"]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Custom Software Development",
    desc: "Transform your ideas into reality with our custom software development services. Whether you need a simple application or a complex enterprise solution, we deliver software that is scalable, secure, and easy to maintain.",
    details: ["Bespoke Applications", "Enterprise Solutions", "Process Automation"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    desc: "User experience is at the heart of what we do. Our design team focuses on creating intuitive, user-friendly interfaces that not only look great but also provide a seamless experience for your users.",
    details: ["User Research & Personas", "Wireframing & Prototyping", "Visual Design"]
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "E-commerce Solutions",
    desc: "Take your online store to the next level with our comprehensive e-commerce services. We provide end-to-end solutions, from setting up your store to optimizing it for conversions.",
    details: ["Store Setup", "Payment Gateway Integration", "Performance Optimization"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "CMS Development",
    desc: "Empower your team with easy-to-use content management systems. We specialize in both Drupal and WordPress development, offering flexible and scalable CMS solutions.",
    details: ["Drupal Development", "WordPress Development", "Custom Plugins"]
  },
  {
    icon: <LinkIcon className="w-8 h-8" />,
    title: "API Integration",
    desc: "Seamless communication between applications is crucial. We provide robust API integration services that ensure your systems work together flawlessly.",
    details: ["Third-Party Integration", "Custom API Development", "Secure Data Transfer"]
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Digital Strategy",
    desc: "Navigating the digital landscape can be complex. Our digital strategy and consulting services are designed to help you make informed decisions that drive growth and success.",
    details: ["Digital Transformation", "Technology Consulting", "Project Management"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full pt-12">
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-muted-foreground text-xl">
              We specialize in crafting tailored digital solutions that align with your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-3xl border border-border/50 bg-background hover:bg-muted/20 transition-all hover:shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.details.map((detail, dIdx) => (
                    <span key={dIdx} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
