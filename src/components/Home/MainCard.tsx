"use client";

import { content } from "@/content";
import { LucideProps } from "lucide-react";
import React from "react";

const SingleMaineCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-6 rounded-2xl bg-white p-8 sm:flex-row">
      {/* Icons */}
      <div className="text-6xl">{React.createElement(icon, { className: "w-24 h-full" })}</div>
      {/* Text */}
      <div className="flex flex-col gap-y-4">
        <h1 className="text-[21.29px] font-semibold text-biscay">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default function MainCard() {
  return (
    <section className="flex flex-col gap-y-4 bg-biscay p-28">
      <h1 className="text-3xl font-bold text-white">{content.Home.ProgramUnit.title}</h1>
      <h2 className="text-2xl font-extralight text-white/80">{content.Home.ProgramUnit.desc}</h2>
      <div className="grid grid-cols-1 items-center justify-between gap-9 sm:grid-cols-2">
        {content.Home.ProgramUnit.ProgramUnitCard.map((val, index) => (
          <SingleMaineCard key={index} icon={val.logo} title={val.headerOfTitle} desc={val.info} />
        ))}
      </div>
    </section>
  );
}
