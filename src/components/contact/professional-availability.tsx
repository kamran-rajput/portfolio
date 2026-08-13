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
    <AnimatedSection className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2.5 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/25 mb-10 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-500 uppercase">
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
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3.5 p-4 bg-card/30 backdrop-blur-md border border-border/50 hover:border-primary/40 hover:bg-primary/5 rounded-xl transition-all duration-300 text-left group shadow-sm hover:shadow-[0_0_20px_rgba(192,133,82,0.1)]"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

