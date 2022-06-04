import * as React from "react";
import { Box, Typography } from "@mui/material";
import {
  SwipeRightAlt as SwipeRightAltIcon,
  InsertDriveFile as InsertDriveFileIcon,
} from "@mui/icons-material";

export default function Upload() {
  return (
    <Box
      height="40vh"
      maxHeight="300px"
      border="3px dashed black"
      borderRadius="8px"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <InsertDriveFileIcon />

      <Box position="absolute" display="flex" alignItems="center" top={0} left={0} m={2}>
        <SwipeRightAltIcon />

        <Typography ml={1} variant="body2">
          Arraste e solte ou...
        </Typography>
      </Box>
    </Box>
  );
}
