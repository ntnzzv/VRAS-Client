import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Average-IPS",
    before: 230,
    after: 197,
  },
];
const getData = (data, selectedSimId) => {
  const selectedSim = data.filter((sim) => sim.id === selectedSimId).pop();

  return [
    {
      name: "Average-IPS",
      before: selectedSim["avg-ips-A"],
      after: selectedSim["avg-ips-B"],
    },
  ];
};
export default function BarChartAverage({ data, selectedSimId }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={getData(data, selectedSimId)}
        margin={{
          top: 5,
          bottom: 19,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis unit="cm" />
        <Tooltip />
        <Legend />
        <Bar name="Before socializing" dataKey="before" fill="#8884d8" />
        <Bar name="After socializing" dataKey="after" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
