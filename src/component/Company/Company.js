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
  ];
  return (
    <div class="Merr">
      <div className="child a1">
        {arr.map((e) => (
          <h5>{e}</h5>
        ))}
      </div>
      <div className="child a2">
        {arr1.map((e) => (
          <h5>{e}</h5>
        ))}{" "}
      </div>
      <div className="child a3">
        {arr2.map((e) => (
          <h5>{e}</h5>
        ))}
      </div>
      <div className="child a4">
        {arr3.map((e) => (
          <h5>{e}</h5>
        ))}
      </div>
    </div>
  );
};

export default Company;
