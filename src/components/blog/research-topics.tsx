"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const topics = [
  {
    name: "Application Security",
    items: ["Authentication", "Authorization", "Sessions", "OWASP", "API Security"]
  },
  {
    name: "Security Operations",
    items: ["Monitoring", "Incident Analysis", "Threat Detection", "SOC", "Detection Engineering"]
  },
  {
    name: "Cloud Security",
    items: ["IAM", "RBAC", "Least Privilege", "Cloud Governance", "Identity"]
  },
  {
    name: "AI Security",
    items: ["RAG", "LLM Security", "Prompt Security", "Knowledge Retrieval", "Security Automation"]
  },
  {
    name: "Networking",
    items: ["Protocols", "DNS", "HTTP", "TLS", "Traffic Analysis"]
  },
  {
    name: "Security Engineering",
    items: ["Architecture", "Secure Design", "Hardening", "Automation", "Infrastructure"]
  }
];

export function ResearchTopics() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">Research Topics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Major knowledge domains explored through detailed technical documentation.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topics.map((topic, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="p-6 bg-background rounded-2xl border border-border/40 hover:border-primary/40 hover:shadow-md transition-all group">
              <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{topic.name}</h3>
              <ul className="space-y-2">
                {topic.items.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2 group-hover:bg-primary transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
