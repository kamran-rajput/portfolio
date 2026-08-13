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
    <AnimatedSection className="py-20 bg-secondary/5 border-y border-border/30 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center text-foreground">
          What I <span className="gradient-text glow-text">Bring to the Table</span>
        </h2>
        
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
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`p-6 bg-card/40 backdrop-blur-md rounded-2xl border border-primary/20 shadow-sm hover:border-primary/50 hover:shadow-[0_0_25px_rgba(192,133,82,0.15)] transition-all duration-300 group ${idx === capabilities.length - 1 && capabilities.length % 3 !== 0 ? 'lg:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(192,133,82,0.4)] transition-all duration-300">
                <cap.icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

