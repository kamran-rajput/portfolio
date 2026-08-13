"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What opportunities are you currently open to?",
    a: "I am actively seeking roles in Security Operations (SOC Analyst), Cloud Security, and Cybersecurity Internships. I am also open to collaborating on open-source projects or participating in joint security research."
  },
  {
    q: "Do you accept freelance work?",
    a: "Yes, I take on select freelance projects, particularly those focused on security posture assessments, cloud infrastructure reviews, or implementing automated security workflows."
  },
  {
    q: "Can I collaborate on research or open-source projects?",
    a: "Absolutely. I am highly interested in contributing to open-source security tools, collaborating on AI security research, and partnering on detection engineering projects."
  },
  {
    q: "How quickly do you usually respond?",
    a: "I aim to respond to all professional inquiries within 24-48 hours. If the matter is urgent, connecting via LinkedIn often yields the fastest response."
  },
  {
    q: "Can recruiters contact you directly?",
    a: "Yes, I welcome direct outreach from technical recruiters and hiring managers. My resume is available for download on this page, and I'm happy to schedule a call to discuss mutual fit."
  }
];

export function ContactFaq() {
  return (
    <AnimatedSection className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 mb-3 backdrop-blur-md">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
              Quick Answers
            </span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Frequently Asked <span className="gradient-text glow-text">Questions</span>
          </h2>
        </div>
        
        <Accordion className="w-full space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`} 
              className="bg-card/40 backdrop-blur-md border border-primary/20 hover:border-primary/50 rounded-2xl px-6 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(192,133,82,0.1)]"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-5 text-base sm:text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-sm sm:text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}

