import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logoP from '../assets/imgs/logoP.png';

const pages = ["Home", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#F9B5D0" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{display:"flex", justifyContent:"space-between" }} disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{color: "white", display: "block" }}
                to={`/${page}`}
                component={NavLink}
              >
                <Typography sx={{color:"#FF597B", textShadow: "1px 1px 1px black"}}>{page}</Typography>
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow:1,
              display: "flex",
              justifyContent:"end"
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component={NavLink}
              to="/home"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#FF597B",
                textDecoration: "none",
                textShadow: "1px 1px 2px white"
              }}
            >
              <img src={logoP} width="40" alt="" />Happy Cake
            </Typography>
            <Box
              sx={{ flexGrow:1, display: { xs: "flex", md: "none" }, justifyContent:"space-between" }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{color:"#FF597B"}}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h5"
                noWrap
                component={NavLink}
                to="/home"
                sx={{
                  display: { xs: "flex", md: "none" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#FF597B",
                  textDecoration: "none",
                  textShadow: "1px 1px 2px black"
                }}
              >
                <img src={logoP} height="40" alt="" />Happy Cake
              </Typography>
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
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    component={NavLink}
                    to={`/${page}`}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography color="#FF597B">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
