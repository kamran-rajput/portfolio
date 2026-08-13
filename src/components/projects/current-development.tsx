"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Hammer } from "lucide-react";

const currentBuilds = [
  "AI Security Automation",
  "RAG Systems",
  "Security Chatbots",
  "Cloud Security & Hardening",
  "Python Security Automation",
  "Detection Engineering",
];

export function CurrentDevelopment() {
  return (
    <AnimatedSection className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-3 flex items-center justify-center gap-3">
          <Hammer className="w-8 h-8 text-primary" />
          Currently <span className="gradient-text glow-text">Building</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10">Active technical initiatives currently under development and research.</p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-wrap justify-center gap-3.5"
        >
          {currentBuilds.map((build, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ duration: 0.2 }}
              className="px-5 py-3 bg-card/40 backdrop-blur-md border border-primary/20 hover:border-primary/60 hover:bg-primary/10 rounded-xl shadow-sm hover:shadow-[0_0_15px_rgba(192,133,82,0.2)] transition-all duration-300 flex items-center gap-2.5 cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{build}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

