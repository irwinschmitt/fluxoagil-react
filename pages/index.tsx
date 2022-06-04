import type { NextPage } from "next";
import { Grid, Typography } from "@mui/material";
import UploadArea from "components/molecules/UploadArea";
import DefaultTemplate from "components/templates/DefaultTemplate";

const Home: NextPage = () => {
  return (
    <DefaultTemplate>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" align="center">
            Recomendador de Disciplinas
          </Typography>
          <Typography variant="h6" align="center" fontWeight="light">
            Para você se formar no menor tempo possível
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <UploadArea />
        </Grid>

        <Grid item xs={12} md={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id quas quos nobis fugiat
          sed vitae itaque voluptate eum. Eligendi.
        </Grid>
        <Grid item xs={12} md={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id quas quos nobis fugiat
          sed vitae itaque voluptate eum. Eligendi.
        </Grid>
        <Grid item xs={12} md={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id quas quos nobis fugiat
          sed vitae itaque voluptate eum. Eligendi.
        </Grid>
        <Grid item xs={12} md={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id quas quos nobis fugiat
          sed vitae itaque voluptate eum. Eligendi.
        </Grid>
        <Grid item xs={12} md={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id quas quos nobis fugiat
          sed vitae itaque voluptate eum. Eligendi.
        </Grid>
        <Grid item xs={12} md={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id quas quos nobis fugiat
          sed vitae itaque voluptate eum. Eligendi.
        </Grid>
      </Grid>
    </DefaultTemplate>
  );
};

export default Home;
