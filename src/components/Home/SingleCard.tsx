import { LucideIcon } from "lucide-react";

interface SingleCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export default function SingleCard({ title, desc, icon: Icon }: SingleCardProps) {
  return (
    <div className="flex flex-col items-center p-10 pb-16 text-center sm:p-32">
      <div className="rounded-full border-2 border-biscay bg-white p-3">
        <Icon className="h-8 w-8 text-biscay" />
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-xl font-bold text-biscay">{title}</h1>
        <p className="text-justify text-xl sm:text-2xl">{desc}</p>
      </div>
    </div>
  );
}
