"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed, Clock } from "lucide-react";

export function LearningRoadmap() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Learning Roadmap</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Completed */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="p-6 bg-background rounded-2xl border border-border/50 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Completed</h3>
            </div>
            <ul className="space-y-3">
              {["Networking", "Linux", "Cybersecurity Foundations", "Web Security", "Cloud Security Fundamentals", "Google Cybersecurity", "Google Cloud Security"].map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-muted-foreground">
                  <span className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Current Focus */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-primary/5 rounded-2xl border border-primary/20 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Current Focus</h3>
            </div>
            <ul className="space-y-3">
              {["Security Operations", "Threat Detection", "Security Monitoring", "Incident Response", "Detection Engineering", "Python Automation"].map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-foreground font-medium">
                  <span className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0 animate-pulse"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Future Goals */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-background rounded-2xl border border-border/50 border-dashed shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <CircleDashed className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-bold text-foreground">Future Goals</h3>
            </div>
            <ul className="space-y-3">
              {["Microsoft Sentinel", "Splunk", "Threat Hunting", "AWS Security", "Azure Security", "Cloud Security Engineering", "Security Automation"].map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-muted-foreground opacity-70">
                  <span className="mr-2 mt-1 w-1.5 h-1.5 rounded-full border border-muted-foreground shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
