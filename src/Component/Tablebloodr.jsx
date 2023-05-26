import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ColorButtons2 } from "./Btn2";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  {PatientName: "karuna sarawat",Age:"23", Reason:"fever",BloodGroup: "B+", Unit:"90",Date:"3/12/22",Status:"pending" },
  {PatientName: "ankush saxena", Age:"24",Reason:"fever",BloodGroup: "A", Unit:"10",Date:"3/12/22",Status:"pending"},
  {PatientName: "ganesh patida", Age:"26",Reason:"fever",BloodGroup: "O", Unit:"8",Date:"3/12/22",Status:"pending"},//type notation,hover
];

export  function Table4() {
  return (
    <div style={{display:"flex",float:"right"}}>
    
      <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Patient Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Reason</StyledTableCell>

              <StyledTableCell align="right">BloodGroup</StyledTableCell>
              <StyledTableCell align="right">Unit</StyledTableCell>

              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right"style={{textAlign:"center"}}>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.PatientName}>
                <StyledTableCell component="th" scope="row">
                  {row.PatientName}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Age}</StyledTableCell>
                <StyledTableCell align="right">{row.Reason}</StyledTableCell>

                <StyledTableCell align="right">{row.BloodGroup}</StyledTableCell>
                <StyledTableCell align="right">{row.Unit}</StyledTableCell>
                <StyledTableCell align="right">{row.Date}</StyledTableCell>

                <StyledTableCell align="right">{row.Status}</StyledTableCell>
                <StyledTableCell align="right"><ColorButtons2/></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table> 
      </TableContainer>
    </div>
    
  );
}
