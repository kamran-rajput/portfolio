"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Activity, 
  Globe, 
  Terminal, 
  Cloud, 
  KeyRound, 
  Server, 
  Database, 
  Wrench,
  LucideIcon
} from "lucide-react";

interface KnowledgeDomain {
  name: string;
  description: string;
  icon: LucideIcon;
  topics: string[];
}

const domains: KnowledgeDomain[] = [
  {
    name: "Operating Systems",
    description: "Understanding operating-system behavior, administration, and security fundamentals.",
    icon: Terminal,
    topics: ["Linux", "Windows", "Kali Linux", "Command Line", "Processes", "Services", "Permissions", "System Administration"]
  },
  {
    name: "Networking",
    description: "Strong networking fundamentals supporting security analysis and troubleshooting.",
    icon: Globe,
    topics: ["TCP/IP", "DNS", "DHCP", "Routing", "Switching", "Firewalls", "Network Protocols", "Traffic Analysis"]
  },
  {
    name: "Databases",
    description: "Technical foundation supporting application and security analysis.",
    icon: Database,
    topics: ["SQL", "Relational Databases", "DBMS", "Queries", "Joins", "Aggregation", "Database Security Fundamentals"]
  },
  {
    name: "Systems & Infrastructure",
    description: "Foundational knowledge developed through IT and university coursework.",
    icon: Server,
    topics: ["System Administration", "Servers", "Apache", "Nginx", "DNS", "DHCP", "Network Services", "System Hardening"]
  },
  {
    name: "Security Tools & Techniques",
    description: "Hands-on tools used across web security testing, network analysis, and security labs.",
    icon: Wrench,
    topics: ["Burp Suite", "Wireshark", "Nmap", "Wazuh", "Splunk", "John the Ripper", "PortSwigger Academy"]
  },
  {
    name: "Security Operations",
    description: "Understanding how security teams monitor environments, investigate events, and respond to threats.",
    icon: Activity,
    topics: ["Threat Detection", "Security Monitoring", "Log Analysis", "Alert Triage", "Incident Investigation", "Security Hardening", "SIEM"]
  },
  {
    name: "Cryptography",
    description: "Understanding fundamental cryptographic concepts used to protect systems and data.",
    icon: KeyRound,
    topics: ["Hash Functions", "Password Security", "MD5", "SHA", "Encryption", "Digital Signatures", "PKI"]
  },
  {
    name: "Cloud Security",
    description: "Foundational knowledge of identity, access, and security controls in cloud environments.",
    icon: Cloud,
    topics: ["IAM", "RBAC", "Least Privilege", "Identity Management", "Access Control", "Cloud Governance", "Google Cloud"]
  },
  {
    name: "Application Security",
    description: "Understanding and assessing common web application security weaknesses.",
    icon: ShieldAlert,
    topics: ["Authentication", "Authorization", "Session Security", "OWASP Top 10", "API Security", "Input Validation", "Access Control"]
  }
];

export function KnowledgeAreas() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Capability Map
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Knowledge Domains
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Structured technical capabilities focused on core domain principles, system behavior, and practical security methodologies.
          </p>
        </div>

        {/* 3-Column Domain Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {domains.map((domain, idx) => {
            const Icon = domain.icon;

            return (
              <motion.div 
                key={idx} 
                variants={fadeUpVariant} 
                className="glass-card rounded-2xl p-6 sm:p-7 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {domain.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                    {domain.description}
                  </p>
                </div>

                {/* Topics Tag List */}
                <div className="pt-4 border-t border-border/30 flex flex-wrap gap-1.5">
                  {domain.topics.map((topic, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-mono text-muted-foreground glass-badge px-2.5 py-1 rounded-md group-hover:border-primary/20 transition-colors"
                    >
                      {topic}
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
