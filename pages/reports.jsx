import DotsChart from "../components/DotsChart";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Title from "../components/Title";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import BarChartAverage from "../components/BarCharts/BarChartAverage";
import BarChartIPS from "../components/BarCharts/BarChartIPS";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grido from "../components/Grido";
export default function dotschart() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container direction="row" spacing={3}>
          {/* Recent Deposits */}

          {/* Chart */}
          <Grid item xs={3}>
            <Paper
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                height: 500,
              }}
            >
              <div style={{ marginTop: "30px" }}>
                <Title>Screening report</Title>
              </div>
              <div style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
                <div style={{ marginBottom: "12px" }}>
                  <div style={{ fontSize: "1.3em" }}>ID</div>
                  <div>12</div>
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <div style={{ fontSize: "1.3em" }}>Name</div>
                  <div>Jacob Johnson</div>
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <div style={{ fontSize: "1.3em" }}>Age</div>
                  <div>35</div>
                </div>
                <div style={{ marginBottom: "50px" }}>
                  <div style={{ fontSize: "1.3em" }}>Screening Date</div>
                  <div>15/05/2021</div>
                </div>
                <div
                  style={{ marginBottom: "9px", display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ fontSize: "1em" }}>AQ Score</div>
                    <div>
                      <b>15</b>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ fontSize: "1em" }}>Δ-IPS</div>
                    <div>
                      <b>18cm</b>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ fontSize: "1em" }}>Average IPS</div>
                    <div>
                      <b>235cm</b>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={9}>
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
                      TD
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    height: 300,
                  }}
                >
                  <BarChartAverage />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    height: 300,
                  }}
                >
                  <BarChartIPS />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Grido />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
