import * as React from "react";
import Tabs from "@mui/material/Tabs";
import './Tool.css'
import Tab from "@mui/material/Tab";
import LanguageIcon from "@mui/icons-material/Language";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Diversity1Icon from "@mui/icons-material/Diversity1";

export default function Tool() {
 
  return (
    <Tabs className="tool" >
      <Tab icon={<LanguageIcon />} label="125 Vesitros" />
      <Tab icon={<PersonAddIcon />} label="356 Registered" />
      <Tab icon={<Diversity1Icon />} label="350 Attendance" />
    </Tabs>
  );
}
