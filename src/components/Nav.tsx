"use client";

import { content } from "@/content";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../src/asset/logo.svg";

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className="z-50 mx-auto bg-biscay px-5 py-8 text-primary-white shadow-lg lg:!px-20">
      <div className="flex items-center justify-between">
        <Link href={"#"}>
          <Image src={logo} width={100} height={100} alt="Logo" />
        </Link>
        {/* Tabs */}
        <div className="hidden gap-x-5 sm:flex">
          {content.nav.nameOfTabs.map((words, index) => {
            return (
              <Link
                key={index}
                className={`${words.url === pathName || (pathName === "/" && words.name === "Home") ? "font-bold" : ""}`}
                href={words.url}
              >
                {words.name}
              </Link>
            );
          })}
        </div>
        {/* ham icon */}
        <button
          onClick={() => setVisible(!visible)}
          className="flex flex-col items-center justify-center gap-y-1 rounded-md bg-primary-white p-2 sm:hidden"
        >
          {[0, 0, 0].map((i, index) => {
            return <span key={index} className="h-[6px] w-7 rounded-full bg-biscay"></span>;
          })}
        </button>
      </div>
      {/* Toggled menu */}
      {visible ? (
        <div className="mt-9 flex flex-col items-center gap-y-5 sm:hidden">
          {content.nav.nameOfTabs.map((words, index) => {
            return (
              <Link
                key={index}
                className={`${words.url === pathName || (pathName === "/" && words.name === "Home") ? "font-bold" : ""}`}
                href={words.url}
              >
                {words.name}
              </Link>
            );
          })}
        </div>
      ) : null}
    </nav>
  );
}
