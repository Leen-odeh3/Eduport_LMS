import React from "react";
import { Link } from "react-router-dom";
import "./SSignn.css";

const SSignn = () => {
  return (
    <div>
      <Link to="/SignIn" className="sign">
        Login
      </Link>
    </div>
  );
};

export default SSignn;
