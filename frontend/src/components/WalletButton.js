import * as React from "react";
import Button from '@mui/material/Button';
import { useEthers } from '@usedapp/core'

function WalletButton() {

  const { activateBrowserWallet, account, chainId } = useEthers()

  const truncatedAccount = () => {
    return `${account.substring(0,4)}...${account.substring(account.length - 4)}`
  }

  return (
    <div>
      {!account && <Button variant="outlined" onClick={activateBrowserWallet}> Connect </Button>}
      {account && <Button variant="outlined">{truncatedAccount()}</Button>} 
      {account && <Button variant="outlined">Chain ID: {chainId}</Button>} 
    </div>
  )
}

export default WalletButton;