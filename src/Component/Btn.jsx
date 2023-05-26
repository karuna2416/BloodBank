import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

export function ColorButtons(props) {
  function deletedata() {
    axios
      .delete(`http://localhost:5000/deletedonor/${props.value._id}`)
      .then((res) => {
        console.log(res);
        // props.apiCall();
        props.setReload(!props.reload);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function updatedata() {
    // axios.put('http://localhost:5000/updatedata')
    props.setSingleUser(props.value);
    props.setOpen(true);
  }
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={updatedata}>
        Edit
      </Button>
      <Button variant="outlined" color="error" onClick={deletedata}>
        Delete
      </Button>
    </Stack>
  );
}
