"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const recentArticles = [
  {
    category: "Security Operations",
    title: "Practical Incident Response Concepts",
    desc: "A structural approach to triage, containment, and recovery in enterprise environments.",
    readTime: "7 min",
    date: "Aug 02, 2026",
    difficulty: "Beginner",
    tags: ["IR", "SOC", "Blue Team"]
  },
  {
    category: "Networking",
    title: "Network Traffic Analysis with Wireshark",
    desc: "Isolating anomalous TCP streams and identifying data exfiltration signatures.",
    readTime: "14 min",
    date: "Jul 15, 2026",
    difficulty: "Intermediate",
    tags: ["PCAP", "Wireshark", "Networking"]
  },
  {
    category: "Cloud Security",
    title: "Zero Trust Fundamentals",
    desc: "Moving beyond the perimeter. Implementing 'never trust, always verify' architectures.",
    readTime: "9 min",
    date: "Jul 05, 2026",
    difficulty: "Beginner",
    tags: ["Zero Trust", "Architecture"]
  },
  {
    category: "Application Security",
    title: "Modern OWASP Top 10 Explained",
    desc: "Analyzing the shift from injection flaws to broken access control in modern web apps.",
    readTime: "11 min",
    date: "Jun 22, 2026",
    difficulty: "Beginner",
    tags: ["OWASP", "WebSec"]
  }
];

export function LatestResearch() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12">Latest Research</h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="space-y-6"
        >
          {recentArticles.map((article, idx) => (
            <motion.div key={idx} variants={fadeUpVariant}>
              <Link href="#" className="block group">
                <div className="p-6 glass-card rounded-2xl hover:border-primary/60 transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(192,133,82,0.18)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">{article.category}</span>
                      <span className="text-xs text-muted-foreground hidden sm:inline-flex items-center"><Clock className="w-3 h-3 mr-1" /> {article.readTime}</span>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">{article.date}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{article.desc}</p>
                  
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Read <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-border/50 rounded-md text-sm font-medium hover:bg-secondary/50 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
