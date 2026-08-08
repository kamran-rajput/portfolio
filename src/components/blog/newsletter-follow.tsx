"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Rss } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export function NewsletterFollow() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary/10 border border-border/40 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10"></div>
          
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Follow My Journey</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Stay updated with continuous learning, practical security research, engineering projects, and new technical insights.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 mb-10">
            <Input type="email" placeholder="Email Address" className="bg-background border-border/50 h-11" />
            <Button className="h-11 px-6">Subscribe</Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://github.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <SiGithub className="w-4 h-4" /> GitHub
            </Link>
            <Link href="https://linkedin.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </Link>
            <Link href="/rss.xml" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Rss className="w-4 h-4" /> RSS Feed
            </Link>
            <Link href="mailto:hello@example.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" /> Email Contact
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
