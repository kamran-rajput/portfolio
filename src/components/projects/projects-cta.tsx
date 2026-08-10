"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SocialLinksCta } from "@/components/social-links-cta";

export function ProjectsCta() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">Ready to Collaborate?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Explore my technical research or get in touch to discuss security engineering opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8">
            <Link href="/blog">
              View Security Research <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8">
            <Link href="/contact">
              Contact Me
            </Link>
          </Button>
        </div>

        <SocialLinksCta />
      </div>
    </AnimatedSection>
  );
}
