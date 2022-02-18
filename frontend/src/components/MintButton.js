import Button from '@mui/material/Button'
import { Contract, providers, utils } from 'ethers'
import React, { useEffect, useState } from 'react'
// import * as JurlyABI from "../ABIs/Jurly.json";
import ClippyPhygitalABI from '../ABIs/ClippyPhygital.json'
// import GenericNFTAbi from '../ABIs/GenericNFT.json';

function MintButton({ provider }) {
  const [signer, setSigner] = useState('')
  const [contract, setContract] = useState(null)
  const [bal, setBal] = useState(null)

  useEffect(() => {
    if (provider == null) {
      return
    }

    const init = async () => {
      const accounts = await provider.listAccounts()
      const signer = await provider.getSigner(accounts[0])
      setSigner(signer)

      const contractAddress = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6'
      const contract = new Contract(
        contractAddress,
        ClippyPhygitalABI.abi,
        signer,
      )
      setContract(contract)

      const balTx = await contract.balanceOf(await signer.getAddress())
      console.log('baltx tostr: ', balTx.toString())
      setBal(balTx.toString())
    }
    init()
  }, [provider])

  const mint = async () => {
    if (contract == null || signer == null) {
      return
    }
    console.log('Bout to mint')
    const mintTx = await contract.mint(signer._address, 'uri', {
      value: utils.parseEther('0.1'),
    })
    console.log('mint tx: ', mintTx)
    const mintResp = await mintTx.wait()
    console.log('mintResp: ', mintResp)
    // const bal =  await contract.balanceOf(signer._address);
    // console.log(33, bal)
  }

  return (
    <div>
      <Button variant='outlined' onClick={mint}>
        Mint for 0.1 ETH
      </Button>
      <p>Balance: {bal}</p>
    </div>
  )
}

export default MintButton
