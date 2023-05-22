import React from "react";
import "./Description.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Buttom from "./../Buttom/Buttom";
import WatchVideo from "./../WatchVideo/WatchVideo";
const Description = () => {
  return (
    <div className="Describe">
      <h1>
        Limitless learning at your
        <img src="img/Haylayte.png" width="300px" className="haylayt"  alt=""></img>
      </h1>
      <p className="description">
    
        Online learning and teaching marketplace with 5K+ courses & 10M
        students. Taught by experts to help you acquire new skills.
      </p>

      <Buttom />
      <div className="merg">
        <Stack spacing={2} direction="row">
          <Button
            sx={{
              fontWeight: "bold",
              color: "#d6293e",
              height: "60px",
              width: "150px",
              marginTop: "20px",
              borderRadius: "10px",
              backgroundColor: "rgba(214, 41, 62, 0.1)",
              "&:hover": {
                fontWeight: "bold",
                color: "white",

                backgroundColor: "#d6293e",
              },
            }}
          >
            Get Started
          </Button>
        </Stack>
        <WatchVideo></WatchVideo>
      </div>
    </div>
  );
};

export default Description;
