import React from "react";
import Photo from "../Photo/Photo";
import Message from "./../Message/Message";
import Description from "../Description/Description";
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ height: "600px" }}>
          <Photo/>
          <Description/>
          <Message />
        </Grid>
        <Grid item xs={12} style={{ height: "500" }}>
         {/* <Card/> */}
        </Grid>
        <Grid item xs={12} style={{ height: "900px" }}>
          {/* Sec 3 */}
        </Grid>
        <Grid item xs={12} style={{ height: "400px" }}>
          {/* Sec 4 */}
        </Grid>
        <Grid item xs={12} style={{ height: "700px" }}>
          {/* Sec 5 */}
        </Grid>
        <Grid item xs={12} style={{ height: "800px" }}>
          {/* Sec 6 */}
        </Grid>   
      </Grid>
    </>
  );
};

export default Home;
