import React from "react";
import "./EVE.css";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const EVE = () => {
  const data = [
    {
      icon: <EmojiTransportationIcon />,
      h5: " Zodiac Event Inc.2.4k followers",
      className: "A",
    },
    {
      icon: <AddLocationAltIcon />,
      h5: " Chicago HQ Estica Cop. Macomb, MI 48042",
      className: "B",
    },
    {
      icon: <CalendarMonthIcon />,
      h5: " 01 Jan 2023 9am to 7pm Daylight Time",
      className: "C",
    },
  ];
  return (
    <>
      <div className="ev">
        <img src="img/immmmg.png" alt="img-event" className="event" />
      </div>

      <div className="leen">
        <div className="group">
          {data.map((e) => (
            <div className="allCard">
              <div className={e.className}>
                <div classNmae="icon">
                  <div className="helo">{e.icon}</div>
                </div>
                <div className="bl">
                  <div>{e.h5}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* --- */}
        <div>
          <h1> About this event</h1>
          <p className="ddeessccrriippttiioonn">
            Satisfied conveying a dependent contented he gentleman agreeable do
            be. Warrant private blushes removed and in equally totally if.
            Delivered dejection necessary objection do Mr prevailed. Mr feeling
            chiefly cordial in doing. We focus a great deal on the understanding
            of behavioral psychology and influence triggers which are crucial
            for becoming a well-rounded Digital Marketer. We understand that
            theory is important to build a solid foundation, we understand that
            theory alone isn’t going to get the job done so that’s why this
            course is packed with practical hands-on examples that you can
            follow step by step.
          </p>
          <h1> Speakers</h1>
          <p className="ddeessccrriippttiioonn">
            Understand that theory is important to build a solid foundation, we
            understand that theory alone
          </p>
          <Stack direction="row" spacing={1}>
            <Chip avatar={<Avatar>L</Avatar>} label="Leyan Kim-Ordaen" />
            <Chip avatar={<Avatar alt="Natacha" />} label="Natacha Serjen" />
          </Stack>
        </div>
      </div>
 
    </>
  );
};

export default EVE;
