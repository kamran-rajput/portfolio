"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Settings, ShieldCheck, FileSearch, RefreshCcw } from "lucide-react";

const pillars = [
  { icon: Settings, title: "Structured Methodologies", desc: "Applying engineering rigor to practical security posture." },
  { icon: ShieldCheck, title: "Secure Engineering", desc: "Building security directly into architecture and workflows." },
  { icon: FileSearch, title: "Research-Driven", desc: "Solving complex problems through empirical investigation." },
  { icon: RefreshCcw, title: "Continuous Documentation", desc: "Making technical knowledge accessible and reproducible." },
];

export function ProjectPhilosophy() {
  return (
    <AnimatedSection className="py-20 bg-secondary/5 border-y border-border/30 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">
          Engineering <span className="gradient-text glow-text">Philosophy</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
          I approach cybersecurity as a rigorous engineering discipline. Every project is built on practical learning, security-first thinking, and a focus on measurable risk reduction.
        </p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-6 glass-card rounded-2xl shadow-md hover:border-primary/50 hover:shadow-[0_0_30px_rgba(192,133,82,0.2)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(192,133,82,0.4)] transition-all duration-300">
                <pillar.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transform group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

