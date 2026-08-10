"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";

const capabilities = [
  {
    title: "Security Assessment",
    outcome: "Identify and investigate common web application vulnerabilities using structured testing methodologies and tools such as Burp Suite, Nmap, and OWASP-based techniques."
  },
  {
    title: "Security Monitoring & Investigation",
    outcome: "Analyze logs, network traffic, and security events to identify suspicious activity and understand potential security incidents."
  },
  {
    title: "Network & System Hardening",
    outcome: "Apply networking and security fundamentals to reduce attack surfaces, strengthen configurations, and improve defensive controls."
  },
  {
    title: "Cloud Security",
    outcome: "Apply IAM, RBAC, least-privilege, and secure access-control principles within cloud environments, with hands-on focus on Google Cloud."
  },
  {
    title: "Security Automation",
    outcome: "Use Python and workflow automation to streamline repetitive security tasks and improve security analysis processes."
  }
];

export function ProfessionalCapabilities() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">Professional Capabilities</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Practical capabilities developed through hands-on labs, security research, and continuous technical projects.
          </p>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariant} 
              className={`group relative glass-card rounded-2xl p-6 flex gap-4 overflow-hidden ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Left gradient accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full glass-badge flex items-center justify-center border border-primary/20 group-hover:shadow-[0_0_12px_rgba(192,133,82,0.3)] transition-shadow">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.outcome}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
