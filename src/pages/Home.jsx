import Typography from "@mui/material/Typography";
import cupCakeMain from "../assets/imgs/Cupcake-home.png";
export default function Home() {
  return (
    <>
      <Typography
        align="center"
        variant="h2"
        pb={3}
        color="#FF597B"
        sx={{
          display: { xs: "none", md: "block" },
          textShadow: "1px 1px 2px black",
        }}
      >
        Bienvenido a
      </Typography>
      <Typography
        align="center"
        variant="h1"
        px={2}
        color="#FF597B"
        sx={{ textShadow: "1px 1px 2px black" }}
      >
        Happy Cake!
      </Typography>
      <Typography
        align="center"
        variant="h3"
        pb={4}
        px={2}
        color="#FF597B"
        sx={{
          display: { xs: "none", sm: "block" },
          textShadow: "1px 1px 2px black",
        }}
      >
        El hogar de los pasteles felices
      </Typography>
      <img src={cupCakeMain} width="200" alt="Cupcake home" />
    </>
  );
}
