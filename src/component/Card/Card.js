// import React from "react";
// import { useSpring, animated } from "react-spring";
// import "./Card.css";
// import TvIcon from "@mui/icons-material/Tv";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import SchoolIcon from "@mui/icons-material/School";
// import VerifiedIcon from "@mui/icons-material/Verified";

// function Number({ n }) {
//   const { number } = useSpring({
//     from: { number: 0 },
//     number: n,
//     delay: 200,
//     config: { mass: 1, tension: 20, fraction: 10 },
//   });
//   return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
// }
// const Card = () => {
//   const data = [
//     {
//       icon: <TvIcon />,
//       h5: "Online Courses",
//       className: "A",
//     },
//     {
//       icon: <PersonAddIcon />,
//       h5: "Expert Tutors",
//       className: "B",
//     },
//     {
//       icon: <SchoolIcon />,
//       h5: "Online Students",
//       className: "C",
//     },
//     {
//       icon: <VerifiedIcon />,
//       h5: "Certified Courses",
//       className: "D",
//     },
//   ];

//   return (
//     <>
//       {data.map((e) => (
//         <div className="allCard">
//           <div className={e.className}>
//             <div classNmae="icon"><span className="helo">{e.icon}</span></div>
//             <>
//                 <Number n={200} />{K+} 
//                 <div>{e.h5}</div>
             
//             </>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Card;
