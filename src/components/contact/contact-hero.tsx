"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, FileText, Sparkles } from "lucide-react";
import { FloatingParticles } from "@/components/ui/floating-particles";
import Link from "next/link";

export function ContactHero() {
  return (
    <section className="relative min-h-[65vh] w-full flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background radial gradient & particles */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
      
      {/* Floating particles background */}
      <FloatingParticles count={16} />

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-28 w-80 h-80 bg-primary/12 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-80 h-80 bg-accent/10 rounded-full blur-[110px] -z-10 pointer-events-none" />

      {/* Hexagon tech grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M25 0 L50 14.4 L50 43.4 L25 29 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/40" />
              <path d="M0 14.4 L25 0 L25 29 L0 43.4 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/40" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2.5 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/25 backdrop-blur-md shadow-[0_0_15px_rgba(192,133,82,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_8px_rgba(192,133,82,0.8)]"></span>
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider text-primary uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Available for Opportunities
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Let's Build More <br/>
            <span className="gradient-text glow-text">Secure Systems</span> Together
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you're a recruiter, hiring manager, security professional, or fellow engineer, I'm always interested in meaningful conversations about cybersecurity, security engineering, cloud security, AI-powered automation, and new opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="h-12 px-8 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all hover:glow-primary relative overflow-hidden shimmer-overlay group cursor-pointer"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Send a Message
              <Send className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all glass-badge group">
              <Link href="/resume/Kamran-Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
                <FileText className="ml-2 w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

