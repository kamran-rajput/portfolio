"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { FileSearch, Server, Shield, BrainCircuit } from "lucide-react";

const labs = [
  { icon: Shield, name: "PortSwigger Web Security Academy", type: "Web Security" },
  { icon: Server, name: "Network Traffic Analysis", type: "Infrastructure" },
  { icon: Shield, name: "Security Hardening Research", type: "Defensive Security" },
  { icon: Server, name: "Cloud Security Practice", type: "Cloud Identity" },
  { icon: FileSearch, name: "Web Security Labs", type: "Application Security" },
  { icon: BrainCircuit, name: "AI Security Projects", type: "Automation" },
  { icon: FileSearch, name: "Security Documentation", type: "Engineering" },
];

export function HandsOnLearning() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-6">Hands-on Learning</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Certifications provide the map, but hands-on laboratories provide the experience. 
          Every credential is fundamentally supported by practical execution.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {labs.map((lab, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 bg-background border border-border/50 rounded-lg shadow-sm hover:border-primary/40 transition-colors"
            >
              <lab.icon className="w-5 h-5 text-primary/70" />
              <div className="text-left">
                <p className="text-sm font-bold text-foreground leading-tight">{lab.name}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{lab.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
