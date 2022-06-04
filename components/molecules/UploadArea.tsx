import theme from "styles/theme";
import { Box, Button, Typography } from "@mui/material";
import {
  SwipeRightAltOutlined as SwipeRightAltIcon,
  UploadFileOutlined as UploadFileIcon,
} from "@mui/icons-material";

export default function Upload() {
  return (
    <Box
      height="40vh"
      maxHeight="300px"
      border="3px dashed"
      borderColor={theme.palette.primary.main}
      borderRadius="8px"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <UploadFileIcon color="primary" fontSize="large" />
      <Box py={2}>
        <Button variant="contained" disableElevation>
          Selecione
        </Button>
      </Box>

      <Typography variant="body1">
        seu{" "}
        <Box component="span" fontWeight="bold">
          histórico escolar
        </Box>
      </Typography>

      <Box position="absolute" display="flex" alignItems="center" top={0} left={0} m={2}>
        <SwipeRightAltIcon color="primary" />

        <Typography ml={1} variant="body2">
          Arraste e solte ou...
        </Typography>
      </Box>
    </Box>
  );
}
