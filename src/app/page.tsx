import { Hero } from "@/components/home/hero";
import { CredibilityStrip } from "@/components/home/credibility-strip";
import { AboutPreview } from "@/components/home/about-preview";
import { CoreExpertise } from "@/components/home/core-expertise";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SecurityResearch } from "@/components/home/security-research";
import { ProfessionalCapabilities } from "@/components/home/professional-capabilities";
import { LearningJourney } from "@/components/home/learning-journey";
import { CertificationsPreview } from "@/components/home/certifications-preview";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <CredibilityStrip />
      <AboutPreview />
      <CoreExpertise />
      <FeaturedProjects />
      <SecurityResearch />
      <ProfessionalCapabilities />
      <LearningJourney />
      <CertificationsPreview />
      <ContactSection />
    </main>
  );
}
