import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SimulationsGrid from "./SimulationsGrid";
import ClassificationsAmount from "./ClassificationsAmount";
import SimulationsAmount from "./SimulationsAmount";
export default function DashboardPage({ data }) {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={10} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 400,
              }}
            >
              <SimulationsAmount data={data} />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                height: 400,
                p: 3,
              }}
            >
              <ClassificationsAmount data={data} />
            </Paper>
          </Grid>
          {/* Recent Orders */}
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
