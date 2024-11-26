import { content } from "@/content";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { Crown } from "lucide-react";

export default function StatisticsAchievementsMembers() {

    const sortedMembers = [...content.statisticsachievements.members.members].sort((a, b) => b.hours - a.hours);


    return (
        <div className="flex flex-col text-biscay mt-[-200px] mx-auto max-w-[85rem] mb-14">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl">{content.statisticsachievements.members.title}</h1>
                <CalendarDays className="w-10 h-10" />
            </div>

            <div className="flex justify-center mt-20">
                <div className="flex space-x-8">
                    {content.statisticsachievements.members.members.map((member, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="relative">
                                <Image src={member.image} alt="" width={200} height={200} />
                                {member === sortedMembers[0] && (
                                    <Crown className="w-12 h-12 absolute top-0 right-0 rotate-45" strokeWidth={3} />
                                )}
                            </div>
                            <h2 className="text-2xl">{member.name}</h2>
                            <p className="text-xl text-gray-400">{member.hours} Hours</p>
                            <p className="text-xl text-white py-[2px] px-3 rounded-md bg-dark-blue">{member.unit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
