"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Wrench, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  FileText, 
  Scale, 
  Compass,
  LucideIcon 
} from "lucide-react";

interface ValueItem {
  title: string;
  desc: string;
  icon: LucideIcon;
}

const values: ValueItem[] = [
  {
    title: "Continuous Learning",
    desc: "Stay current with evolving security technologies, threats, and defensive practices.",
    icon: BookOpen
  },
  {
    title: "Hands-on Practice",
    desc: "Turn concepts into practical skills through labs, projects, security challenges, and practical security environments.",
    icon: Wrench
  },
  {
    title: "Security-First Thinking",
    desc: "Consider security throughout the design, development, testing, and deployment process.",
    icon: ShieldCheck
  },
  {
    title: "Research & Curiosity",
    desc: "Investigate how systems work, how they can be attacked, and how they can be better protected.",
    icon: Search
  },
  {
    title: "Practical Problem Solving",
    desc: "Break complex security problems into manageable steps and focus on actionable solutions.",
    icon: CheckCircle2
  },
  {
    title: "Documentation",
    desc: "Document labs, findings, methodologies, and lessons learned to build reusable technical knowledge.",
    icon: FileText
  },
  {
    title: "Ethical Responsibility",
    desc: "Practice security research responsibly, respecting authorization, privacy, and responsible disclosure.",
    icon: Scale
  },
  {
    title: "Technical Discipline",
    desc: "Build reliable solutions through structured testing, careful analysis, and continuous improvement.",
    icon: Compass
  }
];

export function ProfessionalValues() {
  return (
    <AnimatedSection className="py-24 bg-secondary/10 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20 mb-4">
            <span className="text-xs font-mono tracking-wider text-primary uppercase">
              Core Principles
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Professional Values
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            The principles that guide how I learn, build, research, and approach cybersecurity.
          </p>
        </div>

        {/* 8-Card Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((val, idx) => {
            const Icon = val.icon;

            return (
              <motion.div 
                key={idx} 
                variants={fadeUpVariant} 
                className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {val.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </AnimatedSection>
  );
}
