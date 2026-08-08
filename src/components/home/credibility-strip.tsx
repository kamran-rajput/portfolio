"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";

const indicators = [
  "Google Cybersecurity Professional",
  "Google Cloud Security",
  "PortSwigger Web Security",
  "Hackviser Foundations",
  "Continuous Hands-on Labs",
  "Security Research",
];

export function CredibilityStrip() {
  return (
    <AnimatedSection className="py-12 border-y border-white/[0.04] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent -z-10 pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {indicators.map((indicator, index) => (
            <motion.div key={index} variants={fadeUpVariant}>
              <div className="glass-card rounded-xl h-full flex items-center justify-center text-center group cursor-default p-4">
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-all group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {indicator}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
