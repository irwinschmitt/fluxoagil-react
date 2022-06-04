import { Typography, Toolbar, Container, AppBar } from "@mui/material";

export default function Header() {
  return (
    <AppBar color="transparent" position="absolute" elevation={0}>
      <Toolbar component="header" disableGutters>
        <Container>
          <Typography>Fluxo Ágil</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
