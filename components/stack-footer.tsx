"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

export const StackFooter = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Stack<span className="text-primary/60">Nothing</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              We transform "nothing" into something extraordinary. Versatile web development agency.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/career" className="hover:text-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Bangalore, India</p>
              <p>Srinagar, Kashmir</p>
              <p>info@stacknothing.com</p>
            </div>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook size={20} /></Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} StackNothing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
