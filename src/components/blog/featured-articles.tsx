"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar, BarChart } from "lucide-react";
import Link from "next/link";

const featuredArticles = [
  {
    title: "Understanding Authentication Security",
    category: "Application Security",
    summary: "A deep dive into modern authentication flows, common vulnerabilities like session fixation, and how to properly secure auth endpoints.",
    difficulty: "Intermediate",
    readTime: "8 min read",
    date: "Aug 15, 2026",
    link: "#"
  },
  {
    title: "Building AI Security Assistants with RAG",
    category: "AI Security",
    summary: "How to engineer a Retrieval-Augmented Generation pipeline to parse and query internal security documentation securely.",
    difficulty: "Advanced",
    readTime: "12 min read",
    date: "Jul 28, 2026",
    link: "#"
  },
  {
    title: "Cloud IAM Best Practices",
    category: "Cloud Security",
    summary: "Implementing least privilege at scale across Google Cloud and AWS. Practical examples of defining robust RBAC policies.",
    difficulty: "Intermediate",
    readTime: "10 min read",
    date: "Jun 10, 2026",
    link: "#"
  }
];

export function FeaturedArticles() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12">Featured Articles</h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {featuredArticles.map((article, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="flex h-full">
              <Card className="bg-background border-border/40 hover:border-primary/40 transition-all duration-300 group overflow-hidden flex flex-col h-full w-full">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">{article.category}</Badge>
                      <div className="flex items-center text-xs text-muted-foreground font-mono">
                        <Clock className="w-3 h-3 mr-1" /> {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{article.summary}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-6 pb-6 border-b border-border/30">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> {article.date}
                      </div>
                      <div className="flex items-center">
                        <BarChart className="w-3 h-3 mr-1" /> {article.difficulty}
                      </div>
                    </div>
                    
                    <Link href={article.link} className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors w-full justify-between">
                      Read Article <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
