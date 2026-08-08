import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Blog`,
    description: `Read the blog post: ${slug.replace(/-/g, " ")}`,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold tracking-tight">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Blog post content will appear here (MDX).
        </p>
      </article>
    </main>
  );
}
