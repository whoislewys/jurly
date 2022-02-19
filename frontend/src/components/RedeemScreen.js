import { makeStyles } from '@mui/styles'
import React from "react";

const useStyles = makeStyles((theme) => ({
  redeemScreen: {
    height: "100vh",
    backgroundColor: "black"
  }
}))

const RedeemScreen = ({ provider }) => {
  const classes = useStyles()

  return (
    <div className={ classes.redeemScreen }>
        Redeem
    </div>
  );
};

export default RedeemScreen;