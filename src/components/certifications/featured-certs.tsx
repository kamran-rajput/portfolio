"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";

const certs = [
  {
    name: "Google Cybersecurity Professional Certificate",
    org: "Google",
    status: "Completed",
    type: "Professional Certificate",
    focus: ["Cybersecurity Foundations", "Risk Management", "Security Controls", "Threats", "Vulnerabilities", "Network Security", "Incident Response", "Security Operations"],
    skills: "Security mindset, Analytical thinking, Defensive security, Risk assessment, Security best practices",
    application: "Applied concepts through labs, security exercises, and independent research."
  },
  {
    name: "Introduction to Security Principles in Cloud Computing",
    org: "Google Cloud",
    status: "Completed",
    type: "Cloud Security",
    focus: ["Cloud Security", "IAM", "RBAC", "Shared Responsibility Model", "Identity Management", "Cloud Fundamentals"],
    skills: "Secure cloud architecture, Identity management, Access control, Cloud governance",
    application: "Applied cloud security principles while studying secure infrastructure and modern cloud environments."
  },
  {
    name: "Hackviser Cybersecurity Foundations",
    org: "Hackviser",
    status: "Completed",
    type: "Foundations",
    focus: ["Networking", "Linux", "OSINT", "Web Security", "Cybersecurity Basics"],
    skills: "Technical foundations, Linux proficiency, Security concepts, Networking",
    application: "Reinforced through practical exercises and continuous security labs."
  }
];

export function FeaturedCerts() {
  return (
    <AnimatedSection className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-12">Featured Certifications</h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="space-y-8"
        >
          {certs.map((cert, idx) => (
            <motion.div key={idx} variants={fadeUpVariant}>
              <Card className="bg-background border-border/40 hover:border-primary/40 transition-all group overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="p-8 md:col-span-5 bg-secondary/10 border-b md:border-b-0 md:border-r border-border/30 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{cert.type}</Badge>
                          <Badge variant="outline" className="border-primary/20 text-foreground/70"><CheckCircle className="w-3 h-3 mr-1 text-primary"/> {cert.status}</Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{cert.name}</h3>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{cert.org}</p>
                      </div>
                      <button className="mt-8 flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background border border-border/50 text-foreground text-sm font-medium rounded hover:bg-secondary transition-colors">
                        Verify Credential <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    
                    <div className="p-8 md:col-span-7 flex flex-col gap-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.focus.map((f, i) => (
                            <span key={i} className="text-xs font-mono text-muted-foreground bg-secondary/30 border border-border/50 px-2 py-1 rounded">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Professional Skills</h4>
                        <p className="text-sm text-foreground/90 font-medium leading-relaxed">{cert.skills}</p>
                      </div>
                      <div className="pt-4 border-t border-border/30">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Practical Application</h4>
                        <p className="text-sm text-foreground/80 leading-relaxed">{cert.application}</p>
                      </div>
                    </div>
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
