import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

export default function Deposits() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              {new Date().toDateString()}
            </Typography>
          </div>
        </div>
        <div>
          <Title>Overall Screenings Done</Title>
          <Typography component="p" variant="h4">
            25
          </Typography>
        </div>
        <div>
          <Title>ASD Classifications</Title>
          <Typography component="p" variant="h4">
            20
          </Typography>
        </div>
        <div>
          <Title>TD Classifications</Title>
          <Typography component="p" variant="h4">
            5
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
}
