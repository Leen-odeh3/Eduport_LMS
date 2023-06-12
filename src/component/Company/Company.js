import React from 'react'
import './Company.css'
const Company = () => {
  const arr = ["Company","About US", "Contact Us", "News and Blogs", "Library", "Career"];
  const arr1 = ["Community", "Documentation", "FQA", "Forum ", "Sitemap"];

  const arr2 = [
    "Teaching",
    "Become a teacher  ",
    "How to guide ",
    " Terms & Conditions",
  ];
  const arr3 = [
    "Contact",
    "Toll free:+1234 568 963",
    " Email:example@gmail.com",
    <img src="img/app-store.png" alt="contact"/>,
    <img src="img/google-play.png" alt="contact"/>
  ];
  return (
    <div class="Merr">
      <div className="childa1">
        {arr.map((e) => (
          <h5>{e}</h5>
        ))}
      </div>
      <div className="childa2">
        {arr1.map((e) => (
          <h5>{e}</h5>
        ))}{" "}
      </div>
      <div className="childa3">
        {arr2.map((e) => (
          <h5>{e}</h5>
        ))}
      </div>
      <div className="childa4">
        {arr3.map((e) => (
          <h5>{e}</h5>
        ))}
      </div>
    </div>
  );
};

export default Company;
