import React from 'react'
import'./Social.css'
const Social = () => {
 
const social = [
  { src: "img/algolia.png", className: "a" },
  { src: "img/android.png", className: "b" },
  { src: "img/yamaha.png", className: "c" },
  { src: "img/coca-cola.png", className: "d" },
  { src: "img/shippable.png", className: "e" },
   { src: "img/importio.png", className: "k" },
];
const social2 = [
  { src: "img/netflix.png", className: "f" },
  { src: "img/envato.png", className: "g" },
  { src: "img/coca-cola.png", className: "h" },
  { src: "img/microsoft.png", className: "i" },
  { src: "img/linkedin.png", className: "g" }
 
];

return (
  <div className="social">
    <div className='divone'>
    {social.map((e) => (
      <img src={e.src} alt="" className={e.className} />
    ))}
    </div>
    <div className='divtwo'>
    {social2.map((e) => (
      <img src={e.src} alt="" className={e.className} />
    ))}
  </div>
  </div>
);
}

export default Social
