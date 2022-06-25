import { Container } from "@mui/material";
import HeroSlider from "./forms/HeroSlider";
import ShowNowHero from "./forms/ShowNowHero";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Container>
        <HomeContent />
      </Container>
      <ShowNowHero />
    </div>
  );
}
