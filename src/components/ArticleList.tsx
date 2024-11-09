"use client";

import { content } from "@/content";
import { useState } from "react";

export const ArticleList = () => {
  const [activeTab, setActiveTab] = useState("All");

  const articles = content.scientificCorner.articles;
  const articleKeysArray = Object.keys(articles).map((key) => key);

  return (
    <section className="flex gap-10 px-16">
      <div className="flex gap-4">
        <div
          onClick={() => setActiveTab("All")}
          className={`cursor-pointer rounded-xl px-5 py-2 text-white transition active:scale-[0.98] ${activeTab === "All" ? "bg-biscay" : "bg-breaker-bay/60 hover:bg-biscay/80"}`}
        >
          All
        </div>
        {articleKeysArray.map((tab, idx) => (
          <div
            onClick={() => setActiveTab(tab)}
            key={idx}
            className={`cursor-pointer rounded-xl px-4 py-2 text-white transition-all active:scale-[0.98] ${activeTab === tab ? "bg-biscay" : "bg-breaker-bay/60 hover:bg-biscay/80"}`}
          >
            {tab}
          </div>
        ))}
      </div>
    </section>
  );
};
