import React from 'react'
import { Grid } from "@mui/material";
import './Courses.css'
import Partone from '../Partone/Partone';
import Fake from './../Fake/Fake'
import Div from '../Div/Div';
import Divv from './../Divv/Divv'
const Courses = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} className="soi" style={{ height: "40px" }}></Grid>
        <Grid className="partone" item xs={12} style={{ height: "320px" }}>
          <Partone />
        </Grid>
        <Grid item xs={12} style={{ height: "1200px" }}>
          <Fake />
        </Grid>

        <Grid item xs={12} className="soi" style={{ height: "400px" }}>
         <div className='vbn'><Div/> <Divv/> </div>  
           
        </Grid>
      </Grid>
    </div>
  );
};

export default Courses
