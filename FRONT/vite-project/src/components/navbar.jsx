import React from "react";
import { Button,Grid } from "@mui/material"
import {  } from "@mui/material"


function navbar() {
  return (
    <Grid style={{display:"flex",padding:"24px",flexDirection:"column",alignItems:"flex-start",gap:"8px",alignSelf:"stretch", width:"100%",height:"auto"}}>

       <Grid style={{display:"flex",padding:"16px 16px 16px 24px", flexDirection:"column", alignItems:"flex-start",gap:"8px",alignSelf:"stretch",width:"100%",height:"auto"}}>
      <Grid>
        <nav>
          <Grid style={{width:"108px",height:"21px",flexShrink:"0"}}>
             <h1>LOGO</h1>
          </Grid>
         <Grid style={{display:"flex",padding:"11px 27px",alignItems:"center",gap:"8px"}}>
           <Button variant="text" style={{color:"var(--grey,#737373",fontSize:""}}>Links</Button>
         </Grid>
         <Grid style={{display:"flex", padding:"11px 27px",alignItems:"center",gap:"center"}}>
           <Button variant="contained" style={{borderRadius:"8px",background:"var(--light-purple,#EFEBFF)"}} buttontext={{color:"var(--purple,#633CFF)", fontfamily:"Instrument Sans", fontsize:"16px",fontstyle:"nomral",fontweight:"600",lineheight:"24px"}}>Profile details</Button>
         </Grid>
         <Grid>
            <Button variant="outlined">Preview</Button>
         </Grid>
        
        </nav>
      </Grid>
    </Grid>
    </Grid>
   
  );


   
   

}

export default navbar;
