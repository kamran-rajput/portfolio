"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

const categories = [
  { name: "Application Security", count: 4 },
  { name: "Security Operations", count: 3 },
  { name: "Cloud Security", count: 2 },
  { name: "Network Security", count: 2 },
  { name: "AI Security", count: 3 },
  { name: "Automation", count: 4 },
  { name: "Research", count: 5 },
];

export function ProjectCategories() {
  return (
    <AnimatedSection className="py-10" id="featured-projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-gradient-to-r from-primary via-amber-600 to-primary bg-[length:200%_auto] text-primary-foreground shadow-[0_0_20px_rgba(192,133,82,0.3)] cursor-pointer"
          >
            All Projects <span className="ml-1 opacity-80">(23)</span>
          </motion.button>
          {categories.map((cat, idx) => (
            <motion.button 
              key={idx}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-card/40 backdrop-blur-md text-foreground hover:text-primary border border-primary/20 hover:border-primary/60 hover:bg-primary/10 shadow-sm hover:shadow-[0_0_15px_rgba(192,133,82,0.15)] cursor-pointer"
            >
              {cat.name} <span className="ml-1 text-muted-foreground opacity-70">({cat.count})</span>
            </motion.button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

