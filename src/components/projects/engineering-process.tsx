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
    <AnimatedSection className="py-20 bg-secondary/5 border-y border-border/30 overflow-hidden relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-3 text-foreground">
            Project <span className="gradient-text glow-text">Workflow</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">The structured lifecycle applied to every engineering initiative.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-3 relative"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-8 -z-10"></div>

          {processSteps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant} 
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col items-center text-center w-full lg:w-32 p-4 bg-card/40 backdrop-blur-md border border-primary/20 hover:border-primary/50 rounded-2xl shadow-sm hover:shadow-[0_0_20px_rgba(192,133,82,0.15)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-3.5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(192,133,82,0.4)] transition-all duration-300">
                <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{step.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed hidden lg:block">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

