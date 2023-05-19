import React from 'react';
import { Grid } from '@mui/material';
import Box from "./../Box/Box";
import BoxTwo from './../BoxTwo/BoxTwo'
import Social from '../Social/Social';
const About = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ height: "730px" }}>
          <Box />
        </Grid>
        <Grid item xs={12} style={{ height: "830px"}}>
          <BoxTwo/>
        </Grid>

        <Grid item xs={12} className='soi' style={{ height: "350px"}}> 
        <Social/>
        </Grid>
        <Grid item xs={12} className='soi' style={{ height: "650px"}}> 
        {/* SEC4 */}
        </Grid>
      </Grid>
    </>
  );
};

export default About;