import { Box, Container } from "@mui/system";
import Header from "components/organisms/Header";

export default function DefaultTemplate({ children }: React.PropsWithChildren<{}>) {
  return (
    <Box minHeight="100vh">
      <Header />

      <Container>
        <Box py={8}>{children}</Box>
      </Container>
    </Box>
  );
}
