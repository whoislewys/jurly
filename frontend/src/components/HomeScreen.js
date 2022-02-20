import { makeStyles } from "@mui/styles";
import React from "react";
import Home from "../Home";

const useStyles = makeStyles((theme) => ({
  homeScreen: {
    backgroundColor: "black",
  },
}));

const HomeScreen = ({ provider }) => {
  const classes = useStyles();

  return (
    <div className={classes.homeScreen}>
      <Home provider={provider} />
    </div>
  );
};

export default HomeScreen;
