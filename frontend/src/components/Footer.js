import { makeStyles } from "@mui/styles";
import { Typography } from  "@mui/material";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    height: "100px"
  },
  name: {
    padding: "40px",
    color: "gray"
  }
}));

const Footer = ({ provider }) => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography className={classes.name}>
        © 2022 G3M
      </Typography>
      {/* <Typography>
        <a src="https://twitter.com/g3mNFT">Twitter: @g3mNFT</a>
      </Typography> */}
    </div>
  );
};

export default Footer;
