import * as React from "react";
import type { NextPage } from "next";
import { Grid } from "@mui/material";
import UploadArea from "components/molecules/UploadArea";
import DefaultTemplate from "components/templates/DefaultTemplate";

const Home: NextPage = () => {
  return (
    <DefaultTemplate>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <UploadArea />
        </Grid>

        <Grid item xs={12} md={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti magnam cumque
          reprehenderit non, eveniet, laudantium nihil quis nesciunt suscipit corporis eligendi
          excepturi unde labore sint, saepe et provident accusamus.
        </Grid>
        <Grid item xs={12} md={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus. Magni natus
          ipsam, nemo officiis dicta libero illo delectus, possimus in voluptatibus itaque et a
          doloremque ea, similique id necessitatibus.
        </Grid>
        <Grid item xs={12} md={4}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, labore, repellat aperiam
          excepturi porro id dolore fugiat possimus quibusdam, eius incidunt asperiores et quia quam
          consectetur sequi quos. Mollitia, saepe.
        </Grid>
      </Grid>
    </DefaultTemplate>
  );
};

export default Home;
