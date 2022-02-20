import { makeStyles } from "@mui/styles";
import React from "react";
import {
  Card,
  CardActions,
  useMediaQuery,
  Typography,
  CardContent,
} from "@mui/material";
import MintButton from "./MintButton";

const useStyles = makeStyles((theme) => ({
  redeemContainer: {
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  desktopRedeem: {
    width: 500,
    borderRadius: 14,
    backgroundColor: "#202231",
  },
  mobileRedeem: {
    width: "80%",
    borderRadius: 14,
    backgroundColor: "#202231",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    padding: "5%",
    paddingBottom: theme.spacing(2),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

// TODO: this code is the exact same in two places (here and Redeem.js)...
// Eventually it would be good to rename this to Container.js use it as a
// modular component, and set the data within as props. Holding off for
// now as decoupling the logic in Redeem.js is non-trivial
const Mint = ({ provider }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <div className={classes.redeemContainer}>
      <Card
        className={isDesktop ? classes.desktopRedeem : classes.mobileRedeem}
      >
        <CardContent className={classes.content}>
          <Typography variant="h4">Mint</Typography>
        </CardContent>
        <CardContent className={classes.content}>
          <img src={require("../assets/clippy-render.jpg")} style={{
            width: '40vh',
            height: '40vh',
            }}/>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <MintButton provider={provider} />
        </CardActions>
      </Card>
    </div>
  );
};

export default Mint;
