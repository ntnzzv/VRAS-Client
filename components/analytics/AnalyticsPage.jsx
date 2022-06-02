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

export default function AnalyticsPage({ data }) {
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
              <Title>Classification and Data Correlation</Title>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <FormControl sx={{ ml: 3, minWidth: 120 }}>
                  <InputLabel>Y-Axis</InputLabel>
                  <Select value={1} label="Age">
                    <MenuItem value={1}>AQ-Score</MenuItem>
                    <MenuItem value={2}>Δ-IPS</MenuItem>
                    <MenuItem value={3}>Average-IPS</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ ml: 3, minWidth: 120 }}>
                  <InputLabel>X-Axis</InputLabel>
                  <Select value={3} label="Age">
                    <MenuItem value={1}>AQ-Score</MenuItem>
                    <MenuItem value={2}>Δ-IPS</MenuItem>
                    <MenuItem value={3}>Average-IPS</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <DotsChart />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <SimulationsGrid data={data} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
