"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { ArrowDown, GitCommit } from "lucide-react";

const progression = [
  "Networking",
  "Linux Systems",
  "Web Security & OWASP",
  "Cloud Security & Hardening",
  "Security Research",
  "Application Security",
  "AI Security & RAG",
  "Security Automation",
  "Current Builds"
];

export function ProjectTimeline() {
  return (
    <AnimatedSection className="py-20 bg-secondary/5 border-y border-border/30 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20 mb-4 backdrop-blur-md">
          <GitCommit className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
            Technical Journey
          </span>
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
          Engineering <span className="gradient-text glow-text">Progression</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-14">The technical evolution that informs my current security architecture decisions.</p>

        <div className="flex flex-col items-center">
          {progression.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ duration: 0.25 }}
                className="bg-card/50 backdrop-blur-md border border-primary/20 px-7 py-3.5 rounded-full text-sm font-semibold text-foreground hover:text-primary shadow-sm hover:border-primary/50 hover:shadow-[0_0_20px_rgba(192,133,82,0.15)] transition-all duration-300 cursor-default"
              >
                {step}
              </motion.div>
              
              {idx < progression.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 36 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: (idx * 0.08) + 0.15 }}
                  className="w-0.5 bg-gradient-to-b from-primary/50 to-primary/20 my-2 relative"
                >
                  <ArrowDown className="w-3.5 h-3.5 text-primary absolute -bottom-3.5 -left-[6px] animate-pulse" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

