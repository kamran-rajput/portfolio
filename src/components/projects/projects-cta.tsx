"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export function ProjectsCta() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">Ready to Collaborate?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Explore my technical research or get in touch to discuss security engineering opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8">
            <Link href="/blog">
              View Security Research <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8">
            <Link href="/contact">
              Contact Me
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 border-t border-border/30 pt-10">
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <LinkedinIcon className="w-5 h-5" /> LinkedIn
          </Link>
          <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <SiGithub className="w-5 h-5" /> GitHub
          </Link>
          <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <Mail className="w-5 h-5" /> Email
          </Link>
          <Link href="/resume.pdf" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <FileText className="w-5 h-5" /> Resume
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
