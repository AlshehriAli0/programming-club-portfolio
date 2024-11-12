import Image from "next/image";

interface ArticleCardProps {
  cover: string;
  title: string;
  type: string;
  href: string;
}

export const ArticleCard = ({ cover, title, type, href }: ArticleCardProps) => {
  return (
    <div className="flex h-[30rem] max-w-[23rem] flex-col rounded-3xl bg-[#E4E4E4]">
      <div className="relative h-full w-full">
        <Image src={cover} alt={cover} layout="fill" objectFit="cover" className="rounded-t-3xl" />
      </div>
      <div className="flex min-h-60 w-full flex-col justify-between rounded-3xl bg-biscay p-5">
        <div className="w-fit rounded-3xl bg-[#E4E4E4] px-2 text-sm font-bold text-biscay">{type}</div>
        <div className="text-2xl font-bold text-white">{title}</div>
        <div className="flex w-full justify-end">
          <a
            className="w-fit rounded-3xl bg-smalt-blue px-2.5 py-1 text-lg font-semibold text-white transition hover:bg-smalt-blue/50"
            href={href}
          >
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
};
