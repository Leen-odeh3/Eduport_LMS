import React from "react";
import "./Photo.css";
const Photo = () => {
  const array = [
    {id:1, src: "./img/circle.png", className: "circular" },
    {id:2, src: "./img/person.png", className: "person" },
    {id:3, src: "./img/react.png", className: "react" },
    {id:4, src: "./img/star.png", className: "star" },
    {id:5, src: "./img/Figma.png ", className: "figma" },
    {id:6, src: "./img/sttar.png ", className: "sttar" },
  ];
  return (
    <div className="imgs">
      {array.map((e) => (
        <img key={e.id} src={e.src} alt="" className={e.className} />
      ))}
    </div>
  );
};
export default Photo;