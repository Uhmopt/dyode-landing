import { Grid } from "@mui/material";
import ProductCard from "components/ProductCard";
import { formatArray } from "lib/arrayObject";

export default function ProductGrid({ data = [] }) {
  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {formatArray(data).map((item, itemIndex) => (
          <Grid item lg={3} md={3} sm={6} xs={6} key={itemIndex}>
            <ProductCard
              image={item?.image}
              title={item?.title}
              name={item?.name}
              price={item?.price}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
