import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
// import { useEthers } from "@usedapp/core";

// function WalletButton() {

//   const { activateBrowserWallet, account, chainId } = useEthers()

//   const truncatedAccount = () => {
//     return `${account.substring(0,4)}...${account.substring(account.length - 4)}`
//   }

//   return (
//     <div>
//       {!account && <Button variant="outlined" onClick={activateBrowserWallet}> Connect </Button>}
//       {account && <Button variant="outlined">{truncatedAccount()}</Button>}
//       {account && <Button variant="outlined">Chain ID: {chainId}</Button>}
//     </div>
//   )
// }

// export default WalletButton;

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const [account, setAccount] = useState("");
  const [rendered, setRendered] = useState("");

  useEffect(() => {
    async function fetchAccount() {
      try {
        if (!provider) {
          return;
        }

        // Load the user's accounts.
        const accounts = await provider.listAccounts();
        // console.log('accounts: ', accounts);
        setAccount(accounts[0]);

        // Resolve the ENS name for the first account.
        // const name = await provider.lookupAddress(accounts[0]);
        setRendered(accounts[0].substring(0,6) + '...' + account.substring(36));

        // Render either the ENS name or the shortened account address.
        // if (name) {
        //   setRendered(accounts[0]);
        // } else {
        //   setRendered(account.substring(0, 6) + "..." + account.substring(36));
        // }
      } catch (err) {
        setAccount("");
        setRendered("");
        console.error(err);
      }
    }
    fetchAccount();
  }, [account, provider, setAccount, setRendered]);

  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </Button>
  );
}

export default WalletButton;
