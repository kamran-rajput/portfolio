"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award } from "lucide-react";
import Link from "next/link";
import { SocialLinksCta } from "@/components/social-links-cta";

export function ContactCta() {
  return (
    <AnimatedSection className="py-20 bg-primary/5 border-t border-border/30 relative overflow-hidden">
      {/* Decorative ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[130px] -z-10 rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[130px] -z-10 rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-5 text-foreground">
          Take the <span className="gradient-text glow-text">Next Step</span>
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Explore the rest of my portfolio or reach out directly to discuss how we can work together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 shadow-md hover:shadow-primary/25 hover:shadow-lg transition-all hover:glow-primary relative overflow-hidden shimmer-overlay group">
            <Link href="/projects">
              Explore Projects <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all glass-badge group">
            <Link href="/blog">
              <BookOpen className="mr-2 w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              Read Security Research
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all glass-badge group">
            <Link href="/certifications">
              <Award className="mr-2 w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              View Certifications
            </Link>
          </Button>
        </div>

        <SocialLinksCta />
      </div>
    </AnimatedSection>
  );
}

