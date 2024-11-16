import { ArticleList } from "@/components/ArticleList";
import { ScientificHero } from "@/components/ScientificHero";
import { SquareBanner } from "@/components/SquareBanner";
import { getAllPosts } from "@/lib/articles";

export const dynamic = "force-static";

export default async function ScientificCornerPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto flex min-h-screen max-w-[85rem] flex-col gap-28 pb-20 md:px-10">
      <ScientificHero />
      <SquareBanner />
      <ArticleList posts={posts} />
    </main>
  );
}
