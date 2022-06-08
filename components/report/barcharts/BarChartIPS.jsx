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
  const selectedSim = data.filter((sim) => sim.id === selectedId).pop();
  return [
    {
      name: "Before socializing",
      towards: selectedSim["ipsAtowards"],
      from: selectedSim["ipsAfrom"],
    },
    {
      name: "After socializing",
      towards: selectedSim["ipsBtowards"],
      from: selectedSim["ipsBfrom"],
    },
  ];
};
export default function BarChartIPS({ data, selectedSimId }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={getData(data, selectedSimId)}
        margin={{
          top: 5,
        }}
        style={{ fontSize: "15px" }}
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
