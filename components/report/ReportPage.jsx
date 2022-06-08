import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Title from "../Title";
import Typography from "@mui/material/Typography";
import BarChartAverage from "./barcharts/BarChartAverage";
import BarChartIPS from "./barcharts/BarChartIPS";
import React from "react";
import SimulationsGrid from "./SimulationsGrid";
export default function ReportsPage({ data }) {
  const [selectedSimId, setSelectedSimId] = React.useState(1);
  const selectedSim = data.filter((sim) => sim.id === selectedSimId).pop();
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item sm={3} xs={12}>
            <Paper
              sx={{
                p: 0,
                display: "flex",
                flexDirection: "column",
                height: 500,
              }}
            >
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Title>Screening report</Title>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ marginBottom: "30px" }}>
                  <div style={{ fontSize: "1.6em" }}>ID</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {selectedSimId}
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: "30px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5em" }}>Age</div>
                  <div>{selectedSim.age}</div>
                </div>
                <div style={{ marginBottom: "40px" }}>
                  <div style={{ fontSize: "1.5em" }}>Screening Date</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {selectedSim.date}
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "9px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "10px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ fontSize: "1em" }}>AQ Score</div>
                    <div>
                      <b>{selectedSim.AQ}</b>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ fontSize: "1em" }}>Δ-IPS</div>
                    <div>
                      <b>{`${selectedSim["delta-ips"]}(cm)`}</b>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ fontSize: "1em" }}>Average IPS</div>
                    <div>
                      <b>{`${selectedSim["average-ips"]}(cm)`}</b>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item sm={9} xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 193,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Title>System Classification</Title>
                  </div>
                  <div style={{ marginTop: "5px", display: "flex", justifyContent: "center" }}>
                    <Typography variant="h1" gutterBottom component="div">
                      {selectedSim.classification}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "row",
                    height: 300,
                  }}
                >
                  <BarChartAverage data={data} selectedSimId={selectedSimId} />
                </Paper>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Paper
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "row",
                    height: 300,
                  }}
                >
                  <BarChartIPS data={data} selectedSimId={selectedSimId} />
                </Paper>
              </Grid>
            </Grid>
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
