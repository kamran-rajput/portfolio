"use client";

import { useState } from "react";
import { AnimatedSection, staggerContainer, fadeUpVariant } from "@/components/ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Award, Calendar, X, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  image: string;
  pdf: string;
  verifyUrl: string;
  description: string;
  skills: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "hackviser-core",
    title: "Certified Cybersecurity Foundations",
    issuer: "Hackviser",
    issued: "August 2026",
    image: "/certifications/HackerViser/HackerViser_CORE_certificate-1.png",
    pdf: "/certifications/HackerViser/HackerViser_Core_certifications.98b8b6e82ed146d4b581592f0161a250.pdf",
    verifyUrl: "https://hackviser.com/verify?id=HV-CORE-FH1M1D0K",
    description: "Cybersecurity foundation training covering core defensive and offensive security concepts, networking, Linux security, reconnaissance, OSINT, social engineering, cryptography, and security fundamentals.",
    skills: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "Linux Security",
      "OSINT",
      "Cryptography",
      "Threat & Incident Management"
    ]
  },
  {
    id: "gcp-cloud-security",
    title: "Introduction to Security Principles in Cloud Computing",
    issuer: "Google Cloud",
    issued: "August 2026",
    image: "/certifications/coursera/google-cloude-security/01-into/Introduction_to_Security_Principles_in_Cloud_Computing_Course-1.png",
    pdf: "/certifications/coursera/google-cloude-security/01-into/Introduction_to_Security_Principles_in_Cloud_Computing_Coursera SZE82KR1KLPI.pdf",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/SZE82KR1KLPI",
    description: "Training focused on cloud security principles, identity and access management, authorization, RBAC, and securing modern cloud infrastructure.",
    skills: [
      "Cloud Security",
      "Google Cloud Platform",
      "IAM",
      "RBAC",
      "Access Control",
      "Cloud Infrastructure"
    ]
  },
  {
    id: "google-networks-security",
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google",
    issued: "August 2026",
    image: "/certifications/coursera/google-cybersecurity/03-Networks and Network Security/Networks and Network Security.png",
    pdf: "/certifications/coursera/google-cybersecurity/03-Networks and Network Security/Networks and Network Security-ZFFZHJ1PUIDI.pdf",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/ZFFZHJ1PUIDI",
    description: "Practical study of network security concepts including TCP/IP, network architecture, security controls, secure communication, IDS/IPS, vulnerability assessment, and system hardening.",
    skills: [
      "Network Security",
      "TCP/IP",
      "Network Architecture",
      "Security Controls",
      "IDS/IPS",
      "System Hardening"
    ]
  },
  {
    id: "google-risk-management",
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google",
    issued: "July 2026",
    image: "/certifications/coursera/google-cybersecurity/02-Play it safe/Play it safe-Manage Security Risk-1.png",
    pdf: "/certifications/coursera/google-cybersecurity/02-Play it safe/Play it safe-Manage Securiy Risk-AYL1TQF4WPVN.pdf",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/AYL1TQF4WPVN",
    description: "Training focused on cybersecurity risk management, security frameworks, controls, asset protection, monitoring, SIEM concepts, and incident response.",
    skills: [
      "Risk Management",
      "NIST CSF",
      "NIST RMF",
      "Security Controls",
      "SIEM",
      "Incident Response"
    ]
  },
  {
    id: "google-foundations-cybersecurity",
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    issued: "July 2026",
    image: "/certifications/coursera/google-cybersecurity/01-Foundations of Cybersecurity/Foundation of Cybersecurity.png",
    pdf: "/certifications/coursera/google-cybersecurity/01-Foundations of Cybersecurity/Foundation of Cybersecurity-TZKZTMGHD8JN.pdf",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/TZKZTMGHD8JN",
    description: "Introduces core cybersecurity concepts, security careers, common threats, attack techniques, and foundational security thinking.",
    skills: [
      "Cybersecurity Fundamentals",
      "Cyber Attacks",
      "Security Concepts",
      "Threat Awareness",
      "Social Network Analysis"
    ]
  }
];

export function FeaturedCerts() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <AnimatedSection className="py-16 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="space-y-8"
        >
          {certificationsData.map((cert) => (
            <motion.div key={cert.id} variants={fadeUpVariant}>
              <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  
                  {/* Certificate Image Thumbnail Area */}
                  <div 
                    onClick={() => setSelectedCert(cert)}
                    className="lg:col-span-5 relative bg-secondary/20 overflow-hidden cursor-pointer flex items-center justify-center p-4 border-b lg:border-b-0 lg:border-r border-border/40 min-h-[220px]"
                  >
                    <img 
                      src={encodeURI(cert.image)} 
                      alt={`Certificate for ${cert.title}`}
                      className="w-full h-auto max-h-[260px] object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay Icon */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-badge text-xs font-semibold text-foreground shadow-lg border border-primary/30">
                        <Eye className="w-4 h-4 text-primary" /> View Certificate
                      </span>
                    </div>
                  </div>

                  {/* Details Area */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
                    <div>
                      {/* Issuer & Date Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary glass-badge px-3 py-1 rounded-full uppercase tracking-wider">
                          <Award className="w-3.5 h-3.5" />
                          {cert.issuer}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground glass-badge px-3 py-1 rounded-full">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          Issued {cert.issued}
                        </span>
                      </div>

                      {/* Certification Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                        {cert.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {cert.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs font-mono text-muted-foreground glass-badge px-2.5 py-1 rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-3">
                      <Button 
                        onClick={() => setSelectedCert(cert)}
                        variant="default"
                        size="sm"
                        className="h-10 px-5 text-xs font-semibold inline-flex items-center gap-2 shadow-sm hover:shadow-primary/20"
                      >
                        <Eye className="w-4 h-4" />
                        View Certificate
                      </Button>

                      <Button 
                        asChild
                        variant="outline"
                        size="sm"
                        className="h-10 px-5 text-xs font-semibold border-primary/30 hover:bg-primary/10 transition-all"
                      >
                        <a 
                          href={cert.verifyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-foreground"
                        >
                          Verify Credential
                          <ExternalLink className="w-3.5 h-3.5 text-primary" />
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="h-10 px-3 text-xs font-semibold text-muted-foreground hover:text-foreground"
                      >
                        <a
                          href={encodeURI(cert.pdf)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          PDF Document
                        </a>
                      </Button>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl glass-card rounded-2xl overflow-hidden z-10 shadow-2xl border border-primary/30 my-8 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-border/40 flex items-center justify-between gap-4 bg-secondary/30">
                <div>
                  <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider">
                    {selectedCert.issuer} Credential
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                    {selectedCert.title}
                  </h3>
                </div>

                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full glass-badge hover:bg-primary/20 text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-black/5">
                <img 
                  src={encodeURI(selectedCert.image)} 
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg border border-border/40 shadow-xl"
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 sm:p-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-4 bg-secondary/20">
                <div className="text-xs text-muted-foreground font-mono">
                  Issued: <span className="text-foreground font-semibold">{selectedCert.issued}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button asChild size="sm" variant="outline" className="h-9 text-xs">
                    <a href={encodeURI(selectedCert.pdf)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-primary" /> View Full PDF
                    </a>
                  </Button>

                  <Button asChild size="sm" variant="outline" className="h-9 text-xs">
                    <a href={encodeURI(selectedCert.pdf)} download className="inline-flex items-center gap-1.5">
                      <Download className="w-3.5 h-3.5 text-primary" /> Download
                    </a>
                  </Button>

                  <Button asChild size="sm" variant="default" className="h-9 text-xs">
                    <a href={selectedCert.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                      Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
