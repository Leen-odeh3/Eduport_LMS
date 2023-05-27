import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Links from "./../Links/Links";
import Drop from "./../Drop/Drop";
import SSignn from "../SSignn/SSignn";
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
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Logo />
          <Drop />
          <Links />
          <Search />
          <SSignn/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
