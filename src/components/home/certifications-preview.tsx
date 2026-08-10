"use client";

import { motion } from "framer-motion";
import { Award, Terminal, ArrowRight, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import Link from "next/link";

const featuredCredentials = [
  {
    title: "Google Cybersecurity",
    description: "Cybersecurity foundations, security operations, risk management, network security, and incident response.",
  },
  {
    title: "Google Cloud Security",
    description: "Cloud security, IAM, RBAC, access control, and Google Cloud security principles.",
  },
  {
    title: "Hackviser CORE",
    description: "Cybersecurity foundations covering network security, Linux security, OSINT, cryptography, and security fundamentals.",
  },
];

const handsOnTraining = [
  {
    title: "PortSwigger Web Security Academy",
    description: "Practical web application security testing and vulnerability labs based on OWASP security concepts.",
  },
];

export function CertificationsPreview() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.04] rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-primary glass-badge mb-4">
            <Award className="w-4 h-4 text-primary" /> Verified Competencies
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
            Certifications &amp; Training
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Verified credentials and hands-on security training supporting my cybersecurity development.
          </p>
        </div>

        <div className="space-y-12">
          {/* Featured Credentials Category */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-foreground/90 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Featured Credentials</span>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {featuredCredentials.map((cert, index) => (
                <motion.div key={index} variants={fadeUpVariant} className="h-full">
                  <GlassCard className="h-full p-6 flex flex-col justify-between hover:border-primary/40 transition-all duration-300">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hands-on Training Category */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-foreground/90 uppercase tracking-wider">
              <Terminal className="w-4 h-4 text-primary" />
              <span>Hands-on Training</span>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 md:grid-cols-1 gap-6"
            >
              {handsOnTraining.map((item, index) => (
                <motion.div key={index} variants={fadeUpVariant}>
                  <GlassCard className="p-6 hover:border-primary/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Prominent CTA below preview */}
        <div className="mt-14 text-center">
          <Button 
            asChild 
            size="lg" 
            className="h-12 px-8 font-medium shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all group"
          >
            <Link href="/certifications">
              View All Certifications 
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}

