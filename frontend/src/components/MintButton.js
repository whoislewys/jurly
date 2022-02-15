import * as React from "react";
import Button from '@mui/material/Button';

import { useContractFunction } from '@usedapp/core'
import { Contract } from '@ethersproject/contracts'
import * as JurlyABI from '../ABIs/Jurly.json';

function MintButton() {

  const contractAddress = '0x8797847c9d63D8Ed9C30B058F408d4257A33B76C'
  const contract = new Contract(contractAddress, JurlyABI.abi)

  const { state, send } = useContractFunction(contract, 'mint')

  const mint = () => {
    send().then( res => {
      console.log(res)
    })
  }

  return (
    <div>
      <Button variant="outlined" onClick={mint}> Mint for 0.1 ETH </Button>
    </div>
  )
}

export default MintButton;