import React from "react";
import { Bar, ChartData } from "react-chartjs-2";

interface Props {
  height: number;
  data: ChartData<Chart.ChartData>;
}

const ChartBar: React.FC<Props> = ({ height, data }) => {
  return (
    <Bar
      height={height}
      data={data ?? null}
      options={{
        responsive: true,
      }}
    />
  );
};

export default ChartBar;
