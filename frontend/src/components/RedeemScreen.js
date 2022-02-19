import { makeStyles } from '@mui/styles'
import React from "react";
import Redeem from './Redeem';

const useStyles = makeStyles((theme) => ({
  redeemScreen: {
    height: "100vh",
    backgroundColor: "black"
  }
}))

const RedeemScreen = ({ digitalContractt, ownedTokenIds }) => {
  const classes = useStyles()

  return (
    <div className={ classes.redeemScreen }>
        <Redeem digitalContractt={digitalContractt} ownedTokenIds={ownedTokenIds}/>
    </div>
  );
};

export default RedeemScreen;