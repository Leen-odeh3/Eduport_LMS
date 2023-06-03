import React from "react";
import "./Partone.css";
import Button from "@mui/material/Button";

const Partone = () => {
  return (
    <div className="two">
      <div>
        <img src="img/category-1.png" height={300} alt="img" />
      </div>
      <div className="se">
        <h1>What do you want to learn? </h1>
        <p>
          Grow your skill with the most reliable online courses and
          certifications
        </p>
        <Button
          variant="contained"
          sx={{ width: 300, marginTop: 3, marginLeft: 10, height: 50 }}
        >
          Search Courses...
        </Button>
      </div>
      <div>
        <img src="img/category-2.png" height={300} alt="img" />
      </div>
    </div>
  );
};

export default Partone;
