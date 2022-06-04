import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { Toolbar, Grid, Button, AppBar } from "@mui/material";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

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
            <Box
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{ border: "2px dashed gray", borderRadius: "8px", minHeight: "50vh" }}
            >
              <InsertDriveFileIcon />

              <Box position="absolute" display="flex" alignItems="center" top={0} left={0} m={2}>
                <SwipeRightAltIcon sx={{ color: "gray" }} />

                <Typography ml={1} variant="body2" sx={{ color: "gray" }}>
                  Arraste e solte ou...
                </Typography>
              </Box>
            </Box>
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
