"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FolderGit2, Sparkles } from "lucide-react";
import { FloatingParticles } from "@/components/ui/floating-particles";
import Link from "next/link";

export function ProjectsHero() {
  return (
    <section className="relative min-h-[65vh] w-full flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Dynamic Ambient Background & Floating Particles */}
      <FloatingParticles count={25} className="opacity-60" />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Hexagon Tech Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center space-x-2.5 bg-primary/10 px-4 py-2 rounded-full border border-primary/25 backdrop-blur-md shadow-[0_0_20px_rgba(192,133,82,0.15)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.9)]"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-primary uppercase flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-primary" />
              Engineering Case Studies & Security Work
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Projects & <span className="gradient-text glow-text">Case Studies</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A curated portfolio of practical cybersecurity projects, security assessments, cloud security architectures, AI-powered automation, and engineering experiments demonstrating real-world security engineering.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-12 px-8 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all hover:glow-primary relative overflow-hidden shimmer-overlay group">
              <a href="#featured-projects">
                Explore Projects
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all glass-badge group">
              <Link href="/blog">
                <BookOpen className="mr-2 w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                View Research
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

