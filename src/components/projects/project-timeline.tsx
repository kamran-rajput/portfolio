"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const progression = [
  "Networking",
  "Linux",
  "Web Security",
  "Cloud Security",
  "Security Research",
  "Application Security",
  "AI Security",
  "Security Automation",
  "Current Projects"
];

export function ProjectTimeline() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6">Engineering Progression</h2>
        <p className="text-lg text-muted-foreground mb-16">The technical path that informs my current architectural decisions.</p>

        <div className="flex flex-col items-center">
          {progression.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-secondary/20 border border-border/50 px-6 py-3 rounded-full text-sm font-semibold text-foreground shadow-sm hover:border-primary/50 transition-colors"
              >
                {step}
              </motion.div>
              
              {idx < progression.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 40 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: (idx * 0.1) + 0.2 }}
                  className="w-px bg-border/50 my-2 relative"
                >
                  <ArrowDown className="w-3 h-3 text-muted-foreground absolute -bottom-3 -left-[5px]" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
