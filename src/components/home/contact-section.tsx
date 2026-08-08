"use client";

import { motion } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail, FileText } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingParticles } from "@/components/ui/floating-particles";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const roles = [
  "Security Operations",
  "Cybersecurity Internships",
  "Cloud Security",
  "Security Research",
];

const links = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: SiGithub, label: "GitHub", href: "https://github.com" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  { icon: FileText, label: "Resume", href: "/resume.pdf" },
];

export function ContactSection() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      {/* Floating particles */}
      <FloatingParticles count={12} />

      {/* Multiple gradient orbs for rich glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-primary/[0.08] blur-[120px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-400/[0.05] blur-[80px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-56 h-56 bg-primary/[0.04] blur-[80px] -z-10 rounded-full pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          <span className="gradient-text">Let&apos;s Secure the Future</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Currently open to new opportunities, collaborations, and professional networking.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {roles.map((role, idx) => (
            <motion.span 
              key={idx} 
              className="px-4 py-2 glass-badge rounded-full text-sm font-medium text-foreground shimmer-overlay"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {role}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link, idx) => (
            <motion.a 
              key={idx} 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg font-medium text-foreground hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-shadow"
            >
              <link.icon className="w-5 h-5" />
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
