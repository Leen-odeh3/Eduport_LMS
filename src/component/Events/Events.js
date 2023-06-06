import React from 'react'
import './Events.css'
import Grid from "@mui/material/Grid";
import EVE from '../EVE/EVE';
import Accor from '../Accor/Accor'
import Tool from '../Tool/Tool'
const Events = () => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} style={{ height: "1150px" }}>
       <EVE/>
      </Grid>
      <Grid item xs={12} style={{ height: "500" }}>
        <Accor/>
      </Grid>
      <Grid item xs={12} style={{ height: "200px" }}>
       <Tool/>
      </Grid>
      
    </Grid>
  </>
  )
}

export default Events
