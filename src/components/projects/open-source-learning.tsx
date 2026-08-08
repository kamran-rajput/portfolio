"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const learningItems = [
  "Security Research",
  "PortSwigger Labs",
  "Cloud Security Learning",
  "Google Cybersecurity",
  "Google Cloud Security",
  "Continuous Hands-on Practice",
  "Technical Documentation",
];

export function OpenSourceLearning() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-t border-border/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6">Open Source & Learning</h2>
        <p className="text-lg text-muted-foreground mb-12">Commitment to continuous improvement and knowledge sharing.</p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {learningItems.map((item, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="flex items-center gap-2 p-3 bg-background border border-border/40 rounded-lg shadow-sm text-left">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
