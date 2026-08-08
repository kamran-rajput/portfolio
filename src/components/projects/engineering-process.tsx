"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Search, PenTool, Layers, Code2, ShieldAlert, BookText, ArrowRightCircle } from "lucide-react";

const processSteps = [
  { icon: Search, name: "Research", desc: "Threat modeling & feasibility analysis" },
  { icon: PenTool, name: "Planning", desc: "Defining objectives & security requirements" },
  { icon: Layers, name: "Architecture", desc: "Designing secure, scalable boundaries" },
  { icon: Code2, name: "Implementation", desc: "Development with security best practices" },
  { icon: ShieldAlert, name: "Testing", desc: "Automated & manual security assessments" },
  { icon: BookText, name: "Documentation", desc: "Creating reproducible technical blueprints" },
  { icon: ArrowRightCircle, name: "Lessons Learned", desc: "Iterating based on empirical results" },
];

export function EngineeringProcess() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">Project Workflow</h2>
          <p className="text-lg text-muted-foreground">The structured lifecycle applied to every engineering initiative.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border/50 -translate-y-8 -z-10"></div>

          {processSteps.map((step, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="flex flex-col items-center text-center w-full lg:w-32 group">
              <div className="w-16 h-16 bg-background border border-border/50 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors relative z-10">
                <step.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-1">{step.name}</h4>
              <p className="text-xs text-muted-foreground hidden lg:block leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
