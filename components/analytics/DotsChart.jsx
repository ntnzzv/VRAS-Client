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
} from "recharts";

export default function DotsChart({ data, selectedX, selectedY, selectedSim }) {
  const mapAxisValToName = (val) => {
    if (val === 1) return "AQ";
    else if (val === 2) return "delta-ips";
    return "average-ips";
  };
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
        <XAxis
          type="number"
          dataKey={mapAxisValToName(selectedX)}
          name={mapAxisValToName(selectedX)}
          unit={mapAxisValToName(selectedX) !== "AQ" ? "cm" : ""}
        />
        <YAxis
          type="number"
          dataKey={mapAxisValToName(selectedY)}
          name={mapAxisValToName(selectedY)}
          unit={mapAxisValToName(selectedY) !== "AQ" ? "cm" : ""}
        />

        <Tooltip cursor={{ strokeDasharray: "2 2" }} />
        <Legend />
        <Scatter
          name="Typical Development"
          data={data.filter((item) => item.classification === "TD")}
          fill="#8884d8"
          shape="star"
        />
        <Scatter
          name="Austic Spectrum Disorder"
          data={data.filter((item) => item.classification === "ASD")}
          fill="#82ca9d"
          shape="triangle"
        />
        <Scatter
          name="Selected"
          data={data.filter((item) => item.id === selectedSim.id)}
          fill="#ff6666"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
