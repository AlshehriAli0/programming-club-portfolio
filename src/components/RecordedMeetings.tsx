import { content } from "@/content";
import { GameDevMeetingCard } from "./GameDevMeetingCard";

interface Meeting {
  date: string;
  cover: string;
  title: string;
  link: string;
}

export const RecordedMeetings = () => {
  const meetings = content.gameDev.meetings as Meeting[];

  return (
    <div className="w-full flex-col">
      <h2 className="text-center text-6xl font-semibold text-biscay">All Recorded Meetings</h2>
      <div className="grid w-full grid-cols-1 justify-items-center gap-x-5 gap-y-7 py-20 lg:grid-cols-2 xl:grid-cols-3">
        {meetings.length > 0 ? (
          meetings.map((meeting, idx) => (
            <GameDevMeetingCard
              key={idx}
              cover={meeting.cover}
              type={"Game Development"}
              date={meeting.date}
              link={meeting.link}
              title={meeting.title}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-16">
            <h3 className="text-3xl font-bold text-biscay">Coming Soon</h3>
            <p className="mt-4 text-center text-xl text-gray-600">
              No recorded meetings available yet. Check back later!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
