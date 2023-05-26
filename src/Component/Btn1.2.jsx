import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

export function ColorButtonsnext(props) {
  function updatedata() {
    props.setSingleUser(props.value);
    props.setOpen(true);
  }
  console.log(props, "hello");
  function deletePatientData() {
    axios
      .delete(`http://localhost:5000/deletepatient/${props.value._id}`)
      .then((res) => {
        console.log(res);
        props.apiCall();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={updatedata}>
        Edit
      </Button>
      <Button variant="outlined" color="error" onClick={deletePatientData}>
        Delete
      </Button>
    </Stack>
  );
}
