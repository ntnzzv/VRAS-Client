import DotsChart from "./DotsChart";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Title from "../Title";
import SimulationsGrid from "../report/SimulationsGrid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
export default function AnalyticsPage({ data }) {
  const [xAxisVal, setxAxisVal] = React.useState(1);
  const [yAxisVal, setyAxisVal] = React.useState(1);
  const [selectedSimId, setSelectedSimId] = React.useState(1);
  const selectedSim = data.filter((sim) => sim.id === selectedSimId).pop();
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Deposits */}

          {/* Chart */}
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 500,
              }}
            >
              <Title>Data Correlations</Title>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginRight: "20px",
                  marginTop: "10px",
                }}
              >
                <FormControl sx={{ ml: 3, minWidth: 120 }}>
                  <InputLabel sx={{ top: -10 }}>Y-Axis</InputLabel>
                  <Select value={yAxisVal} onChange={(e) => setyAxisVal(e.target.value)}>
                    <MenuItem value={1}>AQ-Score</MenuItem>
                    <MenuItem value={2}>Δ-IPS</MenuItem>
                    <MenuItem value={3}>Average-IPS</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ ml: 3, minWidth: 120 }}>
                  <InputLabel sx={{ top: -10 }}>X-Axis</InputLabel>
                  <Select value={xAxisVal} onChange={(e) => setxAxisVal(e.target.value)}>
                    <MenuItem value={1}>AQ-Score</MenuItem>
                    <MenuItem selected value={2}>
                      Δ-IPS
                    </MenuItem>
                    <MenuItem value={3}>Average-IPS</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <DotsChart
                data={data}
                selectedX={xAxisVal}
                selectedY={yAxisVal}
                selectedSim={selectedSim}
              />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <SimulationsGrid data={data} setSelectedSimId={setSelectedSimId} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
