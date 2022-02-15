import * as React from "react";
import Button from '@mui/material/Button';
import { useEthers } from '@usedapp/core'

function WalletButton() {

  const { activateBrowserWallet, account } = useEthers()

  const truncatedAccount = () => {
    return `${account.substring(0,4)}...${account.substring(-4,4)}`
  }

  return (
    <div>
      {!account && <Button onClick={activateBrowserWallet}> Connect </Button>}
      {account && <p>{truncatedAccount()}</p>} 
    </div>
  )
}

export default WalletButton;