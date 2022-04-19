import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from "recharts";
import Title from "./Title";

function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("04/05", 0),
  createData("05/05", 3),
  createData("06/05", 6),
  createData("07/05", 7),
  createData("08/05", 10),
  createData("09/05", 13),
  createData("10/05", 20),
  createData("13/05", 25),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>This Week</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
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
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
