"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { 
  Zap, 
  Activity, 
  Search, 
  Crosshair, 
  Shield, 
  Cloud, 
  Cpu, 
  AlertTriangle,
  LucideIcon
} from "lucide-react";

interface FocusArea {
  title: string;
  tags: string[];
  icon: LucideIcon;
}

const focusAreas: FocusArea[] = [
  {
    title: "Security Operations",
    tags: ["SIEM", "Security Monitoring", "Alert Triage", "Log Analysis", "Incident Investigation"],
    icon: Activity
  },
  {
    title: "Detection Engineering",
    tags: ["Detection Logic", "Security Rules", "Alert Development", "Detection Improvement"],
    icon: Search
  },
  {
    title: "Threat Hunting",
    tags: ["Threat Intelligence", "IOC Analysis", "Hypothesis-driven Hunting", "Behavioral Detection"],
    icon: Crosshair
  },
  {
    title: "Security Platforms",
    tags: ["Wazuh", "Splunk", "Microsoft Sentinel"],
    icon: Shield
  },
  {
    title: "Cloud Security",
    tags: ["AWS Security", "Azure Security", "Cloud IAM", "Cloud Monitoring"],
    icon: Cloud
  },
  {
    title: "Security Automation",
    tags: ["Python", "n8n", "SOAR Concepts", "AI-assisted Security Workflows"],
    icon: Cpu
  },
  {
    title: "Incident Response",
    tags: ["Incident Analysis", "Containment Concepts", "Investigation", "Security Documentation"],
    icon: AlertTriangle
  }
];

export function ContinuousDevelopment() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Active Evolution
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Continuous Development
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Technology changes constantly. My current development focuses on building deeper defensive security capabilities and preparing for real-world SOC environments.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {focusAreas.map((area, idx) => {
            const Icon = area.icon;

            return (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/30">
                  {area.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-mono text-muted-foreground glass-badge px-2.5 py-1 rounded-md group-hover:border-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </AnimatedSection>
  );
}
