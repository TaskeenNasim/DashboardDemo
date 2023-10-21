import * as React from "react";
import { ChartContainer, BarPlot } from "@mui/x-charts";

const uData = [
  2000, 1500, 2500, 1580, 2090, 1330, 3000, 3490, 3410, 3300, 3200, 3490,
];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
  "Page H",
  "Page I",
  "Page J",
  "Page k",
  "Page L",
];
function BarChart({ width, height, barWidth }) {
  return (
    <ChartContainer
      width={width}
      height={height}
      barWidth={barWidth}
      series={[{ data: uData, label: "uv", type: "bar" }]}
      xAxis={[{ scaleType: "band", data: xLabels }]}
    >
      <BarPlot label={{ position: "bottom" }} />
    </ChartContainer>
  );
}

export default BarChart;

