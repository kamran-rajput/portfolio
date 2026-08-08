"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Layers } from "lucide-react";

const series = [
  { title: "OWASP Top 10 Deep Dive", articles: 10, current: 4, progress: 40 },
  { title: "Google Cybersecurity Notes", articles: 8, current: 8, progress: 100 },
  { title: "Cloud Security Journey", articles: 6, current: 2, progress: 33 },
  { title: "SOC Analyst Learning", articles: 5, current: 5, progress: 100 },
  { title: "Detection Engineering", articles: 4, current: 1, progress: 25 },
  { title: "Python Security Automation", articles: 7, current: 3, progress: 42 },
  { title: "Building AI Security Systems", articles: 3, current: 2, progress: 66 },
];

export function FeaturedSeries() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Technical Series</h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {series.map((s, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="p-6 bg-secondary/10 border border-border/40 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Layers className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-4 relative z-10 pr-12">{s.title}</h3>
              <div className="flex justify-between text-xs text-muted-foreground font-mono mb-2 relative z-10">
                <span>{s.current} / {s.articles} Articles</span>
                <span>{s.progress}%</span>
              </div>
              <Progress value={s.progress} className="h-1.5 relative z-10 bg-border/50" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
