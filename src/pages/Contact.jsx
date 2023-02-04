import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Typography
        align="center"
        variant="h1"
        color="#FF597B"
        sx={{ textShadow: "1px 1px 2px black", display:{xs:"none", md:"block"} }}
      >
        Comunícate con nosotros!
      </Typography>
      <Typography
        align="center"
        variant="h3"
        color="#FF597B"
        sx={{ textShadow: "1px 1px 2px black", display:{xs:"block", md:"none"} }}
      >
        Comunícate con nosotros!
      </Typography>
      <Box py={6}>
        <form action="submit">
          <Typography
            variant="h4"
            color="#FF597B"
            sx={{ textShadow: "1px 1px 2px black" }}
          >
            Nombre
          </Typography>
          <input type="text" />
          <Typography
            variant="h4"
            pt={4}
            color="#FF597B"
            sx={{ textShadow: "1px 1px 2px black" }}
          >
            Correo
          </Typography>
          <input type="email" />
          <Button variant="contained" color="secondary" sx={{width:"20%", marginTop:"2em"}}>
            enviar
          </Button>
        </form>
      </Box>
    </Box>
  );
}
