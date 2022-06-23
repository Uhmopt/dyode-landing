import { Typography } from "@mui/material";
import React from "react";

export default function CustomTypo({ className = "", children = null }) {
  return <Typography className={className}>{children}</Typography>;
}
