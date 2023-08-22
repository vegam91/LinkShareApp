import React from "react";
import { Button } from "@mui/material"
import { Grid } from "@mui/material"


function navbar() {
  return (
    <Grid container my={4}>
      <nav>
        <h1>LOGO</h1>
        <Button variant="contained"  >Links</Button>
        <Button variant="contained">Profile details</Button>
        <Button variant="outlined">Preview</Button>
      </nav>
    </Grid>
  );
}

export default navbar;
