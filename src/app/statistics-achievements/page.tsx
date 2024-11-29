import StatisticsAchievementsHero from "@/components/StatisticsAchievementsHero";
import StatisticsAchievementsMembers from "@/components/StatisticsAchievementsMembers";
import StatisticsAchievementsTrack from "@/components/StatisticsAchievementsTrack";

export default function StatisticsAchievements() {
  return (
    <main className="bg-white">
      <header
        className="h-[250px] w-full overflow-hidden"
        style={{
          backgroundImage: "url('/bg-header.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></header>
      <StatisticsAchievementsHero />
      <StatisticsAchievementsTrack />
      <StatisticsAchievementsMembers />
    </main>
  );
}
