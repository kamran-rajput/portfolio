import { BlogHero } from "@/components/blog/blog-hero";
import { ResearchPhilosophy } from "@/components/blog/research-philosophy";
import { FeaturedArticles } from "@/components/blog/featured-articles";
import { ArticleCategories } from "@/components/blog/article-categories";
import { LatestResearch } from "@/components/blog/latest-research";
import { ResearchTopics } from "@/components/blog/research-topics";
import { FeaturedSeries } from "@/components/blog/featured-series";
import { ReadingJourney } from "@/components/blog/reading-journey";
import { NewsletterFollow } from "@/components/blog/newsletter-follow";
import { BlogCta } from "@/components/blog/blog-cta";

export default function BlogPage() {
  return (
    <main className="flex flex-col w-full">
      <BlogHero />
      <ResearchPhilosophy />
      <FeaturedArticles />
      <ArticleCategories />
      <LatestResearch />
      <ResearchTopics />
      <FeaturedSeries />
      <ReadingJourney />
      <NewsletterFollow />
      <BlogCta />
    </main>
  );
}
