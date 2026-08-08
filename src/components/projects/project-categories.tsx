"use client";

import { useState } from "react";
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
    <AnimatedSection className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-primary text-primary-foreground">
            All Projects <span className="ml-1 opacity-70">(23)</span>
          </button>
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-border/50 hover:border-border"
            >
              {cat.name} <span className="ml-1 opacity-50">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
