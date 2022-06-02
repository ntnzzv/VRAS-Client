import React from "react";

import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "Age",
    headerName: "Age",
    width: 60,
  },
  {
    field: "date",
    headerName: "Screening Date",
    width: 120,
  },
  {
    field: "AQ",
    headerName: "AQ Score",
    width: 120,
  },
  {
    field: "delta-ips",
    headerName: "Δ-IPS (cm)",
    width: 120,
  },
  {
    field: "avg-ips-A",
    headerName: "IPS-before (cm)",
    width: 120,
  },
  {
    field: "avg-ips-B",
    headerName: "IPS-after (cm)",
    width: 120,
  },
  {
    field: "average-ips",
    headerName: "Average-IPS (cm)",
    width: 140,
  },
  {
    field: "Classification",
    headerName: "Classification",
    width: 120,
  },
];

export default function DataGridDemo({ data, setSelectedSimId }) {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection={false}
        pagination
        pageSize={10}
        onSelectionModelChange={(id) => setSelectedSimId(id.pop())}
      />
    </div>
  );
}
