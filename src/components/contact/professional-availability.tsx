"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const roles = [
  "SOC Analyst Roles",
  "Security Operations Positions",
  "Cloud Security Opportunities",
  "Cybersecurity Internships",
  "Freelance Security Projects",
  "Security Research Collaborations",
  "Open Source Collaboration",
  "Technical Networking"
];

export function ProfessionalAvailability() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-bold tracking-wider text-green-500 uppercase">
            Available & Open To
          </span>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {roles.map((role, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant}
              className="flex items-center gap-3 p-4 bg-secondary/10 border border-border/40 rounded-xl hover:border-primary/30 hover:bg-background transition-colors text-left"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
