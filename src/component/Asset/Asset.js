import React from "react";
import './Asset.css'
const Asset = () => {
  const asset = [
    { src: "./img/Multiple.png", className: "multiple" },
    { src: "./img/arrow.png", className: "arrow" },
    { src: "./img/pluse.png", className: "pluse" },
    { src: "./img/all.jpg", className: "all" },
    { src: "./img/boaring.jpg", className: "boaring" },
    { src: "./img/bom.png", className: "bom" },
    { src: "./img/meet.jpg", className: "meet" },
    { src: "./img/notsad.jpg", className: "notsad" },
    { src: "./img/bubbles.png", className: "bubbles" },
  ];
      return(  
      <div>

        {
            asset.map((e)=>(
                <img src={e.src} alt="" className={e.className}/>
            ))
        }




     </div>
            )};

export default Asset;
