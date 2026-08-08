"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Beaker, Search, Edit3, Share2 } from "lucide-react";

const philosophyItems = [
  { icon: Beaker, title: "Learn by Doing", desc: "Every article is rooted in hands-on labs, engineering projects, or practical experimentation." },
  { icon: Search, title: "Research First", desc: "Investigating systems deeply to understand the 'how' and 'why' before drawing conclusions." },
  { icon: Edit3, title: "Document Experience", desc: "Transforming raw data and scattered notes into reproducible technical blueprints." },
  { icon: Share2, title: "Share Knowledge", desc: "Open-sourcing findings to contribute to the wider security engineering community." },
];

export function ResearchPhilosophy() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6">Research Philosophy</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          I believe that true understanding comes from building, breaking, and documenting systems. This blog is an archive of my continuous engineering mindset.
        </p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {philosophyItems.map((item, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="flex flex-col items-center text-center p-6 bg-background rounded-2xl border border-border/50 shadow-sm hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
