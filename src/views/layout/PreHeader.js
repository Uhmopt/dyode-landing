import { Paper, ThemeProvider } from "@mui/material";
import CustomTypo from "components/CustomTypo";
import { darkTheme } from "theme/darkTheme";

export default function PreHeader() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper square={true} elevation={0} className="flex justify-center">
        <CustomTypo className="py-3">
          FREE SHIPPING ON ALL ORDERS OVER $75
        </CustomTypo>
      </Paper>
    </ThemeProvider>
  );
}
