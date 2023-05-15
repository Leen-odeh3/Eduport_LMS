import React from "react";
import Photo from "../Photo/Photo";
import "./Home.css";
import Message from "./../Message/Message";
import Description from "../Description/Description";
const Home = () => {
  return (
    <div>
      <Photo />
      <Description />
      <Message />
    </div>
  );
};

export default Home;
