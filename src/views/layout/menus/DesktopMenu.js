import { Grid } from "@mui/material";
import React from "react";
import DesktopMenuButton from "./DesktopMenuButton";
import MENUS from "./menuData.json";

export default function DesktopMenu() {
  return (
    <Grid container spacing={6} justifyContent="center" alignItems="center">
      {MENUS.map((menu, menuIndex) => (
        <Grid item key={menuIndex}>
          <DesktopMenuButton label={menu?.label ?? ""} to={menu?.to ?? ""} />
        </Grid>
      ))}
    </Grid>
  );
}
