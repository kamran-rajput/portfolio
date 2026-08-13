"use client";

import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedinIcon } from "@/components/social-links-cta";

const options = [
  { icon: Mail, platform: "Email", desc: "Professional communication, opportunities, collaborations, and general inquiries.", link: "mailto:kamran.akmal.sec@gmail.com" },
  { icon: LinkedinIcon, platform: "LinkedIn", desc: "Professional networking and career opportunities.", link: "https://www.linkedin.com/in/muhammad-kamran-akmal/" },
  { icon: SiGithub, platform: "GitHub", desc: "Explore projects, source code, and ongoing development.", link: "https://github.com/muhammad-kamran-akmal" },
  { icon: FileText, platform: "Resume", desc: "Download my latest professional resume.", link: "/resume/Kamran-Resume.pdf" }
];

export function ContactOptions() {
  return (
    <AnimatedSection className="py-20 bg-secondary/5 border-y border-border/30 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {options.map((opt, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUpVariant}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-full"
            >
              <a 
                href={opt.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col h-full p-6 bg-card/40 backdrop-blur-md border border-primary/20 hover:border-primary/60 hover:bg-primary/5 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-[0_0_25px_rgba(192,133,82,0.15)]"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_rgba(192,133,82,0.4)] transition-all duration-300">
                    <opt.icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors">{opt.platform}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{opt.desc}</p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

