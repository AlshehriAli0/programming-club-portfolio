import { content } from "@/content";
import { CalendarDays, Crown } from "lucide-react";
import Image from "next/image";

export default function StatisticsAchievementsMembers() {
  const sortedMembers = [...content.statisticsachievements.members.members].sort((a, b) => b.hours - a.hours);

  return (
    <div className="mx-auto mb-14 mt-[-200px] flex max-w-[85rem] flex-col bg-white px-5 text-biscay">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">{content.statisticsachievements.members.title}</h1>
        <CalendarDays className="h-10 w-10" />
      </div>

      <div className="mt-20 flex justify-center bg-white">
        <div className="flex space-x-8">
          {content.statisticsachievements.members.members.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative">
                <Image src={member.image} alt="" width={200} height={200} />
                {member === sortedMembers[0] && (
                  <Crown className="absolute right-0 top-0 h-12 w-12 rotate-45" strokeWidth={3} />
                )}
              </div>
              <h2 className="text-2xl">{member.name}</h2>
              <p className="text-xl text-gray-400">{member.hours} Hours</p>
              <p className="rounded-md bg-dark-blue px-3 py-[2px] text-xl text-white">{member.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
