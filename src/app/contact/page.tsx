import { ContactHero } from "@/components/contact/contact-hero";
import { ContactOptions } from "@/components/contact/contact-options";
import { ProfessionalAvailability } from "@/components/contact/professional-availability";
import { WhyWorkWithMe } from "@/components/contact/why-work-with-me";
import { ProfessionalInterests } from "@/components/contact/professional-interests";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactFaq } from "@/components/contact/contact-faq";
import { ContactCta } from "@/components/contact/contact-cta";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full">
      <ContactHero />
      <ContactOptions />
      <ProfessionalAvailability />
      <WhyWorkWithMe />
      <ProfessionalInterests />
      <ContactForm />
      <ContactFaq />
      <ContactCta />
    </main>
  );
}
