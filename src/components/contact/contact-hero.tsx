"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, FileText } from "lucide-react";
import Link from "next/link";

export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background visualization representing connected infrastructure */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <svg className="absolute w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
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
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Available for Opportunities
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Let's Build More <br/>
            <span className="text-primary glow-text">Secure Systems</span> Together
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you're a recruiter, hiring manager, security professional, or fellow engineer, I'm always interested in meaningful conversations about cybersecurity, security engineering, cloud security, AI-powered automation, and new opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all group" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Send a Message
              <Send className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
