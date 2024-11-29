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

  return (
    <nav className="z-50 mx-auto bg-biscay px-5 py-3 text-primary-white shadow-lg lg:!px-20">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="">
          <Image src={logo} width={72} height={72} alt="Logo" quality={100} />
        </Link>
        {/* Tabs */}
        <div className="hidden gap-x-5 sm:flex">
          {content.nav.nameOfTabs.map((words, index) => {
            return (
              <Link
                key={index}
                className={`${
                  words.url === pathName || (pathName === "/" && words.name === "Home") ? "font-bold" : ""
                }`}
                href={words.url}
              >
                {words.name}
              </Link>
            );
          })}
        </div>
        {/* Ham icon */}
        <button
          onClick={() => setVisible(!visible)}
          className="flex flex-col items-center justify-center gap-y-1.5 rounded-md border border-white p-2 transition active:scale-90 sm:hidden"
        >
          {[0, 0, 0].map((_, index) => (
            <span key={index} className="h-[2.5px] w-6 rounded-full bg-white"></span>
          ))}
        </button>
      </div>
      {/* Toggled menu */}
      <div
        className={`flex flex-col items-center justify-center gap-y-5 overflow-hidden transition-[height] duration-300 ease-in-out sm:hidden ${
          visible ? "h-40" : "h-0"
        }`}
      >
        {content.nav.nameOfTabs.map((words, index) => {
          return (
            <Link
              key={index}
              className={`${
                words.url === pathName || (pathName === "/" && words.name === "Home") ? "font-bold" : ""
              }`}
              href={words.url}
            >
              {words.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
