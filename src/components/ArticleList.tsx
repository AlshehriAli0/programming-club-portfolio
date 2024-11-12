"use client";

import { ArticleKeys, content } from "@/content";
import { useState } from "react";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [activeTab, setActiveTab] = useState<ArticleKeys | "All">("All");

  const articles: Record<ArticleKeys, { title: string; link: string; description: string; image: string }[]> =
    content.scientificCorner.articles;
  const articleKeysArray = Object.keys(articles).map((key) => key);

  const allArticles = Object.entries(articles).flatMap(([key, articles]) =>
    articles.map((article) => ({
      ...article,
      type: key as ArticleKeys,
    }))
  );

  const activeSectionArticles =
    activeTab === "All"
      ? allArticles
      : articles[activeTab].map((article) => ({
          ...article,
          type: activeTab,
        }));

  return (
    <section className="flex flex-col gap-10 md:px-16">
      <div className="flex flex-wrap gap-4">
        <div
          onClick={() => setActiveTab("All")}
          className={`cursor-pointer rounded-xl px-5 py-2 text-white transition active:scale-[0.98] ${activeTab === "All" ? "bg-biscay" : "bg-breaker-bay/60 hover:bg-biscay/80"}`}
        >
          All
        </div>
        {articleKeysArray.map((tab, idx) => (
          <div
            onClick={() => setActiveTab(tab as ArticleKeys)}
            key={idx}
            className={`cursor-pointer rounded-xl px-4 py-2 text-white transition-all active:scale-[0.98] ${activeTab === tab ? "bg-biscay" : "bg-breaker-bay/60 hover:bg-biscay/80"}`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mx-auto grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 md:grid-cols-3">
        {activeSectionArticles.map((article, idx) => (
          <ArticleCard
            key={idx}
            description={article.description}
            title={article.title}
            image={article.image}
            type={article.type}
          />
        ))}
      </div>
    </section>
  );
};
