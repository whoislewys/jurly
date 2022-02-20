import { makeStyles } from "@mui/styles";
import React from "react";
import Redeem from "./Redeem";

const useStyles = makeStyles((theme) => ({
  redeemScreen: {
    backgroundColor: "black",
    height: "90vh",
    background: "rgb(45,44,44)",
    background: "radial-gradient(circle, rgba(25,25,25,1) 0%, rgba(0,0,0,1) 100%)"
  }
}));

const RedeemScreen = ({ digitalContractt, ownedTokenIds }) => {
  const classes = useStyles();

  return (
    <div className={classes.redeemScreen}>
      <Redeem
        digitalContractt={digitalContractt}
        ownedTokenIds={ownedTokenIds}
      />
    </div>
  );
};

export default RedeemScreen;
