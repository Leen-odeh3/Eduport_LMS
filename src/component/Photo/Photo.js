import React from "react";
import "./Photo.css";
const Photo = () => {
  const array = [
    { src: "./img/circle.png", className: "circular" },
    { src: "./img/person.png", className: "person" },
    { src: "./img/react.png", className: "react" },
    { src: "./img/star.png", className: "star" },
    { src: "./img/Figma.png ", className: "figma" },
    { src: "./img/sttar.png ", className: "sttar" },
  ];
  return (
    <div className="imgs">
      {array.map((e) => (
        <img src={e.src} alt="" className={e.className} />
      ))}
    </div>
  );
};
export default Photo;
