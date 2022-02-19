import { makeStyles } from '@mui/styles'
import {
  Typography,
} from "@mui/material";
import React from "react";
import MintButton from "../components/MintButton";

const useStyles = makeStyles((theme) => ({
  mintScreen: {
    height: "100vh",
    backgroundColor: "purple"
  }
}))

const MintScreen = ({ provider }) => {
  const classes = useStyles()

  return (
    <div className={ classes.mintScreen }>
      <Typography variant="h4">Mint</Typography>
      <MintButton provider={provider} />
    </div>
  );
};

export default MintScreen;