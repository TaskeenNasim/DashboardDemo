import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function DoughChart({ width, height }) {
  const options = {
    animationEnabled: true,
    subtitles: [
      {
        text: "65% Total new Customers",
        verticalAlign: "center",
        fontSize: 8,
        dockInsidePlotArea: true,
      },
    ],
    width: width,
    height: height,

    data: [
      {
        type: "doughnut",
        dataPoints: [
          { name: "", y: 12, color: "lightblue" },
          { name: "", y: 10, color: "#F1EFEF" },
          { name: "", y: 7 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default DoughChart;



