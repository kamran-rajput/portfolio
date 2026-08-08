"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

const currentBuilds = [
  "AI Security Automation",
  "RAG Systems",
  "Security Chatbots",
  "Cloud Security",
  "Python Security Automation",
  "Detection Engineering",
];

export function CurrentDevelopment() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4 flex items-center justify-center">
          <Hammer className="w-8 h-8 mr-3 text-primary" />
          Currently Building
        </h2>
        <p className="text-lg text-muted-foreground mb-12">Active projects currently under development and research.</p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {currentBuilds.map((build, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="px-5 py-2.5 bg-background border border-border/40 rounded-lg shadow-sm hover:border-primary/30 transition-colors">
              <span className="font-mono text-sm font-medium text-foreground">{build}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
