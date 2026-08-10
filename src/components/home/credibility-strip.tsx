"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Cloud, Globe, Cog } from "lucide-react";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";

const focusAreas = [
  { icon: Shield, title: "SOC & Security Operations", emoji: "🛡️" },
  { icon: Lock, title: "Web Application Security", emoji: "🔐" },
  { icon: Cloud, title: "Cloud Security", emoji: "☁️" },
  { icon: Globe, title: "Network Security", emoji: "🌐" },
  { icon: Cog, title: "Security Automation", emoji: "⚙️" },
];

export function CredibilityStrip() {
  return (
    <AnimatedSection className="py-12 border-y border-border/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent -z-10 pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-mono tracking-widest text-primary uppercase font-semibold">
            Current Specialization
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">
            Currently Focused On
          </h3>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {focusAreas.map((item, index) => (
            <motion.div key={index} variants={fadeUpVariant}>
              <div className="glass-card rounded-xl h-full flex items-center justify-center text-center group cursor-default p-4 hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center gap-2.5">
                  <span className="text-xl">{item.emoji}</span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
