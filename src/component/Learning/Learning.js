import React from "react";
import "./Learning.css";
import Inform from "./../Inform/Inform";
import { Button } from "@mui/material";
const Learning = () => {
  return (
    <div className="conn">
      <div className="learning">
        <div className="omr">
          <img src="img/profileimg.jpg" className="imk" alt="" />
          <Button variant="contained" component="label" className="bn">
            Chang Img
            <input type="file" hidden />
          </Button>
        </div>
      </div>

      <div >
        <Inform />
      </div>
    </div>
  );
};

export default Learning;
