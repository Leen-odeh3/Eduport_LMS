import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

const pages = [
  "Home",
  "About",
  "Contact",
  "Courses",
  "Events",
  <MoreHorizIcon />
];

function Links() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  
  };

  return (
    <>
      {isMobile && (
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="black"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none", color: "black" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                href={page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  width: "250px",
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    color: "#747579",
                    textTransform: "uppercase",
                    "&:hover": {
                      fontWeight: "bold",
                      color: "#FC6C46",
                    },
                  }}
                >
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}

      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            href={page}
            key={page}
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "#747579",
              fontWeight: "bold",
              display: "block",
              marginRight: "3px",
              marginLeft: "12px",
              "&:hover": {
                fontWeight: "bold",
                color: "#FC6C46",
                backgroundColor: "transparent",
              },
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
}

export default Links;

