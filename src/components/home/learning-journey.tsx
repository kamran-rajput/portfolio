"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

const timeline = [
  "Networking",
  "Linux",
  "Web Application Security",
  "Cloud Security",
  "Google Cybersecurity",
  "Application Security",
  "Security Operations",
  "AI Security & Automation",
];

export function LearningJourney() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02] -z-10 pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-center">Learning Journey</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Gradient timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
          
          <div className="space-y-12">
            {timeline.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  {/* Glass timeline dot with pulse glow */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 glass-badge border border-primary/40 shadow-[0_0_8px_rgba(37,99,235,0.3)]"
                    style={{ animation: `pulse-glow ${3 + index * 0.5}s ease-in-out infinite` }}
                  >
                    <div className="absolute inset-1 rounded-full bg-primary/60" />
                  </div>
                  
                  {/* Content Container */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="glass-card inline-block p-4 rounded-lg group cursor-default">
                      <span className="font-mono text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{step}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
