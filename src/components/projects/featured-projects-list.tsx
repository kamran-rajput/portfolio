"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Activity, FolderGit2 } from "lucide-react";
import Link from "next/link";

const featured = [
  {
    title: "AI Security Assistant",
    category: "AI Security",
    overview: "An AI-powered cybersecurity assistant that retrieves organization-specific security knowledge using Retrieval-Augmented Generation (RAG), answers technical questions, and automates repetitive workflows.",
    problem: "Security documentation is often difficult to search, fragmented, and time-consuming to access.",
    objective: "Improve security knowledge accessibility through intelligent semantic search and conversational AI.",
    features: ["RAG Architecture", "Semantic Search", "Knowledge Base", "Modular Architecture"],
    impact: "Reduced median time-to-answer for tier 1 security queries.",
    tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
    status: "Active Development",
    readTime: "8 min",
    link: "/projects/ai-security-assistant"
  },
  {
    title: "Web Application Security Research",
    category: "Application Security",
    overview: "Hands-on vulnerability assessments against intentionally vulnerable web applications using structured security testing methodologies.",
    problem: "Applications frequently deploy with OWASP Top 10 vulnerabilities due to misconfigurations.",
    objective: "Develop practical experience identifying, understanding, documenting, and mitigating modern web vulnerabilities.",
    features: ["Auth Testing", "Session Management", "Injection Flaws", "Access Control"],
    impact: "Understanding attack paths and producing actionable defensive recommendations.",
    tech: ["Burp Suite", "OWASP ZAP", "Python", "Docker"],
    status: "Completed",
    readTime: "12 min",
    link: "/projects/web-security-research"
  },
  {
    title: "Network Traffic Analysis",
    category: "Network Security",
    overview: "Analysis of network communications to understand protocols, detect anomalies, and investigate security-related events.",
    problem: "Malicious activity often hides within encrypted traffic streams or misconfigured DNS records.",
    objective: "Strengthen incident analysis and network visibility skills.",
    features: ["TLS Analysis", "DNS Inspection", "HTTP Behaviors", "Packet Captures"],
    impact: "Established baseline network profiles to improve anomaly detection capabilities.",
    tech: ["Wireshark", "Zeek", "Suricata", "tcpdump"],
    status: "Completed",
    readTime: "6 min",
    link: "/projects/network-traffic-analysis"
  },
  {
    title: "Security Hardening Research",
    category: "Defensive Security",
    overview: "Research focused on reducing attack surfaces through secure configurations and hardening best practices.",
    problem: "Default configurations leave excessive attack surfaces exposed on servers and cloud instances.",
    objective: "Understand how defensive security improves organizational resilience.",
    features: ["Patch Management", "Firewall Rules", "Encryption", "Network Segmentation"],
    impact: "Developed automated hardening scripts to reduce baseline risk profiles.",
    tech: ["Linux", "Ansible", "Bash", "CIS Benchmarks"],
    status: "Active Maintenance",
    readTime: "10 min",
    link: "/projects/security-hardening"
  }
];

export function FeaturedProjectsList() {
  return (
    <AnimatedSection className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-foreground">
          Featured <span className="gradient-text glow-text">Engineering Work</span>
        </h2>
        
        <div className="space-y-12">
          {featured.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="glass-card hover:border-primary/50 transition-all duration-300 group overflow-hidden shadow-md hover:shadow-[0_0_40px_rgba(192,133,82,0.2)] rounded-2xl relative">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Column: Metadata & Core Info */}
                    <div className="p-8 lg:col-span-5 bg-primary/5 border-b lg:border-b-0 lg:border-r border-primary/20 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 backdrop-blur-md px-3 py-1 font-mono text-xs">
                            {project.category}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground font-mono">
                            <Clock className="w-3.5 h-3.5 mr-1 text-primary/70" /> {project.readTime}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.overview}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center text-xs text-muted-foreground font-medium">
                          <Activity className="w-4 h-4 mr-2 text-primary" /> 
                          Status: <span className="ml-1 text-foreground font-semibold">{project.status}</span>
                        </div>
                        <Link 
                          href={project.link} 
                          className="inline-flex items-center justify-center w-full py-3 px-5 bg-gradient-to-r from-primary via-amber-600 to-primary bg-[length:200%_auto] text-primary-foreground font-semibold text-sm rounded-xl shadow-[0_0_20px_rgba(192,133,82,0.2)] hover:shadow-[0_0_30px_rgba(192,133,82,0.4)] transition-all duration-300 relative overflow-hidden group/btn cursor-pointer"
                        >
                          <span className="flex items-center gap-2 relative z-10">
                            View Case Study <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Deep Dive */}
                    <div className="p-8 lg:col-span-7 flex flex-col justify-center space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Business Problem</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Security Objective</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{project.objective}</p>
                        </div>
                      </div>

                      <div className="border-t border-primary/15 pt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Security Impact</h4>
                        <p className="text-sm text-foreground/90 font-medium leading-relaxed">{project.impact}</p>
                      </div>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {project.tech.map((tech, tIdx) => (
                          <span key={tIdx} className="text-xs font-mono text-muted-foreground bg-primary/5 border border-primary/20 hover:border-primary/40 px-2.5 py-1 rounded-md transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

