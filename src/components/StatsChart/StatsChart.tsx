import * as React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { StatsProps } from "../../Types/appTypes";
import "../StatsChart/StatsChart.css";
import { theme } from "antd";

export type ChartDataProps = {
  StatData: StatsProps[];
};

export const StatsChart = ({ StatData }: ChartDataProps) => {
  const chartData = StatData.map((item) => {
    return {
      value: item.base_stat,
      label: item.stat.name.toUpperCase(),
    };
  });

  return (
    <div className="chart_container">
      <ResponsiveBar
        indexBy={"label"}
        keys={["value"]}
        data={chartData}
        groupMode="grouped"
        layout="horizontal"
        padding={0.55}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        margin={{ right: 110, bottom: 60, left: 120 }}
        labelSkipWidth={50}
        labelSkipHeight={50}
        innerPadding={7}
        enableGridY={false}
        enableGridX={false}
        enableLabel={false}
        colors={{ scheme: "nivo" }}
        axisBottom={null}
      />
    </div>
  );
};
