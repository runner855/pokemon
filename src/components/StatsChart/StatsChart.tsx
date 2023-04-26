import * as React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { StatsProps } from "../../Types/appTypes";
import "../StatsChart/StatsChart.css";

export type ChartDataProps = {
  StatData: StatsProps[];
};

export const StatsChart = ({ StatData }: ChartDataProps) => {
  const chartData = StatData.map((item) => {
    return {
      label: `${item.stat.name.toUpperCase().replace("-", " ")}`,
      value: item.base_stat,
    };
  });
  const updatedChart = chartData.reverse();

  const colors: Record<string, string> = {
    SPEED: "red",
    "SPECIAL DEFENSE": "lime",
    "SPECIAL ATTACK": "lime",
    DEFENSE: "red",
    ATTACK: "lime",
    HP: "red",
    TOTAL: "green",
  };

  const getColor = (label: { indexValue: string | number }) =>
    colors[label.indexValue];

  return (
    <div className="chart_container">
      <ResponsiveBar
        indexBy={"label"}
        keys={["value"]}
        data={updatedChart}
        groupMode="grouped"
        layout="horizontal"
        padding={0.85}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        margin={{ right: 110, bottom: 60, left: 120 }}
        labelSkipWidth={50}
        labelSkipHeight={50}
        enableGridY={false}
        enableGridX={false}
        enableLabel={false}
        axisBottom={null}
        axisLeft={{ tickSize: 0, tickPadding: 10 }}
        colors={getColor}
      />
    </div>
  );
};
