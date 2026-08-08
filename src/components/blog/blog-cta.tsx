"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Link as LinkIcon, Mail } from "lucide-react";
import Link from "next/link";

export function BlogCta() {
  return (
    <AnimatedSection className="py-24 border-t border-border/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">Continue Exploring</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Ready to see these concepts applied in practice? Explore my technical projects or review my professional credentials.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8">
            <Link href="/projects">
              Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-border/50 hover:bg-secondary/50">
            <Link href="/certifications">
              View Certifications
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
          <Link href="/resume.pdf" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium text-sm">
            <Download className="w-4 h-4" /> Download Resume
          </Link>
          <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium text-sm">
            <LinkIcon className="w-4 h-4" /> Connect on LinkedIn
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium text-sm">
            <Mail className="w-4 h-4" /> Contact Me
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
