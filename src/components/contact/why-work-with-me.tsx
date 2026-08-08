"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { ShieldCheck, BookOpen, Wrench, MessageSquare, BrainCircuit } from "lucide-react";

const capabilities = [
  { icon: ShieldCheck, title: "Security-First Thinking", desc: "Building solutions that prioritize secure design and practical risk reduction." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Constantly improving through certifications, labs, research, and engineering projects." },
  { icon: Wrench, title: "Engineering Mindset", desc: "Approaching problems methodically with structured analysis and practical implementation." },
  { icon: MessageSquare, title: "Clear Communication", desc: "Documenting research, explaining technical concepts, and collaborating effectively." },
  { icon: BrainCircuit, title: "AI & Security", desc: "Combining cybersecurity with AI-powered automation to improve efficiency and workflows." },
];

export function WhyWorkWithMe() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">What I Bring</h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        >
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant} 
              className={`p-6 bg-background rounded-2xl border border-border/50 shadow-sm hover:border-primary/40 transition-colors ${idx === capabilities.length - 1 && capabilities.length % 3 !== 0 ? 'lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <cap.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
