import CustomLink from "components/CustomLink";
import CustomTypo from "components/CustomTypo";
import React from "react";

export default function DesktopMenuButton({ label = "", to = "#" }) {
  return label ? (
    <CustomLink to={to}>
      <CustomTypo>{label}</CustomTypo>
    </CustomLink>
  ) : null;
}
