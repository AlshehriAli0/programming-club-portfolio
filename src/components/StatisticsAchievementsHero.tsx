"use client";
import { content } from "@/content";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function StatisticsAchievementsHero() {
  return (
    <div className="mx-auto mt-20 flex max-w-[85rem] flex-col items-center justify-center bg-white text-biscay">
      <h1 className="text-3xl font-semibold md:text-4xl">{content.statisticsachievements.hero.title}</h1>

      <div className="mt-20 flex flex-wrap justify-center gap-10 space-x-0">
        {content.statisticsachievements.hero.cards.map((card, idx) => {
          const chartData = {
            labels: card.counts.map((item) => item.name),
            datasets: [
              {
                data: card.counts.map((item) => item.value),
                backgroundColor: ["#007aff", "#f4f4f4", "#888888", "#6499a2", "#87dad2"],
              },
            ],
          };

          const colors = chartData.datasets[0].backgroundColor;

          return (
            <div key={idx} className="relative h-[395px] w-[335px] rounded-3xl bg-dark-blue p-5">
              <h1 className="font mx-auto w-3/4 text-center text-2xl text-primary-white">{card.title}</h1>

              <div className="absolute bottom-0 left-0 right-0 flex h-[300px] items-center justify-between rounded-b-3xl p-3">
                {card.type === "pie" ? (
                  <div className="mb-5 flex w-2/3 items-center justify-center">
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
                            color: "#eee",
                          },
                        },
                        x: {
                          ticks: {
                            color: "#eee",
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
                  <div className="flex w-1/3 flex-col items-start pl-3">
                    {chartData.labels.map((label, index) => (
                      <div key={index} className="mb-2 flex items-center">
                        <div
                          className="h-4 w-4 rounded-full"
                          style={{ backgroundColor: colors[index] }}
                        ></div>
                        <span className="ml-2 text-sm text-primary-white">{label}</span>
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
