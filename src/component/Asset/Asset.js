import React from "react";
import "./Asset.css";
const Asset = () => {
  const asset = [
    { id: 1, src: "./img/Multiple.png", className: "multiple" },
    { id: 2, src: "./img/arrow.png", className: "arrow" },
    { id: 3, src: "./img/pluse.png", className: "pluse" },
    { id: 4, src: "./img/all.jpg", className: "all" },
    { id: 5, src: "./img/boaring.jpg", className: "boaring" },
    { id: 6, src: "./img/bom.png", className: "bom" },
    { id: 7, src: "./img/meet.jpg", className: "meet" },
    { id: 8, src: "./img/notsad.jpg", className: "notsad" },
    { id: 9, src: "./img/bubbles.png", className: "bubbles" },
  ];
  return (
    <div>
      {asset.map((e) => (
        <img key={e.id} src={e.src} alt="" className={e.className} />
      ))}
    </div>
  );
};
export default Asset;
