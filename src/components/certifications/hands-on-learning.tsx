"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Activity, 
  Globe, 
  Cloud, 
  FileText, 
  Cpu,
  LucideIcon
} from "lucide-react";

interface LabPractice {
  title: string;
  desc: string;
  tags: string[];
  icon: LucideIcon;
}

const labs: LabPractice[] = [
  {
    title: "Web Security Labs",
    desc: "Practical vulnerability assessment and exploitation through PortSwigger Web Security Academy and controlled security labs.",
    tags: ["Web Application Security", "Burp Suite", "OWASP Top 10", "Authentication", "Authorization", "Session Security"],
    icon: ShieldAlert
  },
  {
    title: "Security Operations Labs",
    desc: "Building practical SOC capabilities through defensive security labs and security monitoring exercises.",
    tags: ["Wazuh", "Splunk", "SIEM", "Log Analysis", "Threat Detection", "Incident Investigation"],
    icon: Activity
  },
  {
    title: "Network Security Practice",
    desc: "Analyzing network behavior and strengthening defensive understanding through practical networking and security exercises.",
    tags: ["Wireshark", "Nmap", "TCP/IP", "Traffic Analysis", "Network Hardening"],
    icon: Globe
  },
  {
    title: "Cloud Security Practice",
    desc: "Applying cloud security principles through Google Cloud security training and practical exercises.",
    tags: ["IAM", "RBAC", "Least Privilege", "Identity Management", "Cloud Security"],
    icon: Cloud
  },
  {
    title: "Security Research & Documentation",
    desc: "Documenting security learning, labs, findings, and technical research through structured write-ups and portfolio projects.",
    tags: ["Security Research", "Technical Documentation", "Lab Write-ups", "Knowledge Sharing"],
    icon: FileText
  },
  {
    title: "Security Automation",
    desc: "Developing automation concepts using Python and workflow automation to reduce repetitive security tasks.",
    tags: ["Python", "n8n", "Security Automation", "AI-assisted Workflows"],
    icon: Cpu
  }
];

export function HandsOnLearning() {
  return (
    <AnimatedSection className="py-24 bg-secondary/10 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Applied Capabilities
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Hands-on Learning
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Certifications demonstrate structured learning. Hands-on laboratories demonstrate the ability to apply that knowledge.
          </p>
        </div>

        {/* 6-Card Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {labs.map((lab, idx) => {
            const Icon = lab.icon;

            return (
              <motion.div 
                key={idx}
                variants={fadeUpVariant}
                className="glass-card rounded-2xl p-6 sm:p-7 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {lab.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {lab.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/30 flex flex-wrap gap-1.5">
                  {lab.tags.map((tag, tIdx) => (
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
