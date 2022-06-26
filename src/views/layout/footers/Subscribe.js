import { Email } from "@mui/icons-material";
import { Button, Grid, Paper, TextField } from "@mui/material";
import CustomTypo from "components/CustomTypo";
import React from "react";

export default function Subscribe() {
  return (
    <div className="py-20 sm:sm-down:py-10 px-12 sm-down:px-10 bg-primary text-white">
      <CustomTypo variant="h1" className="pb-5 text-center">
        <Email fontSize="inherit" /> Sign Up & Stay Connected
      </CustomTypo>
      <Grid container spacing={2} justifyContent="center">
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <CustomTypo variant="body2 ">
            Sign up for the newsletter and get 20% off! Gain access to exclusive
            offers and be the first to know when new stuff drops!
          </CustomTypo>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className="flex justify-center items-center"
        >
          <div className="flex-grow mr-4 sm-down:hidden">
            <Paper>
              <TextField fullWidth size="small" />
            </Paper>
          </div>
          <Button variant="outlined" color="inherit" size="large">
            SUBSCRIBE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
