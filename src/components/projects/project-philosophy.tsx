"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Settings, ShieldCheck, FileSearch, RefreshCcw } from "lucide-react";

const pillars = [
  { icon: Settings, title: "Structured Methodologies", desc: "Applying engineering rigor to security." },
  { icon: ShieldCheck, title: "Secure Engineering", desc: "Building security directly into the architecture." },
  { icon: FileSearch, title: "Research-Driven", desc: "Solving problems through empirical investigation." },
  { icon: RefreshCcw, title: "Continuous Documentation", desc: "Making knowledge accessible and reproducible." },
];

export function ProjectPhilosophy() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6">Engineering Philosophy</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          I approach cybersecurity not just as breaking systems, but as an engineering discipline. Every project is built on practical learning, security-first thinking, and a focus on measurable outcomes.
        </p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-background border border-border/50 flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(192,133,82,0.15)] transition-all">
                <pillar.icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
