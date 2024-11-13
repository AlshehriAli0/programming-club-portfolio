import Image from "next/image";
import Link from "next/link";

interface GameDevMeetingCardProps {
  cover: string;
  type: string;
  date: string;
  link: string;
  title: string;
}

export const GameDevMeetingCard = ({ cover, type, date, link, title }: GameDevMeetingCardProps) => {
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
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <div className="text-center text-2xl font-bold text-white underline">{date}</div>
          <Link className="text-center text-2xl font-bold text-white underline" href={link}>
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};
