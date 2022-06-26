import { Facebook, Instagram } from "@mui/icons-material";
import { Container, Grid } from "@mui/material";
import CustomTypo from "components/CustomTypo";
import React from "react";
import FooterMapList from "./FooterMapList";

export default function FooterMap() {
  return (
    <div className="py-16 sm-down:py-8 bg-black text-white">
      <Container>
        <Grid container justifyContent="space-between" spacing={4}>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item flexGrow={1}>
                <div className="sm:mr-10">
                  <FooterMapList
                    title="Customer Services"
                    data={[
                      { label: "Accessibility", to: "" },
                      { label: "Contact Us", to: "" },
                      { label: "Return Policy", to: "" },
                      { label: "FAQ", to: "" },
                      { label: "Gift Certificates", to: "" },
                      { label: "Wishlist", to: "" },
                    ]}
                  />
                </div>
              </Grid>
              <Grid item flexGrow={1}>
                <div className="sm:mr-10">
                  <FooterMapList
                    title="Company"
                    data={[
                      { label: "About Us", to: "" },
                      { label: "Careers", to: "" },
                      { label: "Press", to: "" },
                      { label: "Affiliates", to: "" },
                    ]}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <CustomTypo variant="h3">Follow Us</CustomTypo>
            <Grid container justifyContent="space-between">
              <Grid item>
                <CustomTypo variant="h2">
                  <Facebook fontSize="inherit" />
                </CustomTypo>
              </Grid>
              <Grid item>
                <CustomTypo variant="h2">
                  <Instagram fontSize="inherit" />
                </CustomTypo>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
