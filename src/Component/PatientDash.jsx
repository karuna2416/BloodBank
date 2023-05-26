import { Table2 } from "./Table2";
import { DashBoard } from "./DashBoard";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";

export const PatientDash = () => {
  return (
    <div>
      {/* <DashBoard/> */}
      <div>
        <Grid item container width="100%" justifyContent="center" margin="20px">
          PATIENT DETAILS
        </Grid>

        <Grid item justifyContent="center">
          <Table2 />
        </Grid>
      </div>
    </div>
  );
};
