import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const [account, setAccount] = useState('')
  const [rendered, setRendered] = useState('')

  useEffect(() => {
    async function fetchAccount() {
      try {
        if (!provider) {
          return
        }

        // Load the user's accounts.
        const accounts = await provider.listAccounts()
        // console.log('accounts: ', accounts);
        setAccount(accounts[0])

        // Resolve the ENS name for the first account.
        let name = account.substring(0, 6) + '...' + account.substring(36)
        try {
          name = await provider.lookupAddress(accounts[0])
        } catch (e) {
          // console.error('Error looking up ENS name for address')
          // console.error("Error looking up ENS name for address: ", e);
        }

        // Render either the ENS name or the shortened account address.
        setRendered(name)
      } catch (err) {
        setAccount('')
        setRendered('')
        console.error(err)
      }
    }
    fetchAccount()
  }, [account, provider, setAccount, setRendered])

  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal()
        } else {
          logoutOfWeb3Modal()
        }
      }}
    >
      {rendered === '' && 'Connect'}
      {rendered !== '' && rendered}
    </Button>
  )
}

export default WalletButton
