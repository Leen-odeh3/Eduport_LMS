import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  "Home",
  "About",
  "Contact",
  "Courses",
  "Events"
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
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
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                width: "250px",
              
              }}
            >
              <Typography
                textAlign="center"
                sx={{ color: "black", textTransform: "uppercase",  "&:hover": {
                  fontWeight: "bold",
                  color: "#FC6C46",
                 
                },}}
              >
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{
              my: 2,
              color: "black",
              display: "block",
              marginRight: "3px",
              marginLeft: "12px",
              "&:hover": {
                fontWeight: "bold",
                color: "#FC6C46",
                backgroundColor:"transparent"
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
export default ResponsiveAppBar;
