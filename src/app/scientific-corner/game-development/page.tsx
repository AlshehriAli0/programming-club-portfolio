import { GameDevHero } from "@/components/GameDevHero";

const page = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-[85rem] flex-col gap-28 pb-20 md:px-10">
      <GameDevHero />
    </main>
  );
};

export default page;
