"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { SocialLinksCta } from "@/components/social-links-cta";

const roles = [
  "Security Operations",
  "Cybersecurity Internships",
  "Cloud Security",
  "Security Research",
];

export function ContactSection() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Floating particles */}
      <FloatingParticles count={12} />

      {/* Multiple gradient orbs for rich glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-primary/[0.08] blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-400/[0.05] blur-[80px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-56 h-56 bg-primary/[0.04] blur-[80px] -z-10 rounded-full pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          <span className="gradient-text">Let&apos;s Secure the Future</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Currently open to new opportunities, collaborations, and professional networking.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {roles.map((role, idx) => (
            <motion.span 
              key={idx} 
              className="px-4 py-2 glass-badge rounded-full text-sm font-medium text-foreground shimmer-overlay"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {role}
            </motion.span>
          ))}
        </div>

        <SocialLinksCta />
      </div>
    </AnimatedSection>
  );
}
