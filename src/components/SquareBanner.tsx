import { content } from "@/content";
import Image from "next/image";
import Link from "next/link";

export const SquareBanner = () => {
  return (
    <div className="mx-auto flex w-[90%] flex-col gap-12 rounded-3xl bg-breaker-bay/10 p-8 shadow-2xl md:p-16">
      <h2 className="bg-gradient-to-r from-biscay via-smalt-blue to-breaker-bay bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        {content.scientificCorner.banner.title}
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-16">
        <aside>
          <p className="text-lg font-light md:text-2xl">
            {content.scientificCorner.banner.description1}

            <span className="font-normal">{content.scientificCorner.banner.bold}</span>
            {content.scientificCorner.banner.description2}
          </p>
          <br />
          <p className="text-lg font-light md:text-2xl">{content.scientificCorner.banner.description3}</p>
        </aside>
        <Image width={170} height={217} alt="Game dev unit icon" src={"/game-dev-icon.svg"} />
      </div>

      <Link
        className="w-fit rounded-3xl bg-smalt-blue px-5 py-3 text-2xl font-bold text-white transition hover:bg-biscay/80 active:shadow-xl"
        href={"/"}
      >
        Let's Go !
      </Link>
    </div>
  );
};
