import { Container } from "@mui/material";
import CategoryGrid from "./forms/CategoryGrid";
import HeroSlider from "./forms/HeroSlider";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Container>
        <CategoryGrid />
      </Container>
    </div>
  );
}
