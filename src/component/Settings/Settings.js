import React from "react";
import "./Settings.css";
import Setting from "./../Setting/Setting";
import Delete from "../Delete/Delete";
const Settings = () => {
  return (
    <>
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
      </div>

      <div className="setting">
        <Setting />
      </div>
      <div className="setting2">
        <Delete/>
      </div>
    </>
  );
};

export default Settings;
