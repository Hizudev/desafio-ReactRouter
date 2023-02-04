import { Link } from "react-router-dom";
import biscuit404 from "../assets/imgs/biscuit404.png";
import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <img src={biscuit404} width="350" alt="biscuit 404" />
      <Box>
        <Typography
          variant="h3"
          color="red"
          pb={2}
          px={2}
          sx={{
            display: { xs: "block", lg: "none" },
            textShadow: "1px 1px 2px black",
          }}
        >
          ERROR 404
        </Typography>
        <Typography
          variant="h1"
          color="RED"
          pb={2}
          px={2}
          sx={{
            display: { xs: "none", lg: "block" },
            textShadow: "1px 1px 2px black",
          }}
        >
          ERROR 404
        </Typography>
        <Typography
          variant="h5"
          pb={2}
          px={2}
          color="#FF597B"
          sx={{
            display: { xs: "none", sm: "block", lg:"none" },
            textShadow: "1px 1px 2px black",
          }}
        >
          El sitio que buscas ya fue devorado, intenta probar uno de estos:
        </Typography>
        <Typography
          variant="h4"
          pb={2}
          px={2}
          color="#FF597B"
          sx={{
            display: { xs: "none", lg: "block" },
            textShadow: "1px 1px 2px black",
          }}
        >
          El sitio que buscas ya fue devorado, intenta probar uno de estos:
        </Typography>
        <Box sx={{display:"flex", gap:"1em", justifyContent:"center"}}>
          <Link to="/home">Volver a Home</Link>
          <Link to="/contact">Volver a Contacto</Link>
        </Box>
      </Box>
    </Box>
  );
}
