import { createTheme } from "@mui/material";
import { lightTheme } from "./lightTheme";
import {
  DARK_BLUE_COLOR,
  ERROR_COLOR,
  PRIMARY_COLOR,
  SUCCESS_COLOR,
  WARNING_COLOR,
  WHITE_COLOR,
} from "./variable";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY_COLOR,
      contrastText: WHITE_COLOR,
    },
    secondary: {
      main: DARK_BLUE_COLOR,
      contrastText: WHITE_COLOR,
    },
    success: {
      main: SUCCESS_COLOR,
      contrastText: WHITE_COLOR,
    },
    warning: {
      main: WARNING_COLOR,
      contrastText: WHITE_COLOR,
    },
    error: {
      main: ERROR_COLOR,
      contrastText: WHITE_COLOR,
    },
  },
  typography: lightTheme.typography,
  components: lightTheme.components,
});
