import { Grid } from "@mui/material";
import SimpleCard from "components/SimpleCard";
import React from "react";
import accessoriesImage from "assets/images/cards/Accessories Image.png";
import mensImage from "assets/images/cards/Mens Image.png";
import womensImage from "assets/images/cards/Womens Image.png";

export default function CategoryGrid() {
  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {[
          { image: womensImage, title: "Women's" },
          { image: mensImage, title: "Men's" },
          { image: accessoriesImage, title: "Accessories" },
        ].map((item, itemIndex) => (
          <Grid item lg={4} md={4} sm={6} xs={12} key={itemIndex}>
            <SimpleCard image={item?.image} title={item?.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
