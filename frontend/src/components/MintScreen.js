import { makeStyles } from '@mui/styles'
import React from "react";

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
      Mint
    </div>
  );
};

export default MintScreen;