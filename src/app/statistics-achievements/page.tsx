import StatisticsAchievementsHero from "@/components/StatisticsAchievementsHero";
import StatisticsAchievementsTrack from "@/components/StatisticsAchievementsTrack";
import StatisticsAchievementsMembers from "@/components/StatisticsAchievementsMembers";

export default function StatisticsAchievements() {
    return (
        <main>
            <header
                className="w-full h-[250px] overflow-hidden"
                style={{
                    backgroundImage: "url('/bg-header.svg')",
                    backgroundSize: "cover", 
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
            </header>
            <StatisticsAchievementsHero />
            <StatisticsAchievementsTrack />
            <StatisticsAchievementsMembers />
            <footer
                className="w-full h-[450px] overflow-hidden"
                style={{
                    backgroundImage: "url('/bg-footer.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
            </footer>
        </main>
    );
}
