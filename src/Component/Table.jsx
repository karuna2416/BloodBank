import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ColorButtons } from "./Btn";
import axios from "axios";
import CustomizedDialogs from "./Dialog";
import RegistrationForm from "./RegistrationForm";
import UserBtn from "./UserBtn";
import AlertDialog from "./DonateDialog";
import { Button } from "@mui/material";
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
//   { Name:"karuna sarawat",Age:"23",BloodGroup: "B+", Address: "indore", Mobile: "7487483223" },
//   { Name:"ankush saxena",Age:"24",BloodGroup: "A", Address: "indore", Mobile: "7487483223"},
//   { Name:"ganesh patidar",Age:"25",BloodGroup: "O", Address: "indore", Mobile: "7487483223"},
// ];

export default function CustomizedTables() {
  const [editUser, setEditUser] = useState({});

  const [userData, setUserData] = useState([]);
  const [reload, setReload] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [singleUser, setSingleUser] = useState({});
  function adddonate(data) {
    axios
      .post("http://localhost:5000/donate", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const apiCall = () => {
    console.log("hiii");
    axios.get("http://localhost:5000/getAllDonor").then((res) => {
      console.log(res.data);
      setUserData(res.data);
    });
  };
  useEffect(() => {
    apiCall();
  }, [reload]);
  return (
    <div style={{ display: "flex", float: "right" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>firstname</StyledTableCell>
              <StyledTableCell>lastname</StyledTableCell>
              <StyledTableCell align="right">age</StyledTableCell>

              <StyledTableCell align="right">bloodgroup</StyledTableCell>

              <StyledTableCell align="right">address</StyledTableCell>
              <StyledTableCell align="right">mobileno</StyledTableCell>
              <StyledTableCell align="right">user</StyledTableCell>

              <StyledTableCell align="right" style={{ textAlign: "center" }}>
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((value, index, array) => {
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
                    {value.bloodgroup}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.address}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {value.mobileno}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <AlertDialog
                      value={value}
                      setSingleUser={setSingleUser}
                      adddonate={adddonate}
                    />
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <ColorButtons
                      value={value}
                      apiCall={apiCall}
                      setReload={setReload}
                      reload={reload}
                      setOpen={setOpen}
                      setSingleUser={setSingleUser}
                    />
                    {/* <Button color="primary">hello</Button>
                    <Button>hi</Button> */}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <AlertDialog/> */}
      <CustomizedDialogs
        open={open}
        setOpen={setOpen}
        singleUser={singleUser}
        apiCall={apiCall}
      >
        <RegistrationForm
          singleUser={singleUser}
          setSingleUser={setSingleUser}
        />
      </CustomizedDialogs>
    </div>
  );
}
