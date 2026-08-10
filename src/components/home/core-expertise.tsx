"use client";

import { motion } from "framer-motion";
import { Activity, Lock, Globe, Cloud, Cog } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";

const expertises = [
  {
    title: "Security Operations",
    icon: Activity,
    description: "Analyzing security events, investigating suspicious activity, and strengthening defensive controls through hands-on SOC labs.",
    focus: ["SIEM & Log Analysis", "Threat Analysis", "Incident Investigation", "Network Monitoring", "Security Hardening"],
  },
  {
    title: "Application Security",
    icon: Lock,
    description: "Finding and understanding web application vulnerabilities through practical testing and security research.",
    focus: ["OWASP Top 10", "Authentication", "Authorization", "Session Security", "API Security", "Burp Suite"],
  },
  {
    title: "Network Security",
    icon: Globe,
    description: "Applying strong networking fundamentals to understand, monitor, and secure network environments.",
    focus: ["TCP/IP", "CCNA Networking", "Wireshark", "Nmap", "Network Hardening", "Traffic Analysis"],
  },
  {
    title: "Cloud Security",
    icon: Cloud,
    description: "Building a foundation in securing cloud environments, identities, and access controls.",
    focus: ["Google Cloud", "IAM", "RBAC", "Least Privilege", "Cloud Security Fundamentals"],
  },
  {
    title: "Security Automation",
    icon: Cog,
    description: "Using Python and automation concepts to improve repetitive security workflows and analysis.",
    focus: ["Python", "Security Automation", "AI/LLM Workflows", "n8n"],
  },
];

export function CoreExpertise() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Subtle radial gradient orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/[0.04] rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Core Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Hands-on cybersecurity work across security operations, application security, network security, and cloud security.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertises.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariant} 
              className={`h-full ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <GlassCard className="h-full p-0 flex flex-col justify-between" glow={false}>
                <div className="p-6">
                  {/* Glass icon container */}
                  <div className="w-12 h-12 rounded-xl glass-badge flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary drop-shadow-[0_0_6px_rgba(192,133,82,0.3)]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
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
