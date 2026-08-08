"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Activity, Cloud, Bot } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";

const expertises = [
  {
    title: "Application Security",
    icon: ShieldAlert,
    focus: ["Authentication", "Authorization", "Session Security", "OWASP Top 10", "API Security"],
    description: "Identifying vulnerabilities and securing application code flows before they reach production.",
  },
  {
    title: "Security Operations",
    icon: Activity,
    focus: ["Threat Analysis", "Incident Investigation", "Network Monitoring", "Log Analysis", "Hardening"],
    description: "Monitoring environments, investigating anomalies, and responding rapidly to potential incidents.",
  },
  {
    title: "Cloud Security",
    icon: Cloud,
    focus: ["Google Cloud", "IAM", "RBAC", "Least Privilege", "Governance"],
    description: "Architecting secure boundaries and managing identities across cloud infrastructure.",
  },
  {
    title: "AI Security & Automation",
    icon: Bot,
    focus: ["Python", "AI Agents", "Security Automation", "RAG Systems", "Workflows"],
    description: "Leveraging LLMs and automation to scale threat detection and streamline security workflows.",
  },
];

export function CoreExpertise() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Subtle radial gradient orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/[0.03] rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Core Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">Engineering focused on measurable security outcomes.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {expertises.map((item, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="h-full">
              <GlassCard className="h-full p-0" glow={false}>
                <div className="p-6">
                  {/* Glass icon container */}
                  <div className="w-12 h-12 rounded-xl glass-badge flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary drop-shadow-[0_0_6px_rgba(37,99,235,0.3)]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                    {item.focus.map((focusItem, idx) => (
                      <span key={idx} className="text-xs font-mono text-muted-foreground glass-badge px-2.5 py-1 rounded-md">
                        {focusItem}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
