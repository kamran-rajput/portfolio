"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const activeStudies = [
  "Security Operations",
  "Detection Engineering",
  "Microsoft Sentinel",
  "Splunk",
  "Threat Hunting",
  "Incident Response",
  "Python for Security Automation",
  "Cloud Security Engineering",
  "AWS Security",
  "Azure Security",
  "AI Security"
];

export function ContinuousDevelopment() {
  return (
    <AnimatedSection className="py-24 bg-primary/5 border-y border-border/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10 rounded-full"></div>
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6 flex items-center justify-center">
          <Zap className="w-8 h-8 mr-3 text-primary fill-primary/20" />
          Continuous Development
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technology moves fast. Here is what I am actively researching, studying, and building in my home lab right now.
        </p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {activeStudies.map((study, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant} 
              className="px-5 py-2.5 bg-background border border-primary/20 rounded-lg shadow-sm hover:border-primary/50 transition-colors"
            >
              <span className="font-mono text-sm font-medium text-foreground">{study}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
