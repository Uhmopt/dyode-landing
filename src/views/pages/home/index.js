import { Container } from "@mui/material";
import HeroSlider from "./forms/HeroSlider";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Container>
        <HomeContent />
      </Container>
    </div>
  );
}
