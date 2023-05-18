import React from 'react';
import { Grid } from '@material-ui/core';
import Box from "./../Box/Box";
import Portal from './../Portal/Portal'
import Promotion from '../Promotion/Promotion';
const About = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ height: "730px" }}>
          <Box />
        </Grid>
        <Grid item xs={12} style={{ height: "830px" }}>
          <Portal />
          <Promotion />
        </Grid>

        <Grid item xs={12} style={{ height: "700px" }}> 
        {/* Sec 3 */}
        </Grid>
      </Grid>
    </>
  );
};

export default About;