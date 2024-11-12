import { content } from "@/content";
import Image from "next/image";

export const ScientificHero = () => {
  return (
    <div className="relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen">
      <div
        style={{
          backgroundImage: "url('/scitenfic-hero.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative"
      >
        <div className="mx-auto max-w-[85rem] px-3 sm:px-6 md:px-28">
          <div className="flex flex-col gap-4 py-44 text-primary-white md:gap-7">
            <h1 className="text-shadow text-4xl font-bold md:text-6xl">
              {content.scientificCorner.hero.title}
            </h1>
            <h3 className="text-2xl md:text-4xl">{content.scientificCorner.hero.titleWelcome}</h3>
            <p className="text-lg md:text-2xl md:font-light">{content.scientificCorner.hero.description}</p>
          </div>
        </div>
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <Image
            src="/scientific-corner-break.svg"
            alt="break"
            width={1920}
            height={500}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
};
