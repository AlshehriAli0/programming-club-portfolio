import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  cover: string;
  title: string;
  type: string;
  href: string;
}

export const ArticleCard = ({ cover, title, type, href }: ArticleCardProps) => {
  return (
    <div className="flex h-[32rem] w-[23rem] flex-col rounded-3xl bg-[#E4E4E4]">
      <div className="relative h-full w-full">
        <Image
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={cover}
          alt={cover}
          fill
          className="rounded-t-3xl object-cover"
        />
      </div>
      <div className="flex min-h-60 w-full flex-col justify-between rounded-3xl bg-biscay p-5">
        <div className="w-fit rounded-3xl bg-[#E4E4E4] px-2 text-sm font-bold text-biscay">{type}</div>
        <div className="text-2xl font-bold text-white">{title}</div>
        <div className="flex w-full justify-end">
          <Link
            className="w-fit rounded-3xl bg-smalt-blue px-3 py-1 text-lg font-semibold text-white transition hover:bg-smalt-blue/50"
            href={href}
          >
            Read Now
          </Link>
        </div>
      </div>
    </div>
  );
};
