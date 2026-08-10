"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SocialLinksCta } from "@/components/social-links-cta";

export function CertCta() {
  return (
    <AnimatedSection className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Let&apos;s Build Something Secure
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore my hands-on cybersecurity projects, technical research, and continuous learning journey.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 font-medium">
            <Link href="/projects">
              Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-border/50 hover:bg-secondary/50 font-medium">
            <Link href="/blog">
              Read Security Research
            </Link>
          </Button>
        </div>

        {/* Social & Resume Links */}
        <SocialLinksCta />
      </div>
    </AnimatedSection>
  );
}
