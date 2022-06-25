import { Typography } from "@mui/material";
import React from "react";

export default function CustomTypo({
  className = "",
  children = null,
  variant = "inherit",
}) {
  return (
    <Typography variant={variant} className={className}>
      {children}
    </Typography>
  );
}
