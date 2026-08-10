"use client";

import { motion } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Mail, FileText } from "lucide-react";

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
  </svg>
);

export const socialLinks = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-kamran-akmal/" },
  { icon: SiGithub, label: "GitHub", href: "https://github.com/muhammad-kamran-akmal" },
  { icon: Mail, label: "Email", href: "mailto:kamran.akmal.sec@gmail.com" },
  { icon: FileText, label: "Resume", href: "/resume/Kamran-Resume.pdf" },
];

export function SocialLinksCta({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 ${className || ""}`}>
      {socialLinks.map((link, idx) => (
        <motion.a 
          key={idx} 
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg font-medium text-foreground hover:shadow-[0_0_20px_rgba(192,133,82,0.15)] transition-shadow"
        >
          <link.icon className="w-5 h-5" />
          {link.label}
        </motion.a>
      ))}
    </div>
  );
}
