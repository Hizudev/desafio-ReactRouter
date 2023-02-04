import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import PopCorn from "../src/assets/imgs/PopCorn.png";
import Donut from "../src/assets/imgs/Donut.png";
import Cookie from "../src/assets/imgs/cookie.png";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#FF8E9E",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Grid container spacing={0} sx={{ height: "100%" }}>
        <Grid
          item
          pl={2}
          py={2}
          sx={{
            display: { xs: "none", md: "none", xl: "flex" },
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          lg={3}
        >
          <img src={Donut} width="230" alt="Donut" />
          <img src={PopCorn} width="230" alt="PopCorn" />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          xl={6}
          py={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Grid>
        <Grid
          item
          pr={2}
          py={2}
          sx={{
            display: { xs: "none", md: "none", xl: "flex" },
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "end",
          }}
          lg={3}
        >
          <img src={Cookie} width="190" alt="Cookie" />
          <Box
            sx={{
              width: 150,
              height: 150,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://github.com/Hizudev" target="_blank" rel="noopener">
              <GitHubIcon fontSize="large" />
            </a>
            <Typography
              variant="h5"
              color="#FF597B"
              sx={{
                display: { xs: "none", sm: "block" },
                textShadow: "1px 1px 2px black",
              }}
            >
              Nico Hndz
            </Typography>
            <Typography
              variant="h5"
              color="#FF597B"
              sx={{
                display: { xs: "none", sm: "block" },
                textShadow: "1px 1px 2px black",
              }}
            >
              ADL G26
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
