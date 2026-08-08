"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const path = [
  "Start Here",
  "Networking",
  "Linux",
  "Web Security",
  "Cloud Security",
  "Security Operations",
  "Detection Engineering",
  "AI Security",
  "Security Automation"
];

export function ReadingJourney() {
  return (
    <AnimatedSection className="py-24 bg-primary/5 border-y border-border/30">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6">Reading Journey</h2>
        <p className="text-lg text-muted-foreground mb-16">A structured roadmap indicating how to progress through the research materials.</p>

        <div className="flex flex-col items-center">
          {path.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors shadow-sm ${idx === 0 ? 'bg-primary text-primary-foreground' : 'bg-background border border-border/50 text-foreground hover:border-primary/50'}`}
              >
                {step}
              </motion.div>
              
              {idx < path.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 32 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.4, delay: (idx * 0.1) + 0.2 }}
                  className="w-px bg-primary/30 my-2 relative"
                >
                  <ArrowDown className="w-3 h-3 text-primary/50 absolute -bottom-3 -left-[5px]" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
