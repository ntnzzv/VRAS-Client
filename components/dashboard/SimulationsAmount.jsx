import React from "react";
import { useTheme } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from "recharts";
import Title from "../Title";

function createData(simulationsData) {
  let datesAmount = new Map();
  simulationsData.map((sim) => {
    if (!datesAmount.has(sim.date.split(" ")[0])) {
      datesAmount.set(sim.date.split(" ")[0], 1);
    } else {
      datesAmount.set(sim.date.split(" ")[0], datesAmount.get(sim.date.split(" ")[0]) + 1);
    }
  });
  return Array.from(datesAmount, ([date, amount]) => ({ date, amount }));
}

export default function SimulationsAmount({ data }) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Title>This Week</Title>
      <ResponsiveContainer>
        <LineChart
          data={createData(data).sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.date) - new Date(b.date);
          })}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="date"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2}>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Screenings
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
