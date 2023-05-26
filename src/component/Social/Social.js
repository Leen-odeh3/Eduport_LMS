import React from 'react'
import'./Social.css'
const Social = () => {
 
const social = [
  { id:1, src: "img/algolia.png", className: "a" },
  { id:2, src: "img/android.png", className: "b" },
  {id:3,  src: "img/yamaha.png", className: "c" },
  {id:4,  src: "img/coca-cola.png", className: "d" },
  { id:5, src: "img/shippable.png", className: "e" },
   {id:6,  src: "img/importio.png", className: "k" },
];
const social2 = [
  {id:1,  src: "img/netflix.png", className: "f" },
  {id:2, src: "img/envato.png", className: "g" },
  {id:3, src: "img/coca-cola.png", className: "h" },
  {id:4, src: "img/microsoft.png", className: "i" },
  {id:5,  src: "img/linkedin.png", className: "g" }
 
];

return (
  <div className="social">
    <div className='divone'>
    {social.map((e) => (
      <img  key={e.id} src={e.src} alt="" className={e.className} />
    ))}
    </div>
    <div className='divtwo'>
    {social2.map((e) => (
      <img key={e.id} src={e.src} alt="" className={e.className} />
    ))}
  </div>
  </div>
);
}

export default Social
