import { Typography, Toolbar, Grid, AppBar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar component="header">
        <Typography variant="h6">Fluxo Ágil</Typography>
      </Toolbar>
    </AppBar>
  );
}
