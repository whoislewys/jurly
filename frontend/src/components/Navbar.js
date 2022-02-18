import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import useWeb3Modal from "../hooks/useWeb3Modal";
import WalletButton from "./WalletButton";

export default function ButtonAppBar() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            G3M
          </Typography>
          <div>
            <WalletButton
              provider={provider}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
