import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#202136",
    },
    secondary: {
      main: "#DCDFEE",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
