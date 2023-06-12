import { Box } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./AboutMe.css";
import { Button } from "@mui/material";
import Linked from "../Linked/Linked";

const AboutMe = () => {
  const social = [
    {
      href: "https://github.com/Leen-odeh12",
      icon: <GitHubIcon />,
      class: "aa",
      des: "Add your github profile URL",
    },
    {
      href: "https://www.linkedin.com/in/leen-odeh3/",
      icon: <LinkedInIcon />,
      class: "bb",
      des: "Enter LinkedIn username",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100045529333705",
      icon: <FacebookIcon />,
      class: "cc",
      des: "Enter facebook username",
    },
    {
      href: "https://www.instagram.com/leen.odeh12/?next=%2Fleen.odeh12%2F",
      icon: <InstagramIcon />,
      class: "dd",
      des: "Enter instagram username",
    },
  ];

  return (
    <div className="aboutme">
      <p>About me-(Brief description for your profile.)</p>
      <Box
        sx={{
          width: "70%",
          height: "90px",
          border: ".1px solid gray",
          borderRadius: "10px",
          padding: 1,
        }}
      >
        I’ve found a way to get paid for my favorite hobby, and do so while
        following my dream of traveling the world.
      </Box>
      {/* ------------ */}
      <Button
        variant="contained"
        sx={{
          marginTop: 4,
          marginLeft: 120,
          height: "50px",
          marginBottom: "40px",
        }}
      >
        Save Changes
      </Button>
      {/* ------------ */}
      <div className="aria">
        <div className="sociala">
          <h1>Social media profile</h1>
          {social.map((e) => (
            <>
              <div className="offff">
                <div className={e.class}>{e.icon} </div>
                <div>{e.des}</div>
              </div>
              <Box
                sx={{
                  width: "40%",
                  height: "20px",
                  border: ".1px solid #bfbcbb",
                  borderRadius: "10px",
                  padding: 1,
                }}
              ></Box>{" "}
            </>
          ))}
        </div>

        <div className="coo0on">
          <Linked />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
