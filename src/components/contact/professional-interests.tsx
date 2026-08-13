"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Network } from "lucide-react";

const interests = [
  "Application Security",
  "Security Operations",
  "Cloud Security",
  "Detection Engineering",
  "Incident Response",
  "Threat Hunting",
  "Security Automation",
  "AI Security",
  "Python Development",
  "Open Source Projects",
  "Technical Research"
];

export function ProfessionalInterests() {
  return (
    <AnimatedSection className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4 flex items-center justify-center gap-3">
          <Network className="w-8 h-8 text-primary" />
          Collaboration Interests
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10">I actively enjoy connecting with others in these specific domains.</p>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {interests.map((interest, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant}
              whileHover={{ scale: 1.06, y: -2 }}
              transition={{ duration: 0.2 }}
              className="px-5 py-2.5 bg-card/40 backdrop-blur-md border border-primary/20 hover:border-primary/60 hover:bg-primary/10 rounded-full text-sm font-medium text-foreground hover:text-primary transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(192,133,82,0.2)]"
            >
              {interest}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

