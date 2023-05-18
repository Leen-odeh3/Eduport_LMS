import React from 'react';
import { Grid } from '@material-ui/core';
import Box from "./../Box/Box";
const About = () => {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ height: "700px" }}>
        <Box />
      </Grid>
      <Grid item xs={12} style={{ height: "700px" }}>
     {/* sec 2 */}
      </Grid>
    </Grid>
    </>
  );
};

export default About;