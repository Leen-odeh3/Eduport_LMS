import React from "react";
import Card from "@mui/material/Card";
import "./CardContact.css";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const CardContact = () => {
  const data = [
    {
      head: "Customer Support",
      address: "Chicago HQ Estica Cop. Macomb, MI 48042",
      phone: "(423) 733-8222",
      email: "example@email.com",
    },
    {
      head: "Contact Address",
      address: "2492 Centennial NW, Acworth, GA, 30102",
      phone: "+896-789-546",
      email: "example@email.com",
    },
    {
      head: "Main Office Address",
      address: "2002 Horton Ford Rd, Eidson, TN, 37731",
      phone: "(678) 324-1251",
      email: "example@email.com",
    },
  ];

  return (
    <div>
      <Card className="ca">
        {data.map((e) => (
          <div>
            <h3>{e.head}</h3>
            <hr />
            <p>
              <FmdGoodIcon style={{ color: "#3d85c6", marginRight: "4px" }} />
              {e.address}
            </p>
            <p>
              <RememberMeIcon
                style={{ color: "#3d85c6", marginRight: "7px" }}
              />
              {e.phone}
            </p>
            <p>
              <MailOutlineIcon
                style={{ color: "#3d85c6", marginRight: "4px" }}
              />
              {e.email}
            </p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default CardContact;
