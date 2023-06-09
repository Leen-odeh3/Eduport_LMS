import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import GridViewIcon from "@mui/icons-material/GridView";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PaidIcon from "@mui/icons-material/Paid";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LockClockIcon from "@mui/icons-material/LockClock";
import LoginIcon from "@mui/icons-material/Login";
import "./Data.css";
const Data = () => {
  const info = [
    { icon: <GridViewIcon />, name: "Dashboard" },
    { icon: <SettingsIcon />, name: "Settings" },
    { icon: <SubscriptionsIcon />, name: "Subscriptions" },
    { icon: <DeleteOutlineIcon />, name: "Delet Profile" },
    { icon: <StorefrontIcon />, name: "Wishlist" },

    { icon: <DataObjectIcon />, name: "My courses" },
    { icon: <ReceiptIcon />, name: "Resume" },
    { icon: <HelpOutlineIcon />, name: "Quiz" },
    { icon: <PaidIcon />, name: "Payment Info" },
    { icon: <AutoFixHighIcon />, name: "Edit Profile" },
    {icon: <LoginIcon />,name: "Sign Out",},
    { icon: <LockClockIcon />, name: "Lock" }
  ];

  return (
    <div>
      <div className="info">
        {info.map((e) => (
          <div className="Inf">
            <div> {e.icon} </div> <div>{e.name} </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
