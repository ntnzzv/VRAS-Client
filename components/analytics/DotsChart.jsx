import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ZAxis,
} from "recharts";

const data01 = [
  { x: 100, y: Math.round(Math.random() * 100) % 30, z: 100 },
  { x: 120, y: Math.round(Math.random() * 100) % 30, z: 100 },
  { x: 170, y: Math.round(Math.random() * 100) % 30, z: 100 },
  { x: 140, y: Math.round(Math.random() * 100) % 30, z: 100 },
  { x: 150, y: Math.round(Math.random() * 100) % 30, z: 100 },
  { x: 110, y: Math.round(Math.random() * 100) % 30, z: 100 },
];
const data02 = [
  { x: 200, y: Math.round((Math.random() + 0.3) * 100) % 50, z: 100 },
  { x: 240, y: Math.round((Math.random() + 0.3) * 100) % 50, z: 100 },
  { x: 190, y: Math.round((Math.random() + 0.3) * 100) % 50, z: 100 },
  { x: 198, y: Math.round((Math.random() + 0.3) * 100) % 50, z: 100 },
  { x: 180, y: Math.round((Math.random() + 0.3) * 100) % 50, z: 100 },
  { x: 210, y: Math.round((Math.random() + 0.3) * 100) % 50, z: 100 },
];

export default function DotsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" range={[0, 500]} name="IPS" unit="cm" />
        <YAxis type="number" dataKey="y" range={[0, 50]} name="AQ" />
        <ZAxis type="number" dataKey="z" range={[0, 200]} />

        <Tooltip cursor={{ strokeDasharray: "2 2" }} />
        <Legend />
        <Scatter name="Typical Development" data={data01} fill="#8884d8" shape="star" />
        <Scatter name="Austic Spectrum Disorder" data={data02} fill="#82ca9d" shape="triangle" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
