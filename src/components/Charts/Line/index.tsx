import React from "react";
import { Line, ChartData } from "react-chartjs-2";

interface Props {
  height: number;
  data: ChartData<Chart.ChartData>;
}

const ChartLine: React.FC<Props> = ({ height, data }) => {
  return (
    <Line
      data={data ?? null}
      options={{
        responsive: true,
      }}
    />
  );
};

export default ChartLine;
