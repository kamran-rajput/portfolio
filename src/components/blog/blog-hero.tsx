"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export function BlogHero() {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background visualization representing network topology */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
        <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Technical Documentation
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Security <span className="text-primary glow-text">Research</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Technical articles, security research, practical walkthroughs, engineering insights, and lessons learned while exploring modern cybersecurity.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all group">
              Explore Articles
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-border/50 hover:bg-secondary/50 transition-all group">
              Featured Research
              <Star className="ml-2 w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
