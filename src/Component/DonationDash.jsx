import {Table3} from "./Tabledonation";
import { DashBoard } from "./DashBoard";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';

export const DonationDash=()=>{
    return(
        <div>
{/* <DashBoard/> */}
<container>
    <Grid item container justifyContent="center"margin="20px">
       BLOOD DONATION DETAILS
      </Grid>

    <Grid>
        <Table3/>
    </Grid>
</container>
        </div>
    )
}