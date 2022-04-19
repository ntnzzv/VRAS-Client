import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
    editable: true,
  },
  {
    field: "Date",
    headerName: "Screening Date",
    width: 150,
  },
  {
    field: "AQ",
    headerName: "AQ Score",
    width: 100,
  },
  {
    field: "deltaIPS",
    headerName: "Δ-IPS",
    width: 100,
  },
  {
    field: "averageIPS",
    headerName: "Average-IPS",
    width: 120,
  },
  {
    field: "Classification",
    headerName: "Classification",
    width: 120,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    Date: "15/05/2021",
    AQ: 15,
    deltaIPS: "-6cm",
    averageIPS: "240cm",
    Classification: "ASD",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    Date: "02/05/2021",
    AQ: 25,
    deltaIPS: "15cm",
    averageIPS: "180cm",
    Classification: "TD",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    Date: "27/05/2021",
    AQ: 30,
    deltaIPS: "-4cm",
    averageIPS: "190cm",
    Classification: "ASD",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    Date: "04/05/2021",
    AQ: 7,
    deltaIPS: "1cm",
    averageIPS: "150cm",
    Classification: "ASD",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    Date: "17/05/2021",
    AQ: 3,
    deltaIPS: "5cm",
    averageIPS: "120cm",
    Classification: "ASD",
  },
  {
    id: 6,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    Date: "15/05/2021",
    AQ: 15,
    deltaIPS: "30cm",
    averageIPS: "160cm",
    Classification: "TD",
  },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 900, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
