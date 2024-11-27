'use client';
import { content } from "@/content";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

export default function StatisticsAchievementsHero() {
    return (
        <div className="flex flex-col items-center justify-center mt-20 text-biscay mx-auto max-w-[85rem]">
            <h1 className="text-3xl font-semibold md:text-4xl">{content.statisticsachievements.hero.title}</h1>

            <div className="flex flex-wrap justify-center space-x-0 mt-20 gap-10">
                {content.statisticsachievements.hero.cards.map((card, idx) => {
                    const chartData = {
                        labels: card.counts.map((item) => item.name),
                        datasets: [
                            {
                                data: card.counts.map((item) => item.value),
                                backgroundColor: [
                                    "#007aff",
                                    "#f4f4f4",
                                    "#888888",
                                    "#6499a2",
                                    "#87dad2",
                                ],
                            },
                        ],
                    };

                    const colors = chartData.datasets[0].backgroundColor;

                    return (
                        <div
                            key={idx}
                            className="w-[335px] h-[395px] bg-dark-blue rounded-3xl p-5 relative"
                        >
                            <h1 className="text-2xl text-primary-white w-3/4 mx-auto text-center font">
                                {card.title}
                            </h1>

                            <div className="absolute p-3 bottom-0 left-0 right-0 h-[300px] rounded-b-3xl flex items-center justify-between">
                                {card.type === "pie" ? (
                                    <div className="flex mb-5 justify-center items-center w-2/3">
                                        <Pie
                                            data={chartData}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                plugins: {
                                                    legend: { display: false },
                                                },
                                            }}
                                            height={200}
                                            width={200}
                                        />
                                    </div>
                                ) : card.type === "bar" ? (
                                    <Bar
                                        data={chartData}
                                        options={{
                                            responsive: true,
                                            scales: {
                                                y: {
                                                    max: 100,
                                                    min: 0,
                                                    ticks: {
                                                        stepSize: 10,
                                                        color: '#eee',
                                                    },
                                                },
                                                x: {
                                                    ticks: {
                                                        color: '#eee',
                                                    },
                                                },
                                            },
                                            plugins: {
                                                legend: { display: false },
                                            },
                                        }}
                                        height={280}
                                    />
                                ) : null}

                                {card.type === "pie" && (
                                    <div className="flex flex-col items-start w-1/3 pl-3">
                                        {chartData.labels.map((label, index) => (
                                            <div key={index} className="flex items-center mb-2">
                                                <div
                                                    className="w-4 h-4 rounded-full"
                                                    style={{ backgroundColor: colors[index] }}
                                                ></div>
                                                <span className="ml-2 text-sm text-primary-white">
                                                    {label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
