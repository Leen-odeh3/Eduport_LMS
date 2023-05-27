import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import HdrWeakIcon from "@mui/icons-material/HdrWeak";
import Divider from "@mui/material/Divider";

import "./Drop.css";
const options = [
  "Development",
  "Design",
  "Marketing",
  "Music",
  "Life Style",
  "IT & Software",
  "Personal Development",
  "Health & Fitness",
  "Teaching",
  "Math & Logic",
  <Divider />,
  <Button className="btn">View all Categoryies</Button>,
];

const ITEM_HEIGHT = 48;

export default function Drop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="Drop">
      <IconButton
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Button
          variant="text"
          className="btnn"
          startIcon={<HdrWeakIcon></HdrWeakIcon>}
        >
          Category
        </Button>
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 11,
            width: "25ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
            sx={{
              color: "#747579",
              "&:hover": { backgroundcolor: "#ebf6ff", color: "#066ac9" },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
