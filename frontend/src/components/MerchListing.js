import React from "react";
import MerchContainer from "./MerchContainer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  MerchListing: {
    display: "flex",
    justifyContent: 'center'
  }
}));

function MerchListing() {
const classes = useStyles();

  return (
    <div className={ classes.MerchListing }>
      <MerchContainer/>
      <MerchContainer/>
      <MerchContainer/>
    </div>
  );
}

export default MerchListing;