import { content } from "@/content";
import Image from "next/image";
import Link from "next/link";

export const GameDevHero = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6 px-3 py-16">
      <Link
        href={"/scientific-corner"}
        className="ml-1 w-fit rounded-3xl bg-smalt-blue px-5 py-1 text-xl font-bold text-white md:px-7 md:py-2"
      >
        Back
      </Link>
      <div
        style={{ boxShadow: "0px 0px 7.8px 2px #6499A2" }}
        className="mt-4 w-fit rounded-3xl bg-white px-2 py-1 text-sm font-bold text-[#64738B] md:text-base"
      >
        Game Development
      </div>
      <div className="flex pb-20 sm:pb-64 lg:max-w-[60%] lg:pb-64">
        <aside>
          <h2 className="bg-gradient-to-r from-biscay via-smalt-blue to-breaker-bay bg-clip-text text-3xl font-bold text-transparent md:text-6xl">
            {content.scientificCorner.banner.title}
          </h2>

          <aside className="flex flex-col gap-6">
            <span className="pt-4 text-2xl font-normal">
              {content.scientificCorner.banner.description1} <br />
            </span>
            <p className="text-xl font-light">
              {content.scientificCorner.banner.description2}
              <span className="font-normal"> {content.scientificCorner.banner.bold}</span>
              {content.scientificCorner.banner.description3}
            </p>
            <p className="text-xl font-light">{content.scientificCorner.banner.description4} </p>
          </aside>
        </aside>
        <Image
          width={600}
          height={560}
          alt="Game dev unit icon"
          src={"/game-dev-icon.svg"}
          quality={100}
          className="absolute right-0 top-0 h-auto opacity-5"
        />
      </div>
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <Image src="/game-dev-break.svg" alt="break" width={1920} height={500} className="h-auto w-full" />
      </div>
    </div>
  );
};
