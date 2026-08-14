"use client";

import { AnimatedSection } from "@/components/ui/animated-section";

const categories = [
  { name: "Application Security", count: 12 },
  { name: "Security Operations", count: 8 },
  { name: "Cloud Security", count: 6 },
  { name: "AI Security", count: 4 },
  { name: "Networking", count: 5 },
  { name: "Threat Detection", count: 7 },
  { name: "Incident Response", count: 3 },
  { name: "Security Automation", count: 9 },
  { name: "Linux", count: 4 },
  { name: "Python for Security", count: 6 },
  { name: "Research Notes", count: 15 },
];

export function ArticleCategories() {
  return (
    <AnimatedSection className="py-12 bg-secondary/5 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-primary text-primary-foreground">
            All Articles <span className="ml-1 opacity-70">(79)</span>
          </button>
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all glass-card text-foreground hover:border-primary/60 hover:bg-primary/10 shadow-sm"
            >
              {cat.name} <span className="ml-1 opacity-50">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
