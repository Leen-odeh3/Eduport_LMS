import React from "react";
import CardContact from "../CardContact/CardContact";
import "./Contact.css";
import { Grid } from "@mui/material";
import Img from "../Img/Img";
import LOG from "./../LOG/LOG";

const Contact = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ height: "470px" }}>
          <h2 className="helo">We're here to help!</h2>
          <CardContact />
        </Grid>

        <Grid
          item
          xs={12}
          style={{ height: "600px", display: "flex", marginLeft: "55px" }}
        >
          <Grid xs={6}>
            <Img />
          </Grid>
          <Grid xs={6}>
            <LOG />
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ height: "400px", marginLeft: "55px" ,marginTop:40 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            width="1150"
            height="400"
           
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
