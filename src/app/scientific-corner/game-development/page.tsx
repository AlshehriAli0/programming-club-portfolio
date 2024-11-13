import { GameDevHero } from "@/components/GameDevHero";
import { RecordedMeetings } from "@/components/RecordedMeetings";

const page = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-[85rem] flex-col gap-10 pb-20 md:px-10">
      <GameDevHero />
      <RecordedMeetings />
    </main>
  );
};

export default page;
