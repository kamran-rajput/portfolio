"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "Networking & System Administration",
    desc: "Established core understanding of TCP/IP, Linux environments, and fundamental IT infrastructure."
  },
  {
    year: "2023",
    title: "Hackviser Cybersecurity Foundations",
    desc: "Began specialized focus on defensive security, OSINT, and foundational penetration testing concepts."
  },
  {
    year: "2024",
    title: "Google Cybersecurity Professional",
    desc: "Formalized knowledge in Security Operations, incident response, and risk management."
  },
  {
    year: "2024",
    title: "Google Cloud Security Principles",
    desc: "Expanded into modern infrastructure with IAM, cloud governance, and secure cloud architecture."
  },
  {
    year: "Present",
    title: "AI Security Automation & Detection Engineering",
    desc: "Applying Python and LLMs to automate security workflows and building advanced detection systems."
  }
];

export function CertTimeline() {
  return (
    <AnimatedSection className="py-24 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-16 text-center">Growth Timeline</h2>
        
        <div className="relative border-l border-border/50 ml-4 md:ml-0 md:left-1/2 md:-translate-x-[0.5px]">
          {milestones.map((milestone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.1 }}
              className={`mb-12 relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? "md:flex-row-reverse" : ""} group`}
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all mt-1.5 md:mt-0"></div>
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}>
                <div className="flex items-center gap-2 mb-2 text-primary font-mono text-sm">
                  <Calendar className="w-4 h-4" />
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
