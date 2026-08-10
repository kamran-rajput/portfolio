"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";

export function AboutPreview() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Glass panel wrapper */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 relative">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Philosophy & Approach
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a cybersecurity professional focused on practical security engineering rather than theoretical learning. My mission is to build resilient systems by integrating defensive strategies with offensive insights.
            </p>
            <p>
              My work combines Security Operations, Web Application Security, Cloud Security, and AI-powered Security Solutions. I continuously strengthen my skills through hands-on laboratories, practical security assessments, and network analysis.
            </p>
            <p>
              The goal is simple: engineer security into the fabric of the technology stack to create environments that are demonstrably secure, observable, and resilient.
            </p>
          </div>
          <div className="mt-10">
            <Link 
              href="/about" 
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-all group hover:drop-shadow-[0_0_12px_rgba(192,133,82,0.4)]"
            >
              Read More
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
