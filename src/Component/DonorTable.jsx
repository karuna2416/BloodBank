import React from "react";
import { Grid } from "@mui/material"; 
import CustomizedTables from "./Table";
import CustomizedDialogs from "./Dialog"
import RegistrationForm from "./RegistrationForm";
export const DonorTable = () => {
  return (
    <div>
      <Grid item container justifyContent="center"margin="20px">
        DONOR DETAILS
      </Grid>
      <Grid item>
        <CustomizedTables />
      </Grid>
      
    </div>
  );
};
