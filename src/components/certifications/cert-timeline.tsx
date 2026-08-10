"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { 
  Server, 
  ShieldCheck, 
  Lock, 
  Cloud, 
  Activity,
  LucideIcon
} from "lucide-react";

interface Milestone {
  stage: string;
  title: string;
  desc: string;
  tags: string[];
  icon: LucideIcon;
  isPresent?: boolean;
}

const milestones: Milestone[] = [
  {
    stage: "Phase 01",
    title: "IT & Networking Foundations",
    desc: "Built foundational knowledge through university coursework and self-directed learning across networking, Linux, operating systems, databases, web technologies, and system administration.",
    tags: ["Networking", "Linux", "Operating Systems", "Databases", "Web Development", "System Administration"],
    icon: Server
  },
  {
    stage: "Phase 02",
    title: "Cybersecurity Foundations",
    desc: "Expanded into cybersecurity fundamentals including threats, vulnerabilities, security controls, risk management, cryptography, OSINT, network security, and security hardening.",
    tags: ["Cybersecurity Fundamentals", "Risk Management", "Network Security", "OSINT", "Cryptography", "Security Controls"],
    icon: ShieldCheck
  },
  {
    stage: "Phase 03",
    title: "Application Security",
    desc: "Developed practical web security skills through hands-on vulnerability testing and PortSwigger Web Security Academy labs.",
    tags: ["OWASP Top 10", "Burp Suite", "Authentication", "Authorization", "Session Security", "API Security"],
    icon: Lock
  },
  {
    stage: "Phase 04",
    title: "Cloud Security",
    desc: "Expanded into cloud security through Google Cloud training, focusing on identity, access control, RBAC, least privilege, and cloud security principles.",
    tags: ["Google Cloud", "IAM", "RBAC", "Least Privilege", "Cloud Security"],
    icon: Cloud
  },
  {
    stage: "Active Focus",
    title: "Present — Security Operations",
    desc: "Currently focusing on SOC and defensive security, developing practical skills in security monitoring, SIEM, threat detection, log analysis, and incident investigation.",
    tags: ["Wazuh", "Splunk", "SIEM", "Log Analysis", "Threat Detection", "Incident Investigation"],
    icon: Activity,
    isPresent: true
  }
];

export function CertTimeline() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Career Development Pathway
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Growth Timeline
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A progression from IT and networking foundations into hands-on cybersecurity, security operations, cloud security, and automation.
          </p>
        </div>
        
        {/* Timeline Items */}
        <div className="relative border-l border-border/50 ml-4 md:ml-32">
          {milestones.map((milestone, idx) => {
            const Icon = milestone.icon;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.1 }}
                className="mb-12 relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Dot with Active Pulsing Indicator */}
                <div className={`absolute left-[-11px] top-1.5 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                  milestone.isPresent 
                    ? "bg-primary ring-4 ring-primary/20 text-primary-foreground" 
                    : "bg-background border-2 border-primary/60 text-primary"
                }`}>
                  {milestone.isPresent ? (
                    <span className="w-2 h-2 rounded-full bg-primary-foreground animate-ping"></span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  )}
                </div>
                
                {/* Left Phase Badge (Desktop) */}
                <div className="hidden md:block absolute -left-32 top-0.5 w-24 text-right">
                  <span className={`text-xs font-mono font-bold uppercase ${
                    milestone.isPresent ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {milestone.stage}
                  </span>
                </div>

                {/* Card Body */}
                <div className={`glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                  milestone.isPresent 
                    ? "border-2 border-primary/40 shadow-lg ring-1 ring-primary/20" 
                    : "hover:border-primary/30"
                }`}>
                  {/* Mobile Phase Badge */}
                  <div className="block md:hidden mb-2">
                    <span className={`text-xs font-mono font-bold uppercase ${
                      milestone.isPresent ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {milestone.stage}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${
                      milestone.isPresent ? "bg-primary/20 text-primary" : "bg-secondary/40 text-muted-foreground"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {milestone.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {milestone.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {milestone.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className={`text-xs font-mono px-2.5 py-1 rounded-md ${
                          milestone.isPresent 
                            ? "bg-primary/10 text-foreground border border-primary/30 font-medium" 
                            : "glass-badge text-muted-foreground"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
}
