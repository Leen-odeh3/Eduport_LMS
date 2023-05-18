import React from "react";
import Photo from "../Photo/Photo";
import "./Home.css";
import Message from "./../Message/Message";
import Description from "../Description/Description";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
          <Photo />
          <Description />
          <Message />
         
        </Grid>
      </Box>
    </>
  );
};

export default Home;
