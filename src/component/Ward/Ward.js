import React from "react";
import './Ward.css'
const Ward = () => {
  const ward = ["National Teacher of the Year",
    "Heroes for Children award",
    "Education Agency of the Year",
    "National Teacher of the Year",
    "Best education agency 2018",
    "Teacher of the nation (2nd place) ",
    "Best Independent Education Agency",
    "Teacher of the nation (2nd place)","Heroes for Children award"
  ];

  const year = [2014,2015, 2016, 2017, 2018, 2019, 2020,2021,2022];
  return (
    <div>
      <div className="Nstuff">
        <h3>Awards'N Stuff</h3>
      </div>
      <div className="warrd">
        <div>
          {year.map((el) => (
            <div className="year">{el}</div>
          ))}
        </div>

        <div>
          {ward.map((e) => (
            <div className="de">{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ward;