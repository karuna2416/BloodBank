import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ColorButtons3 } from "./Btn3";
import axios from "axios";
import { useState,useEffect } from "react";
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

// const rows = [
//   {PatientName: "karuna sarawat",Age:"23", Reason:"fever",BloodGroup: "B+", Unit:"90",Date:"3/12/22",Status:"pending" },
//   {PatientName: "ankush saxena", Age:"24",Reason:"fever",BloodGroup: "A", Unit:"10",Date:"3/12/22",Status:"pending"},
//   {PatientName: "ganesh patida", Age:"26",Reason:"fever",BloodGroup: "O", Unit:"8",Date:"3/12/22",Status:"pending"},//type notation,hover
// ];

export  function Table3() {
  const [donorData,setDonorData]=useState([])
  useEffect(()=>{
axios.get("http://localhost:5000/getdonatedata").then((res)=>{
  console.log(res)
setDonorData(res.data)
}).catch((err)=>{
  console.log(err)
})
  },[])
  return (
    <div style={{display:"flex",float:"right"}}>
    
      <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>firstname</StyledTableCell>
              <StyledTableCell align="right">lastname</StyledTableCell>
              <StyledTableCell align="right">age</StyledTableCell>

              <StyledTableCell align="right">bloodgroup</StyledTableCell>
              <StyledTableCell align="right">address</StyledTableCell>

              <StyledTableCell align="right">mobileno</StyledTableCell>
              {/* <StyledTableCell align="right">Status</StyledTableCell> */}
              <StyledTableCell align="right"style={{textAlign:"center"}}>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donorData.map((row) => (
              <StyledTableRow key={row.firstname}>
                <StyledTableCell component="th" scope="row">
                  {row.firstname}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.lastname}
                </StyledTableCell>

                <StyledTableCell align="right">{row.age}</StyledTableCell>
                {/* <StyledTableCell align="right">{row.Reason}</StyledTableCell> */}

                <StyledTableCell align="right">{row.bloodgroup}</StyledTableCell>
                <StyledTableCell align="right">{row.address}</StyledTableCell>
                <StyledTableCell align="right">{row.mobileno}</StyledTableCell>

                {/* <StyledTableCell align="right">{row.Status}</StyledTableCell> */}
                <StyledTableCell align="right"><ColorButtons3/></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table> 
      </TableContainer>
    </div>
    
  );
}
