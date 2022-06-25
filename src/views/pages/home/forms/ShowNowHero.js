import { Button } from "@mui/material";
import heroImage from "assets/images/heros/Hero Image 2 1.png";
import CustomImage from "components/CustomImage";
import CustomTypo from "components/CustomTypo";

export default function ShowNowHero() {
  return (
    <div className="relative">
      <CustomImage src={heroImage} className="w-full h-162 object-cover" />
      <div className="absolute top-14 right-14 text-white">
        <CustomTypo variant="h1">Our Favorite Tees</CustomTypo>
        <CustomTypo variant="body2">Everyday tees you need.</CustomTypo>
        <div className="mt-5">
          <Button variant="contained">Shop Now</Button>
        </div>
      </div>
    </div>
  );
}
