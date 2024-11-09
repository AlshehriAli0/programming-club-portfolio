import { content } from "@/content";
import Image from "next/image";
import Link from "next/link";

export const SquareBanner = () => {
  return (
    <div className="bg-breaker-bay/10 mx-auto flex w-[90%] flex-col gap-12 rounded-3xl p-16 shadow-xl">
      <h2 className="from-biscay via-smalt-blue to-breaker-bay bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
        {content.scientificCorner.banner.title}
      </h2>
      <div className="flex gap-16">
        <aside>
          <p className="text-2xl font-light">
            {content.scientificCorner.banner.description1}

            <span className="font-normal">{content.scientificCorner.banner.bold}</span>
            {content.scientificCorner.banner.description2}
          </p>
          <br />
          <p className="text-2xl font-light">{content.scientificCorner.banner.description3}</p>
        </aside>
        <Image width={170} height={217} alt="Game dev unit icon" src={"/game-dev-icon.svg"} />
      </div>

      <Link
        className="bg-smalt-blue hover:bg-biscay/80 w-fit rounded-xl px-5 py-3 text-2xl font-bold text-[#fff] transition active:shadow-xl"
        href={"/"}
      >
        Let's Go !
      </Link>
    </div>
  );
};
