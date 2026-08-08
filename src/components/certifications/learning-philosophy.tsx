"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { GraduationCap, FlaskConical, Target, Library } from "lucide-react";

const principles = [
  { icon: FlaskConical, title: "Practical Application", desc: "Applying theoretical concepts immediately in labs to solidify understanding." },
  { icon: Target, title: "Continuous Improvement", desc: "Never stagnating. Technology evolves, and my skills evolve with it." },
  { icon: Library, title: "Research & Projects", desc: "Validating knowledge by building systems and dissecting architectures." },
  { icon: GraduationCap, title: "Lifelong Learning", desc: "Certifications are milestones, not destinations. The learning never stops." },
];

export function LearningPhilosophy() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6">Learning Philosophy</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
          Certifications are only one part of my professional development. They provide a structured framework, but true engineering capability is forged through hands-on experimentation, independent research, rigorous documentation, and practical projects.
        </p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {principles.map((p, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl border border-border/50 shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
