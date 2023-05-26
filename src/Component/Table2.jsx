import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Button } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ColorButtonsnext } from "./Btn1.2";
import { useState, useEffect } from "react";
import axios from "axios";
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
//   { Name: "karuna sarawat",Age:"23", Disease:"cancer",BloodGroup: "B+", Address: "indore", Mobile: "7487483223" },
//   { Name: "ankush saxena", Age:"24",Disease:"cancer",BloodGroup: "A", Address: "indore", Mobile: "7487483223"},
//   { Name: "ganesh patida", Age:"26",Disease:"cancer",BloodGroup: "O", Address: "indore", Mobile: "7487483223"},
// ];

export function Table2() {
  const [patientData, setPatientData] = useState([]);
  const apiCall = () => {
    axios.get("http://localhost:5000/getAllPatient").then((res) => {
      console.log(res.data);
      setPatientData(res.data);
    });
  }; //flow of code
  useEffect(() => {
    apiCall(); //no
  }, []);

  const [ editPatient,setEditPatient]= useState({
    address: "",
    age:'',bloodgroup:"",disease:'',doctorname:"",firstname:"",lastname:"",mobileno:0,password: "",username:"",__v:0,_id:""
  })

  return (
    <div style={{ display: "flex", float: "right" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>firstname</StyledTableCell>
              <StyledTableCell>lastname</StyledTableCell>

              <StyledTableCell align="right">age</StyledTableCell>
              <StyledTableCell align="right">disease</StyledTableCell>
              <StyledTableCell align="right">doctorname</StyledTableCell>

              <StyledTableCell align="right">bloodgroup</StyledTableCell>
              <StyledTableCell align="right">address</StyledTableCell>
              <StyledTableCell align="right">mobileno</StyledTableCell>
              <StyledTableCell align="right" style={{ textAlign: "center" }}>
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patientData.map((value, index, array) => {
              return (
                <StyledTableRow key={value.firstname}>
                  <StyledTableCell component="th" scope="row">
                    {value.firstname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.lastname}
                  </StyledTableCell>

                  <StyledTableCell align="right">{value.age}</StyledTableCell>
                  <StyledTableCell align="right">
                    {value.disease}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.doctorname}
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    {value.bloodgroup}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.address}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.mobileno}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <ColorButtonsnext  value={value} apiCall={apiCall}/>
                    {/* <Button
                      onClick={() => {
                        
                      }}
                    >
                      edit
                    </Button>
                    <Button>delete</Button> */}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
