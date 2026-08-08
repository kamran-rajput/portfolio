"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";

const capabilities = [
  {
    title: "Secure Applications",
    outcome: "Identify and analyze application security vulnerabilities using structured methodologies based on modern security standards."
  },
  {
    title: "Threat Investigation",
    outcome: "Analyze logs, network traffic, and security events to understand attacker behavior and improve defensive visibility."
  },
  {
    title: "Secure Cloud Infrastructure",
    outcome: "Apply cloud security principles including identity management, least privilege, and secure access control."
  },
  {
    title: "Security Automation",
    outcome: "Develop intelligent workflows using Python and AI to automate repetitive security operations."
  }
];

export function ProfessionalCapabilities() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Professional Capabilities</h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {capabilities.map((cap, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariant} 
              className="group relative glass-card rounded-2xl p-6 flex gap-4 overflow-hidden"
            >
              {/* Left gradient accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full glass-badge flex items-center justify-center border border-primary/20 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.3)] transition-shadow">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{cap.outcome}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
