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
import useWeb3Modal from "../hooks/useWeb3Modal";

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
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  // console.log('[Navbar] provider: ', provider)

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
        <WalletButton provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
