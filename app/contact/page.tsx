"use client";

import { Section } from "@/components/ui/section";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    // Replace these with your actual Service ID, Template ID, and Public Key
    // You should use environment variables: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
        },
      );
  };

  return (
    <div className="flex flex-col w-full pt-12">
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-xl">
              We’re here to help you bring your digital vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">General Inquiries</h3>
                <div className="flex items-start gap-4 mb-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-muted-foreground">info@stacknothing.com</p>
                    <p className="text-muted-foreground">business@stacknothing.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Bangalore Office</h4>
                    <p className="text-muted-foreground">
                      StackNothing Technologies Pvt. Ltd.<br />
                      123, Tech Park Road, Whitefield<br />
                      Bangalore, Karnataka, India 560066
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Srinagar Office</h4>
                    <p className="text-muted-foreground">
                      StackNothing Innovations LLP<br />
                      45, Green Valley Lane, Rajbagh<br />
                      Srinagar, Jammu & Kashmir, India 190008
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10 blur-xl" />
              <form ref={form} onSubmit={sendEmail} className="p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input name="user_name" required type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input name="user_email" required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <input name="user_phone" type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-medium">Interest</label>
                     <select name="user_interest" className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                       <option>Web Development</option>
                       <option>Custom Software</option>
                       <option>UI/UX Design</option>
                       <option>E-commerce</option>
                       <option>Other</option>
                     </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Details</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Tell us about your project..." />
                </div>

                <Button 
                  type="submit" 
                  disabled={status === "sending" || status === "success"}
                  className="w-full h-12 text-lg font-medium rounded-xl disabled:opacity-70" 
                  color={status === "success" ? "success" : "primary"}
                >
                  {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"} 
                  {status === "idle" && <Send className="w-4 h-4 ml-2" />}
                </Button>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
