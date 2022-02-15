import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import WalletButton from "../components/WalletButton";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "black",
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    // "&:hover": {
    // color: "yellow",
    // borderBottom: "1px solid white",
    // },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          J
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </div>
        <WalletButton />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
