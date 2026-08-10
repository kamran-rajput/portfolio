"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export function CertHero() {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      {/* Abstract connected nodes background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nodes" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="currentColor" className="text-primary"></circle>
              <path d="M50 50L150 50 M50 50L50 150 M50 50L150 150" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" fill="none"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nodes)"></rect>
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
              Verified Achievements
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Certifications & <span className="text-primary glow-text">Credentials</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Verified cybersecurity training and professional development backed by hands-on learning.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all group">
              View Learning Journey
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-border/50 hover:bg-secondary/50 transition-all group asChild">
              <Link href="/resume.pdf">
                Download Resume
                <FileText className="ml-2 w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
