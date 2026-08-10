"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

import { LinkedinIcon } from "@/components/social-links-cta";

const options = [
  { icon: Mail, platform: "Email", desc: "Professional communication, opportunities, collaborations, and general inquiries.", link: "mailto:kamran.akmal.sec@gmail.com" },
  { icon: LinkedinIcon, platform: "LinkedIn", desc: "Professional networking and career opportunities.", link: "https://www.linkedin.com/in/muhammad-kamran-akmal/" },
  { icon: SiGithub, platform: "GitHub", desc: "Explore projects, source code, and ongoing development.", link: "https://github.com/muhammad-kamran-akmal" },
  { icon: FileText, platform: "Resume", desc: "Download my latest professional resume.", link: "/resume/Kamran-Resume.pdf" }
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
              <a href={opt.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full p-6 bg-background border border-border/40 hover:border-primary/50 hover:bg-primary/5 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-md">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <opt.icon className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{opt.platform}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{opt.desc}</p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
