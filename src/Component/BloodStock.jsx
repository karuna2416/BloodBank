import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
// import { createTheme } from "@mui/system";
import RestartAltSharpIcon from '@mui/icons-material/RestartAltSharp';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import CustomizedDialogs from "./Dialog"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "20px",
  marginLeft: "100px",
}));

function FormRow(props) {
  return (
    <React.Fragment>
      <Grid item xs={3} >
        <Item>
          <h4 style={{float:"left",marginTop:"50px"}}>1</h4>
         <h1
            style={{
              textAlign: "right",
              width: "100%",
            }}
          >
            {props.first}
          </h1> 
          <BloodtypeIcon style={{color:"red"}}/>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
        <h4 style={{float:"left",marginTop:"50px"}}>12</h4>

          <h1
                      style={{
                        textAlign: "right",
                        width: "100%",
                      }}
          
          >{props.second}</h1><BloodtypeIcon style={{color:"red"}}/>
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item>
        <h4 style={{float:"left",marginTop:"50px"}}>24</h4>

          <h3
                      style={{
                        textAlign: "left",
                        width: "100%",
                      }}
          
          >{props.third}</h3><RestartAltSharpIcon style={{color:"blue"}}/>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export function HomeDash() {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={4}>
            <FormRow first="A+" second="AB+" third="Total Request" />
          </Grid>
          <Grid container item spacing={4}>
            <FormRow first="B+" second="AB-" third="Approved Request" />
          </Grid>
          <Divider width="100%" style={{ marginTop: "20px" }} />

          <Grid container item spacing={4}>
            <FormRow                 
first="O+" second="O-" third="Total unit of blood"/>
          </Grid>
        </Grid>
      </Box>
      <h2>UPDATE BLOOD UNIT</h2>
    </Grid>
  );
}
