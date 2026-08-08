"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const domains = [
  {
    name: "Application Security",
    topics: ["Authentication", "Authorization", "Session Security", "OWASP Top 10", "API Security"]
  },
  {
    name: "Security Operations",
    topics: ["Threat Detection", "Incident Analysis", "Security Monitoring", "Log Analysis", "Security Hardening"]
  },
  {
    name: "Cloud Security",
    topics: ["IAM", "RBAC", "Least Privilege", "Identity Management", "Cloud Governance"]
  },
  {
    name: "Networking",
    topics: ["TCP/IP", "DNS", "DHCP", "Routing", "Switching", "Firewalls", "Network Protocols"]
  },
  {
    name: "Operating Systems",
    topics: ["Linux", "Windows", "Kali Linux", "Command Line", "Services", "Permissions", "Processes"]
  },
  {
    name: "Cryptography",
    topics: ["Hash Functions", "Password Security", "MD5", "SHA", "John the Ripper Concepts"]
  },
  {
    name: "OSINT",
    topics: ["Information Gathering", "Metadata Analysis", "Search Operators", "Open Source Intelligence"]
  }
];

export function KnowledgeAreas() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">Knowledge Domains</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Categorized technical capabilities, focusing on fundamental security concepts rather than just individual tools.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {domains.map((domain, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="p-6 bg-secondary/5 rounded-xl border border-border/40 hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-bold text-foreground mb-4">{domain.name}</h3>
              <div className="flex flex-wrap gap-2">
                {domain.topics.map((topic, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-muted-foreground bg-background border border-border/50 px-2 py-1 rounded">
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
