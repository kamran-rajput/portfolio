"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import Link from "next/link";

const articles = [
  { title: "Modern Detection Engineering", category: "Security Operations", readTime: "5 min", date: "Oct 2026" },
  { title: "Cloud IAM Best Practices", category: "Cloud Security", readTime: "8 min", date: "Sep 2026" },
  { title: "Zero Trust Architecture", category: "Infrastructure", readTime: "6 min", date: "Aug 2026" },
  { title: "Authentication Security Flaws", category: "AppSec", readTime: "10 min", date: "Jul 2026" },
];

export function SecurityResearch() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-primary drop-shadow-[0_0_8px_rgba(192,133,82,0.3)]" />
            Security Research
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Technical insights and documentation.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {articles.map((article, index) => (
            <motion.div key={index} variants={fadeUpVariant}>
              <Link href="/blog" className="block focus-visible:ring-2 focus-visible:ring-primary rounded-xl outline-none">
                <div className="glass-card rounded-xl group cursor-pointer">
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-primary glass-badge px-2 py-0.5 rounded">{article.category}</span>
                        <span className="text-xs text-muted-foreground">{article.readTime} read</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{article.title}</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:drop-shadow-[0_0_6px_rgba(192,133,82,0.4)] transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-8 text-center">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 hover:drop-shadow-[0_0_8px_rgba(192,133,82,0.3)] transition-all underline-offset-4">
            View All Research <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
