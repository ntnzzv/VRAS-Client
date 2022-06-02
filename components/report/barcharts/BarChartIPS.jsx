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
    name: "Before socializing",
    before: 250,
  },
  {
    name: "After socializing",
    after: 190,
  },
];
const getData = (data, selectedId) => {
  const selectedSim = data.filter((sim) => sim.id === selectedId);
  return [
    {
      name: "Before socializing",
      towards: selectedSim[0]["ips-A-towards"],
      from: selectedSim[0]["ips-A-from"],
    },
    {
      name: "After socializing",
      towards: selectedSim[0]["ips-B-towards"],
      from: selectedSim[0]["ips-B-from"],
    },
  ];
};
export default function BarChartIPS({ data, selectedSimId }) {
  console.log(data);
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
        <Bar name="IPS: Character walks towards user" dataKey="towards" fill="#EEAAAF" />
        <Bar name="IPS: Character walks from user" dataKey="from" fill="#11caFF" />
      </BarChart>
    </ResponsiveContainer>
  );
}
