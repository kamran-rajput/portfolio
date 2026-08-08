"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

const interests = [
  "Application Security",
  "Security Operations",
  "Cloud Security",
  "Detection Engineering",
  "Incident Response",
  "Threat Hunting",
  "Security Automation",
  "AI Security",
  "Python Development",
  "Open Source Projects",
  "Technical Research"
];

export function ProfessionalInterests() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6 flex items-center justify-center">
          <Network className="w-8 h-8 mr-3 text-primary" />
          Collaboration Interests
        </h2>
        <p className="text-lg text-muted-foreground mb-12">I actively enjoy connecting with others in these specific domains.</p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {interests.map((interest, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant}
              className="px-6 py-3 bg-background border border-border/50 hover:border-primary/50 hover:bg-primary/5 rounded-full text-sm font-medium text-foreground transition-all cursor-default"
            >
              {interest}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
