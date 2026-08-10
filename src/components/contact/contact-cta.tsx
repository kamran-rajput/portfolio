"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SocialLinksCta } from "@/components/social-links-cta";

export function ContactCta() {
  return (
    <AnimatedSection className="py-24 bg-primary/5 border-t border-border/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">Take the Next Step</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Explore the rest of my portfolio or reach out directly to discuss how we can work together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 group">
            <Link href="/projects">
              Explore Projects <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-border/50 hover:bg-secondary/50">
            <Link href="/blog">
              Read Security Research
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-border/50 hover:bg-secondary/50">
            <Link href="/certifications">
              View Certifications
            </Link>
          </Button>
        </div>

        <SocialLinksCta />
      </div>
    </AnimatedSection>
  );
}
