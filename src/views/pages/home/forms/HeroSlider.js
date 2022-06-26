import React from "react";
import CustomSlider from "components/CustomSlider";
import heroImage1 from "assets/images/slider/Hero Image 1.png";
import heroImage2 from "assets/images/slider/Hero Image 2.png";
import heroImage3 from "assets/images/slider/Hero Image 3.png";
import CustomTypo from "components/CustomTypo";
import { Button } from "@mui/material";

const HeroSliderContent = ({ title = "", caption = "", color = "primary" }) => (
  <div
    className={`sm:absolute sm:top-52 sm:left-32 flex flex-col items-center sm:items-start sm:text-${color} sm-down:text-primary sm-down:bg-white-gray sm-down:py-8`}
  >
    <CustomTypo variant="h1">{title}</CustomTypo>
    <CustomTypo variant="body2" className="sm:pb-6">
      {caption}
    </CustomTypo>
    <Button variant="contained" color="secondary">
      Shop Now
    </Button>
  </div>
);

export default function HeroSlider() {
  return (
    <div>
      <CustomSlider
        data={[
          {
            background: heroImage1,
            content: (
              <HeroSliderContent
                title="Show New Arrival"
                caption="Our coolest new items are waiting for you!"
              />
            ),
          },
          {
            background: heroImage2,
            content: (
              <HeroSliderContent
                title="Our Fave Tees"
                caption="Shop all of our favorites"
                color="white"
              />
            ),
          },
          {
            background: heroImage3,
            content: (
              <HeroSliderContent
                title="Men's Tees"
                caption="Find the perfect shirt."
                color="white"
              />
            ),
          },
        ]}
      />
    </div>
  );
}
