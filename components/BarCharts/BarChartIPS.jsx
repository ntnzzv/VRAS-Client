import React, { PureComponent } from "react";
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
    after: 230,
  },
  {
    name: "After socializing",
    before: 200,
    after: 190,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
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
          <Bar name="IPS: Character walks towards user" dataKey="before" fill="#EEAAAF" />
          <Bar name="IPS: Character walks from user IPS" dataKey="after" fill="#11caFF" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
