import { ChangeEvent, useEffect, useState } from "react";

import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  SwipeRightAltOutlined as SwipeRightAltIcon,
  UploadFileOutlined as UploadFileIcon,
  Close as CloseIcon,
  ArrowForward as ArrowForwardIcon,
  CheckOutlined as CheckOutlinedIcon,
} from "@mui/icons-material";

import theme from "styles/theme";
import { AnyARecord } from "dns";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [shouldConfirmFile, setShouldConfirmFile] = useState<boolean>(false);
  const [isUploadingFile, setIsUploadingFile] = useState<boolean>(false);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files ? event.target.files[0] : null;
    setFile(file);
  }

  function handleFileConfirm(): void {
    if (!file) {
      return;
    }

    uploadFile(file);
  }

  function isNameOutOfStandard(fileName: string): boolean {
    const pattern = /^historico_[0-9]{9}.pdf$/;
    return !pattern.test(fileName);
  }

  function uploadFile(file: File) {
    console.log(`Uploading ${file.name}`);
  }

  useEffect(() => {
    if (!file) {
      return;
    }

    if (isNameOutOfStandard(file.name)) {
      setShouldConfirmFile(true);
      return;
    }

    uploadFile(file);
  }, [file]);

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
        {file ? (
          <Button
            component="label"
            variant="contained"
            disableElevation
            onClick={handleFileConfirm}
          >
            Continuar
          </Button>
        ) : (
          <Button component="label" variant="outlined">
            Selecione
            <input type="file" accept="application/pdf" hidden onChange={handleFileChange} />
          </Button>
        )}
      </Box>

      <Box>
        {file ? (
          <Box display="flex" alignItems="center">
            <Typography variant="body1" borderBottom="1px solid">
              {file.name}
            </Typography>
            <IconButton size="small">
              <CloseIcon color="primary" fontSize="small" />
            </IconButton>
          </Box>
        ) : (
          <Typography variant="body1">
            seu{" "}
            <Box component="span" fontWeight="bold">
              histórico escolar
            </Box>
          </Typography>
        )}
      </Box>

      <Box position="absolute" display="flex" alignItems="center" top={0} left={0} m={2}>
        <SwipeRightAltIcon color="primary" />

        <Typography ml={1} variant="body2">
          Arraste e solte ou...
        </Typography>
      </Box>
    </Box>
  );
}
