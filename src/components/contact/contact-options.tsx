"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const options = [
  { icon: Mail, platform: "Email", desc: "Professional communication, opportunities, collaborations, and general inquiries.", link: "mailto:hello@example.com" },
  { icon: LinkedinIcon, platform: "LinkedIn", desc: "Professional networking and career opportunities.", link: "https://linkedin.com" },
  { icon: SiGithub, platform: "GitHub", desc: "Explore projects, source code, and ongoing development.", link: "https://github.com" },
  { icon: FileText, platform: "Resume", desc: "Download my latest professional resume.", link: "/resume.pdf" }
];

export function ContactOptions() {
  return (
    <AnimatedSection className="py-24 bg-secondary/5 border-y border-border/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {options.map((opt, idx) => (
            <motion.div key={idx} variants={fadeUpVariant} className="h-full">
              <Link href={opt.link} className="flex flex-col h-full p-6 bg-background border border-border/40 hover:border-primary/50 hover:bg-primary/5 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <opt.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{opt.platform}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{opt.desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
