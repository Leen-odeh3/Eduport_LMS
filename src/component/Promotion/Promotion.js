import React from "react";
import "./Promotion.css";
import VerifiedIcon from "@mui/icons-material/Verified";

const Promotion = () => {
  const data = [
    "Setup and installation takes less time",
    "Professional and easy to use software",
    "Perfect for any device with pixel-perfect design",
    "Setup and installation too fast",
  ];
  const paragraph = [
    {p:"How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask to style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited.",id:1}
   ,{p: "Happiness prosperous impression had conviction. For every delay in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited. ",id:2}
  ];

  return (
    <div className="ALL">
      <div>
        <img src="img/myall.jpg" alt="" className="myall" />
      </div>
      <div className="main">
        <h1>35,000+ happy students joined with us to achieve their goals</h1>
        {paragraph.map((el) => (
          <p className="of" key={el.id}>{el.p}</p>
        ))}
        {data.map((e) => (
          <p className="of">
            <VerifiedIcon style={{ color: "#0cbc87" }} /> {e}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
