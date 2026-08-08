"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function ProjectsHero() {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Engineering Case Studies
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Projects & <span className="text-primary glow-text">Case Studies</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A collection of practical cybersecurity projects, research, security assessments, cloud security work, AI-powered automation, and engineering experiments demonstrating my approach to solving real-world security challenges.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all group">
              Explore Projects
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-border/50 hover:bg-secondary/50 transition-all group">
              View Research
              <BookOpen className="ml-2 w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
