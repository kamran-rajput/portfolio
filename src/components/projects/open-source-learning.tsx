"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { CheckCircle2, Code } from "lucide-react";

const learningItems = [
  "Security Research",
  "PortSwigger Labs",
  "Cloud Security Practice",
  "Google Cybersecurity",
  "Google Cloud Security",
  "Hands-on Labs & CTFs",
  "Technical Documentation",
];

export function OpenSourceLearning() {
  return (
    <AnimatedSection className="py-20 bg-secondary/5 border-t border-border/30 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-3 text-foreground">
          Open Source & <span className="gradient-text glow-text">Learning</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-12">Commitment to continuous improvement, research, and knowledge sharing.</p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {learningItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant}
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 p-4 bg-card/30 backdrop-blur-md border border-primary/20 hover:border-primary/50 hover:bg-primary/5 rounded-xl shadow-sm hover:shadow-[0_0_20px_rgba(192,133,82,0.1)] transition-all duration-300 text-left group"
            >
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

