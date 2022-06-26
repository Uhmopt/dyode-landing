import { AppBar, Container, Slide, useScrollTrigger } from "@mui/material";
import Logo from "components/Logo";
import DesktopMenu from "./menus/DesktopMenu";
import MenuActions from "./menus/MenuActions";
import MobileMenu from "./menus/MobileMenu";
import PreHeader from "./PreHeader";

export default function Header() {
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <PreHeader />
        <Container maxWidth="lg">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <MobileMenu />
              <Logo />
            </div>
            <DesktopMenu />
            <MenuActions />
          </div>
        </Container>
      </AppBar>
    </Slide>
  );
}
