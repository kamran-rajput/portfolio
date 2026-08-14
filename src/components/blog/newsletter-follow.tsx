"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Rss } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

import { LinkedinIcon } from "@/components/social-links-cta";

export function NewsletterFollow() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card border-primary/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-[0_0_40px_rgba(192,133,82,0.12)]">
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
            <a href="https://github.com/muhammad-kamran-akmal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <SiGithub className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/muhammad-kamran-akmal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <Link href="/rss.xml" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Rss className="w-4 h-4" /> RSS Feed
            </Link>
            <a href="mailto:kamran.akmal.sec@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-4 h-4" /> Email Contact
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
