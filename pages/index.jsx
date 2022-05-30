import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../components/Chart";
import Deposits from "../components/Deposits";
import Orders from "../components/Orders";
import firebase from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export default function Home() {
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
              <Chart />
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
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
