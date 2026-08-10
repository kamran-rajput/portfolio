import type { Metadata } from "next";
import { CertHero } from "@/components/certifications/cert-hero";
import { LearningPhilosophy } from "@/components/certifications/learning-philosophy";
import { FeaturedCerts } from "@/components/certifications/featured-certs";
import { LearningRoadmap } from "@/components/certifications/learning-roadmap";
import { KnowledgeAreas } from "@/components/certifications/knowledge-areas";
import { CertTimeline } from "@/components/certifications/cert-timeline";
import { HandsOnLearning } from "@/components/certifications/hands-on-learning";
import { ContinuousDevelopment } from "@/components/certifications/continuous-development";
import { ProfessionalValues } from "@/components/certifications/professional-values";
import { CertCta } from "@/components/certifications/cert-cta";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications, training, and credentials of Kamran Akmal.",
};

export default function CertificationsPage() {
  return (
    <main className="flex flex-col w-full">
      <CertHero />
      <LearningPhilosophy />
      <FeaturedCerts />
      <LearningRoadmap />
      <KnowledgeAreas />
      <CertTimeline />
      <HandsOnLearning />
      <ContinuousDevelopment />
      <ProfessionalValues />
      <CertCta />
    </main>
  );
}
