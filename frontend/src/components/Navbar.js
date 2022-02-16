import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import WalletButton from "../components/WalletButton";
import useWeb3Modal from "../hooks/useWeb3Modal";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#161522",
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
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
    marginLeft: theme.spacing(5),
    // "&:hover": {
    // color: "yellow",
    // borderBottom: "1px solid white",
    // },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  return (
    <AppBar className={classes.appbar} position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          G3M
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Mint
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
