import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";

export default function SimulationsGrid({ data }) {
  return (
    <React.Fragment>
      <Title>Recent Screenings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>AQ-Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((screening, index) => (
            <TableRow key={index}>
              <TableCell>{screening.id}</TableCell>
              <TableCell>{screening.date}</TableCell>
              <TableCell>{screening.age}</TableCell>
              <TableCell>{screening.AQ}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
