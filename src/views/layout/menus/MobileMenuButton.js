import { Button } from "@mui/material";
import CustomLink from "components/CustomLink";

export default function MobileMenuButton({ label = "", to = "#" }) {
  return label ? (
    <CustomLink to={to}>
      <Button color="inherit" fullWidth>
        {label}
      </Button>
    </CustomLink>
  ) : null;
}
