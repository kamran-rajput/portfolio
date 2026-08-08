"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";

const certs = [
  {
    title: "Google Cybersecurity Professional",
    skills: "Network Security, Python, Linux, SIEM tools, Incident Response",
    date: "2025"
  },
  {
    title: "Google Cloud Security Principles",
    skills: "IAM, Cloud Governance, Data Protection, Network Security",
    date: "2025"
  },
  {
    title: "Hackviser Cybersecurity Foundations",
    skills: "Offensive Security, Defensive Hardening, Vulnerability Analysis",
    date: "2025"
  }
];

export function CertificationsPreview() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl flex items-center justify-center">
            <Award className="w-8 h-8 mr-3 text-primary drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]" />
            Certifications
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Validated expertise across domains.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {certs.map((cert, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="h-full">
              <GlassCard className="h-full p-0" glow={false}>
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      <span className="font-semibold text-foreground/80">Skills: </span>
                      {cert.skills}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-primary glass-badge w-fit px-3 py-1.5 rounded-md shadow-[0_0_8px_rgba(37,99,235,0.15)]">
                    {cert.date}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
