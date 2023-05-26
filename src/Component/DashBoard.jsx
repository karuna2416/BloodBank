// import { Container } from "@mui/system";
// import CustomizedTables from "./Table";
// import {BoxComponent} from "./GridBox";
// import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { DonorDash } from "./DonorDash";

export const DashBoard = () => {
  return (
    <div>
      <container style={{ display:"flex",width:"200px",float:"left"}}>
        <div className="dash" id="das">
          <div>
            <Link className="linkh" to={"/abc/home"} style={{textDecoration:"none",color:"white",float:"left"}}>
              <ion-icon name="home-outline" className="icon"></ion-icon> Home
            </Link>
          </div>
          <div>
            <Link className="linkh"  to={"/abc/donor"} style={{textDecoration:"none",color:"white",float:"left"}}>
              <ion-icon name="person-outline" className="icon"></ion-icon> Donor
            </Link>
          </div>
          <div>
            <Link className="linkh" to={"/abc/Patient"} style={{textDecoration:"none",color:"white",float:"left"}}>
              <ion-icon name="medkit-outline" className="icon"></ion-icon> Patient
            </Link>
          </div>
          <div>
            <Link className="linkh" to={"/abc/Donation"} style={{textDecoration:"none",color:"white",float:"left"}}>
              <ion-icon name="flame-outline" className="icon"></ion-icon> Donation</Link>
          </div>
          <div>
            <Link className="linkh" to={"/abc/Request"} style={{textDecoration:"none",color:"white",float:"left"}}>
              <ion-icon name="refresh-circle-outline"></ion-icon> Blood Request
            </Link>
          </div>
          <div>
            <Link className="linkh" to={"/abc/Histroy"} style={{textDecoration:"none",color:"white",float:"left"}}>
              <ion-icon name="repeat-outline"></ion-icon> Request History
            </Link>
          </div>
          <div>
            <Link className="linkh" to={"/abc/home"} style={{textDecoration:"none",color:"white",float:"left"}}>
              <ion-icon name="flame-outline"></ion-icon> Blood Stock
            </Link>
          </div>
        </div>

        {/* <div style={{textAlign:"center",justifyContent:"center",alignContent:"center"}}> */}
        {/* <h2>DONOR DETAILS</h2> */}
        {/* <Grid container justifyContent="center">
<Grid item container justifyContent="center">
  
  DONOR DETAILS
  </Grid>
  <Grid item>

      <CustomizedTables/>
  </Grid>
      </Grid> 

      </container>
<BoxComponent/>
       */}
      </container>
    </div>
  );
};
