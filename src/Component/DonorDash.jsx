import CustomizedTables from "./Table";
import { BoxComponent } from "./GridBox";
import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom";
import { DashBoard } from "./DashBoard";
import { width } from "@mui/system";
import { Outlet } from "react-router-dom";
export const DonorDash = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <DashBoard />
        {/* </div> */}
        <container style={{ width: "100%" }}>
          {/* <div style={{float:"left"}}> */}

          {/* </div> */}
          {/* <div style={{float:"right"}}> */}
          {/* <container> */}
          <Grid container justifyContent="center" margin="20px">
            <Outlet />
          </Grid>

          {/* </container> */}
          {/* <BoxComponent/> */}
        </container>
      </div>
    </div>
  );
};
