import React from "react";
import "./Profilee.css";
import Linked from "../Linked/Linked";
import Data from "../Data/Data";
import View from "../View/View";
import { Button } from "@mui/material";
import Inform from "../Inform/Inform";
import AboutMe from "../AboutMe/AboutMe";
const Profilee = () => {
  return (
    <div>
      <div className="one-div">
        <img src="img/iop.png" alt=".." className="imh" />

        <div>
          <div className="opn">
            <img src="img/profileimg.jpg" alt=".." className="pr" />
            <h2 className="wo">Lori Stevens</h2>
          </div>
        </div>
      </div>
      {/* ------ */}
      <div className="koi">
        <Data />
        <div className="div">
          <View />

          <div className="learning">
            <div className="omr">
              <img src="img/profileimg.jpg" className="imk" alt="" />
              <Button variant="contained" component="label" className="bn">
                Chang Img
                <input type="file" hidden />
              </Button>
            </div>
          </div>
          <div>
            <Inform />
          </div>
        </div>
      </div>
      {/* ===================== */}
     <AboutMe />
    </div>
  );
};

export default Profilee;
