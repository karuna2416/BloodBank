import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

export default function UserBtn(props) {
    function popup(){

    }
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" onClick={popup}>
        Donate
      </Button>
      </Stack>
  )
}
