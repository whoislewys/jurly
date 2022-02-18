import {Typography} from '@mui/material'
import ClippyPhygitalABI from './ABIs/ClippyPhygital.json';
import {Contract} from 'ethers';
import React, {useEffect, useState} from 'react'
import MintButton from './components/MintButton'


const Home = ({ provider }) => {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    if (provider == null) {
      return
    }
    const getBalance = async () => {
      const accounts = await provider.listAccounts()
      const signer = await provider.getSigner(accounts[0])

      const contractAddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
      const contract = new Contract(
        contractAddress,
        ClippyPhygitalABI.abi,
        signer,
      )

      const balTx = await contract.balanceOf(await signer.getAddress())
      setBalance(balTx.toString())
    }
    getBalance();
  }, [provider]);

  return (
    <div>
      <p>home</p>
      <MintButton provider={provider} />
      <Typography>Balance: {balance}</Typography>
    </div>
  )
}

export default Home

