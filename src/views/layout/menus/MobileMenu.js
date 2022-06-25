import { Menu } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import CustomDrawer from "components/CustomDrawer";
import Logo from "components/Logo";
import { useState } from "react";
import MENUS from "./menuData.json";
import MobileMenuButton from "./MobileMenuButton";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((s = false) => !s);

  return (
    <div className="sm:hidden">
      <IconButton onClick={toggleMenu} color="inherit">
        <Menu />
      </IconButton>

      <CustomDrawer isOpen={isOpen} onClose={setIsOpen} position="left">
        <div className="w-60 h-full bg-primary text-white pt-6">
          <Grid container justifyContent="center" spacing={1}>
            <Grid item>
              <Logo />
            </Grid>
            {MENUS.map((menu, menuIndex) => (
              <Grid item lg={12} md={12} sm={12} xs={12} key={menuIndex}>
                <MobileMenuButton
                  label={menu?.label ?? ""}
                  to={menu?.to ?? ""}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </CustomDrawer>
    </div>
  );
}
