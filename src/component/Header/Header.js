import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import Links from "./../Links/Links";
import Drop from "./../Drop/Drop";
function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        height: "100px",
        padding: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Drop />
          <Links />
          <Search />
          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
