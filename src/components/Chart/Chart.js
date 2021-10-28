import React from "react";

import ChartBar from "./ChartBar";
import "./ChartBar.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint.value); //transforming to numbers
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
