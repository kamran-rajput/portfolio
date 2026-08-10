"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Terminal, 
  Code2, 
  Database, 
  Server, 
  KeyRound, 
  Lock, 
  Activity, 
  Cloud, 
  Cpu 
} from "lucide-react";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";

interface LearningStep {
  step: string;
  phase: string;
  title: string;
  icon: React.ElementType;
  topics: string[];
}

const learningSteps: LearningStep[] = [
  {
    step: "01",
    phase: "IT & Network Foundations",
    title: "Networking & Network Security",
    icon: Globe,
    topics: ["TCP/IP", "CCNA-level Networking", "Network Protocols", "Network Security", "Wireshark", "Nmap"],
  },
  {
    step: "02",
    phase: "IT & Network Foundations",
    title: "Operating Systems & Linux",
    icon: Terminal,
    topics: ["Linux Administration", "Kali Linux", "Windows Fundamentals", "OS Concepts", "System Administration"],
  },
  {
    step: "03",
    phase: "Systems & Web Architecture",
    title: "Web Development",
    icon: Code2,
    topics: ["HTML / CSS / JS", "React / Next.js", "Node.js", "PHP", "Web Architecture & Client-Server"],
  },
  {
    step: "04",
    phase: "Systems & Web Architecture",
    title: "Databases",
    icon: Database,
    topics: ["SQL", "Database Management Systems", "Relational Databases", "Queries & Aggregations"],
  },
  {
    step: "05",
    phase: "Systems & Web Architecture",
    title: "System & Network Administration",
    icon: Server,
    topics: ["Server Administration", "Apache / Nginx", "DNS & DHCP", "Network Services", "System Hardening"],
  },
  {
    step: "06",
    phase: "Systems & Web Architecture",
    title: "Active Directory & Windows Security",
    icon: KeyRound,
    topics: ["Active Directory Fundamentals", "Users, Groups & Permissions", "Group Policy", "Windows Authentication & Access Control"],
  },
  {
    step: "07",
    phase: "Security & SOC Operations",
    title: "Web Application Security",
    icon: Lock,
    topics: ["OWASP Top 10", "Vulnerability Assessment", "Auth & Session Security", "API Security", "Burp Suite", "PortSwigger Academy", "Hands-on Labs"],
  },
  {
    step: "08",
    phase: "Security & SOC Operations",
    title: "Security Operations / SOC",
    icon: Activity,
    topics: ["SOC Fundamentals", "SIEM Concepts", "Wazuh", "Splunk", "Log Analysis", "Threat Detection & IR", "Traffic Analysis"],
  },
  {
    step: "09",
    phase: "Cloud & Security Automation",
    title: "Cloud Security",
    icon: Cloud,
    topics: ["Google Cloud Fundamentals", "IAM & RBAC", "Least Privilege", "Cloud Security Principles"],
  },
  {
    step: "10",
    phase: "Cloud & Security Automation",
    title: "Security Automation & AI",
    icon: Cpu,
    topics: ["Python", "Security Automation", "n8n", "AI / LLM Workflows", "Workflow Optimization"],
  },
];

export function LearningJourney() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/[0.03] rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-primary uppercase font-semibold">
            Progressive Technical Path
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mt-1">
            Learning Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A solid technical foundation built through university coursework, hands-on security labs, practical projects, and continuous specialized training.
          </p>
          
          {/* Progression Overview Bar */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full glass-badge text-xs font-medium text-muted-foreground">
            <span className="text-foreground font-semibold">IT Foundations</span>
            <span>→</span>
            <span>Networking & Systems</span>
            <span>→</span>
            <span>Web & Databases</span>
            <span>→</span>
            <span>Security & SOC</span>
            <span>→</span>
            <span className="text-primary font-semibold">Cloud & Automation</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center timeline vertical guide line (MD screens and up) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />

          {/* Left timeline vertical guide line (Mobile screens) */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-5%" }}
            className="space-y-8"
          >
            {learningSteps.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div 
                  key={index}
                  variants={fadeUpVariant}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node dot / icon badge */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10 top-5 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full glass-badge border border-primary/40 flex items-center justify-center shadow-[0_0_12px_rgba(192,133,82,0.25)] bg-background">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Card Content container */}
                  <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${
                    isEven ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"
                  }`}>
                    <div className="glass-card p-6 rounded-2xl group hover:border-primary/40 transition-all duration-300 relative overflow-hidden">
                      {/* Top border accent highlight on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className={`flex items-center gap-2 mb-2 ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                        <span className="font-mono text-xs font-bold text-primary glass-badge px-2 py-0.5 rounded">
                          STEP {item.step}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground">
                          {item.phase}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <div className={`flex flex-wrap gap-1.5 ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                        {item.topics.map((topic, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="text-xs font-mono text-muted-foreground glass-badge px-2.5 py-1 rounded-md hover:text-foreground transition-colors"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
