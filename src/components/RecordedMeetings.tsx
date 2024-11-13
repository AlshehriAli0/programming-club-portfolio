import { content } from "@/content";
import { GameDevMeetingCard } from "./GameDevMeetingCard";

export const RecordedMeetings = () => {
  return (
    <div className="w-full flex-col">
      <h2 className="text-center text-6xl font-semibold text-biscay">All Recorded Meetings</h2>
      <div className="grid w-full grid-cols-1 justify-items-center gap-x-5 gap-y-7 py-20 lg:grid-cols-2 xl:grid-cols-3">
        {content.gameDev.meetings.map((meeting, idx) => (
          <GameDevMeetingCard
            key={idx}
            cover={meeting.cover}
            type={"Game Development"}
            date={meeting.date}
            link={meeting.link}
            title={meeting.title}
          />
        ))}
      </div>
    </div>
  );
};
