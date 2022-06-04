import * as React from "react";
import type { NextPage } from "next";
import { Box, Container, Typography, Toolbar, Grid, AppBar } from "@mui/material";
import UploadArea from "../src/molecules/UploadArea";

const Home: NextPage = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" minHeight="100vh">
      <AppBar position="static" elevation={0}>
        <Toolbar component="header">
          <Typography variant="h6">Fluxo Ágil</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ minHeight: "100%" }}>
        <Grid container>
          <Grid item xs={6} p={2}>
            <UploadArea />
          </Grid>

          <Grid item xs={6} p={2}>
            SVG
          </Grid>
        </Grid>
      </Container>

      <AppBar position="static" elevation={0}>
        <Toolbar component="header">
          <Typography variant="h6">Fluxo Ágil</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Home;
