import React from "react";
import { Grid } from "@material-ui/core/";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContentCard = () => {
  return (
    <>
      <Grid
        item
        xs={8}
        justifyContent="center"
        alignItems="center"
        container
        spacing={2}
      >
        <Item>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"></img>
        </Item>
      </Grid>
    </>
  );
};

export default ContentCard;
