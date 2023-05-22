import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

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

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
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

