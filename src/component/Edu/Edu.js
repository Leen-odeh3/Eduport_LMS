import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Edu = () => {
  const social = [
    {
      href: "https://github.com/Leen-odeh12",
      icon: <GitHubIcon />,
      class: "aa",
    },
    {
      href: "https://www.linkedin.com/in/leen-odeh3/",
      icon: <LinkedInIcon />,
      class: "bb",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100045529333705",
      icon: <FacebookIcon />,
      class: "cc",
    },
    {
      href: "https://www.instagram.com/leen.odeh12/?next=%2Fleen.odeh12%2F",
      icon: <InstagramIcon />,
      class: "dd",
    },
  ];
  return (
    <div>
      <img
        src="https://eduport.webestica.com/assets/images/logo.svg"
        alt="logo"
        width="200px"
      />
      <p className="edu">
        Eduport education theme, built specifically for the education centers
        which is dedicated to teaching and involve learners.
      </p>
      {social.map((e) => (
        <a href={e.href} className={e.class}>{e.icon}</a>
      ))}
    </div>
  );
};

export default Edu;
