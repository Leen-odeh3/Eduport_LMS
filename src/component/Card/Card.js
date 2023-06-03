import React from "react";
import { useSpring, animated } from "react-spring";
import "./Card.css";
import TvIcon from "@mui/icons-material/Tv";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box } from "@mui/material";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, fraction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
const Card = () => {
  const data = [
    {
      icon: <TvIcon style={{ fontSize: "50px", color: "#f7c32e" }} />,
      h5: "Online Courses",
      className: "A",
    },
    {
      icon: <PersonAddIcon style={{ fontSize: "50px", color: "#1d3b53" }} />,
      h5: "Expert Tutors",
      className: "B",
    },
    {
      icon: <SchoolIcon style={{ fontSize: "50px", color: "#6f42c1" }} />,
      h5: "Online Students",
      className: "C",
    },
    {
      icon: <VerifiedIcon style={{ fontSize: "50px", color: "#17a2b8" }} />,
      h5: "Certified Courses",
      className: "D",
    }
  ];

  return (
    <div className='card'>
      {data.map((e) => (
        <div className="allCard">
          <div className={e.className}>
            <div classNmae="icon">
              <div className="helo">{e.icon}</div>
            </div>
            <div className="bl">
              <div className="k">
                <Number n={200} /> K+
              </div>
              <div>{e.h5}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
