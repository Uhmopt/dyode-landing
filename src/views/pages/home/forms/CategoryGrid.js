import { Grid } from "@mui/material";
import SimpleCard from "components/SimpleCard";
import { formatArray } from "lib/arrayObject";

export default function CategoryGrid({ data = [] }) {
  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {formatArray(data).map((item, itemIndex) => (
          <Grid item lg={4} md={4} sm={6} xs={12} key={itemIndex}>
            <SimpleCard image={item?.image} title={item?.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
