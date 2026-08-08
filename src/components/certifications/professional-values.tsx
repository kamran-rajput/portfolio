"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

const values = [
  "Continuous Learning",
  "Hands-on Practice",
  "Research-Driven Development",
  "Security First",
  "Engineering Discipline",
  "Documentation",
  "Problem Solving",
  "Ethical Responsibility"
];

export function ProfessionalValues() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6 flex items-center justify-center">
          <Lightbulb className="w-8 h-8 mr-3 text-primary" />
          Professional Values
        </h2>
        <p className="text-lg text-muted-foreground mb-12">The foundational principles that guide my approach to continuous professional growth.</p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {values.map((val, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="px-6 py-3 bg-secondary/10 border border-border/50 rounded-full text-sm font-medium text-foreground hover:bg-secondary/30 transition-colors">
              {val}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
