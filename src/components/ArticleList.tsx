"use client";

import { Post } from "@/lib/articles";
import { useState } from "react";
import { ArticleCard } from "./ArticleCard";

type ArticleKeys = "All" | "Game Development" | "Previous Work" | "Courses";

export const ArticleList = ({ posts }: { posts: Post[] }) => {
  console.log(posts);
  const [activeTab, setActiveTab] = useState<ArticleKeys>("All");

  // Get unique article keys from posts
  const articleKeysArray = Array.from(new Set(posts.map((post) => post.meta.section)));

  // Filter posts based on the active tab
  const activeSectionArticles =
    activeTab === "All" ? posts : posts.filter((post) => post.meta.section === activeTab);

  return (
    <section className="flex flex-col gap-10 md:px-16">
      <div className="flex flex-wrap gap-4">
        <div
          onClick={() => setActiveTab("All")}
          className={`cursor-pointer rounded-xl px-5 py-2 text-white transition active:scale-[0.98] ${
            activeTab === "All" ? "bg-biscay" : "bg-breaker-bay/60 hover:bg-biscay/80"
          }`}
        >
          All
        </div>
        {articleKeysArray.map((tab, idx) => (
          <div
            onClick={() => setActiveTab(tab as ArticleKeys)}
            key={idx}
            className={`cursor-pointer rounded-xl px-4 py-2 text-white transition-all active:scale-[0.98] ${
              activeTab === tab ? "bg-biscay" : "bg-breaker-bay/60 hover:bg-biscay/80"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mx-auto grid w-full grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-3">
        {activeSectionArticles.map((article, idx) => (
          <ArticleCard
            key={idx}
            title={article.meta.title}
            cover={article.meta.cover}
            type={article.meta.section}
            href={article.href}
          />
        ))}
      </div>
    </section>
  );
};
