import * as React from "react";
import Button from '@mui/material/Button';

function MintButton() {

  const mint = () => {}

  return (
    <div>
      <Button variant="outlined" onClick={mint}> Mint for 0.1 ETH </Button>
    </div>
  )
}

export default MintButton;