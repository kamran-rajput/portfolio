import type { Metadata } from "next";
import { ProjectsHero } from "@/components/projects/projects-hero";
import { ProjectPhilosophy } from "@/components/projects/project-philosophy";
import { ProjectCategories } from "@/components/projects/project-categories";
import { FeaturedProjectsList } from "@/components/projects/featured-projects-list";
import { ProjectTimeline } from "@/components/projects/project-timeline";
import { EngineeringProcess } from "@/components/projects/engineering-process";
import { CurrentDevelopment } from "@/components/projects/current-development";
import { OpenSourceLearning } from "@/components/projects/open-source-learning";
import { ProjectsCta } from "@/components/projects/projects-cta";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore cybersecurity and software engineering projects by Kamran Akmal.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col w-full">
      <ProjectsHero />
      <ProjectPhilosophy />
      <ProjectCategories />
      <FeaturedProjectsList />
      <ProjectTimeline />
      <EngineeringProcess />
      <CurrentDevelopment />
      <OpenSourceLearning />
      <ProjectsCta />
    </main>
  );
}
