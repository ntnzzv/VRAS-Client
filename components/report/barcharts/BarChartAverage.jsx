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
  const selectedSim = data.filter((sim) => sim.id === selectedSimId);

  return [
    {
      name: "Average-IPS",
      before: selectedSim[0]["avg-ips-A"],
      after: selectedSim[0]["avg-ips-B"],
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
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis unit="cm" />
        <Tooltip />
        <Legend />
        <Bar name="Before social stage" dataKey="before" fill="#8884d8" />
        <Bar name="After social stage" dataKey="after" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
