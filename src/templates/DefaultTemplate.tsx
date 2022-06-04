import { Box, Container } from "@mui/system";
import React from "react";
import Header from "../organisms/Header";

export default function DefaultTemplate({ children }: React.PropsWithChildren<{}>) {
  return (
    <Box minHeight="100vh">
      <Header />

      <Container>
        <Box minHeight="100vh" py={8}>
          {children}
        </Box>
      </Container>
    </Box>
  );
}
