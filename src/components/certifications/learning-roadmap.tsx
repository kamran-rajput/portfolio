"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Compass, ChevronRight } from "lucide-react";

interface RoadmapSubCategory {
  title: string;
  items: string[];
}

interface RoadmapStage {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  status: "completed" | "current" | "future";
  categories: RoadmapSubCategory[];
}

const roadmapData: RoadmapStage[] = [
  {
    id: "completed",
    badge: "Stage 01",
    title: "Completed",
    subtitle: "Core foundations built through university coursework, certifications, and security labs.",
    status: "completed",
    categories: [
      {
        title: "Networking & Network Security",
        items: ["TCP/IP", "Network Protocols", "DNS", "DHCP", "Routing & Switching", "Network Security", "Firewalls", "Wireshark", "Nmap"]
      },
      {
        title: "Linux & Operating Systems",
        items: ["Linux", "Kali Linux", "Windows Fundamentals", "Command Line", "System Administration", "Processes", "Services", "Permissions"]
      },
      {
        title: "Cybersecurity Foundations",
        items: ["Security Fundamentals", "Threats & Vulnerabilities", "Security Controls", "Risk Management", "Incident Response Fundamentals", "Security Hardening", "Cryptography Fundamentals"]
      },
      {
        title: "Web Development Foundations",
        items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "PHP", "Client/Server Architecture", "APIs"]
      },
      {
        title: "Web Application Security",
        items: ["OWASP Top 10", "Authentication", "Authorization", "Session Security", "API Security", "Vulnerability Assessment", "Burp Suite", "PortSwigger Web Security Academy", "Hands-on Web Security Labs"]
      },
      {
        title: "Cloud Security Fundamentals",
        items: ["Google Cloud", "IAM", "RBAC", "Least Privilege", "Identity & Access Management", "Cloud Security Fundamentals"]
      },
      {
        title: "Security Risk & Governance",
        items: ["NIST Cybersecurity Framework", "NIST Risk Management Framework", "Security Controls", "Risk Assessment", "Asset Protection", "Risk Mitigation"]
      }
    ]
  },
  {
    id: "current",
    badge: "Stage 02 — Active Focus",
    title: "Current Focus",
    subtitle: "Active skill development in SOC operations, SIEM detection, and security automation.",
    status: "current",
    categories: [
      {
        title: "Security Operations / SOC",
        items: ["SIEM Fundamentals", "Security Monitoring", "Log Analysis", "Threat Detection", "Alert Investigation", "Incident Investigation", "Network Traffic Analysis"]
      },
      {
        title: "SIEM & Defensive Security",
        items: ["Wazuh", "Splunk", "SIEM Workflows", "Detection Concepts", "Security Event Analysis", "Monitoring & Visibility"]
      },
      {
        title: "Detection Engineering",
        items: ["Detection Logic", "Security Rules", "Log-Based Detection", "Alert Triage", "Detection Improvement"]
      },
      {
        title: "Python & Security Automation",
        items: ["Python for Security", "Security Automation", "Workflow Automation", "n8n", "Repetitive Task Automation"]
      },
      {
        title: "Practical Security Research",
        items: ["Security Labs", "CTF-Style Challenges", "Web Security Research", "OSINT", "Security Write-ups"]
      }
    ]
  },
  {
    id: "future",
    badge: "Stage 03",
    title: "Future Goals",
    subtitle: "Planned development areas for upcoming specialized security engineering growth.",
    status: "future",
    categories: [
      {
        title: "Microsoft Security",
        items: ["Microsoft Sentinel", "Microsoft Defender", "Azure Security", "Entra ID"]
      },
      {
        title: "Cloud Security",
        items: ["AWS Security", "Azure Security", "Cloud Security Engineering", "Cloud IAM", "Cloud Detection & Monitoring"]
      },
      {
        title: "Advanced SOC",
        items: ["Threat Hunting", "Advanced Detection Engineering", "Incident Response", "Digital Forensics Fundamentals", "Malware Analysis Fundamentals"]
      },
      {
        title: "Security Automation",
        items: ["Advanced Python Automation", "SOAR Concepts", "AI-Assisted Security Operations", "Security Workflow Automation"]
      }
    ]
  }
];

export function LearningRoadmap() {
  return (
    <AnimatedSection className="py-24 bg-secondary/10 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Technical Growth Path
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Learning Roadmap
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            A structured roadmap reflecting continuous technical growth from foundational IT knowledge to security operations, cloud security, and automation.
          </p>
        </div>

        {/* 3-Column Progressive Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          {roadmapData.map((stage) => {
            const isCompleted = stage.status === "completed";
            const isCurrent = stage.status === "current";
            const isFuture = stage.status === "future";

            return (
              <motion.div 
                key={stage.id} 
                variants={fadeUpVariant}
                className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col h-full ${
                  isCurrent 
                    ? "glass-card border-2 border-primary/50 shadow-xl ring-1 ring-primary/20 relative" 
                    : isCompleted 
                    ? "glass-card border border-border/50 shadow-sm"
                    : "glass-card border border-border/40 border-dashed opacity-85 hover:opacity-100"
                }`}
              >
                {/* Active Highlight Glow Line */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-t-2xl"></div>
                )}

                {/* Stage Header */}
                <div className="mb-6 border-b border-border/40 pb-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full font-bold uppercase ${
                      isCurrent 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : isCompleted
                        ? "glass-badge text-primary"
                        : "glass-badge text-muted-foreground"
                    }`}>
                      {stage.badge}
                    </span>

                    {isCompleted && (
                      <span className="inline-flex items-center text-xs font-semibold text-primary gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Verified
                      </span>
                    )}
                    {isCurrent && (
                      <span className="inline-flex items-center text-xs font-semibold text-primary gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Active
                      </span>
                    )}
                    {isFuture && (
                      <span className="inline-flex items-center text-xs font-mono text-muted-foreground gap-1">
                        <Compass className="w-3.5 h-3.5" /> Next Phase
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Sub-categories List */}
                <div className="space-y-6 flex-1">
                  {stage.categories.map((cat, cIdx) => (
                    <div key={cIdx} className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-foreground uppercase tracking-wider">
                        <ChevronRight className={`w-3.5 h-3.5 ${isCurrent ? "text-primary" : "text-muted-foreground"}`} />
                        <span>{cat.title}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pl-5">
                        {cat.items.map((item, iIdx) => (
                          <span 
                            key={iIdx} 
                            className={`text-xs font-mono px-2.5 py-1 rounded-md transition-colors ${
                              isCurrent 
                                ? "bg-primary/10 text-foreground border border-primary/30 font-medium" 
                                : isCompleted
                                ? "glass-badge text-foreground/90 border border-border/40"
                                : "bg-secondary/20 text-muted-foreground border border-border/30"
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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
