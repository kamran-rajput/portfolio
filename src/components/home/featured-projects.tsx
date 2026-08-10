"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import Link from "next/link";

const projects = [
  {
    title: "AI Security Assistant",
    problem: "Security teams spend too much time retrieving organization-specific knowledge and triaging alerts manually.",
    approach: "Built a Retrieval-Augmented Generation (RAG) system using LLMs to index security documentation and automate initial triage steps.",
    impact: "Reduced median time-to-answer for tier 1 security queries and automated repetitive investigation workflows.",
    link: "/projects/ai-security-assistant",
  },
  {
    title: "Web Application Security Research",
    problem: "Applications frequently deploy with OWASP Top 10 vulnerabilities due to misconfigurations and lack of testing.",
    approach: "Performed structured vulnerability assessments against intentional targets focusing on authentication flaws, traversal, and injection.",
    impact: "Created reproducible testing methodologies and remediation blueprints for developers.",
    link: "/projects/web-security",
  },
  {
    title: "Network Traffic Analysis",
    problem: "Malicious activity often hides within encrypted traffic streams or misconfigured DNS records.",
    approach: "Conducted deep packet inspection and protocol analysis focusing on TLS handshakes, DNS tunneling, and HTTP behaviors.",
    impact: "Established baseline network profiles to improve anomaly detection capabilities.",
    link: "/projects/network-analysis",
  },
  {
    title: "Security Hardening Research",
    problem: "Default configurations leave excessive attack surfaces exposed on servers and cloud instances.",
    approach: "Researched and applied CIS benchmarks, firewall strategies, and encryption-at-rest policies.",
    impact: "Developed automated hardening scripts to reduce baseline risk profiles.",
    link: "/projects/hardening",
  },
];

export function FeaturedProjects() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Decorative gradient mesh background */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/[0.05] rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-400/[0.04] rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Practical solutions applied to real-world security challenges.</p>
          </div>
          <Link href="/projects" className="hidden md:inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 hover:drop-shadow-[0_0_8px_rgba(192,133,82,0.3)] transition-all underline-offset-4">
            View All Projects <ArrowUpRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="h-full">
              <Link href={project.link} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                <GlassCard className="h-full p-0 group" glow={false}>
                  <div className="p-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                    </h3>
                    
                    <div className="space-y-4 flex-1">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Problem</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
                      </div>
                      
                      {/* Revealed on hover on desktop, always visible on mobile */}
                      <div className="md:opacity-0 md:h-0 md:-translate-y-2 overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:translate-y-0 transition-all duration-300 space-y-4">
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1 pt-2 border-t border-white/[0.06]">Approach</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">{project.approach}</p>
                        </div>
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Security Impact</h4>
                          <p className="text-sm text-foreground/80 leading-relaxed font-medium">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
