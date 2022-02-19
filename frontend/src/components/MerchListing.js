import React from 'react'
import MerchContainer from './MerchContainer'
import { useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  desktop: {
    display: 'flex',
    justifyContent: 'center',
  },
  mobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

function MerchListing() {
  const classes = useStyles()
  const desktop = useMediaQuery('(min-width:768px)')

  return (
    <div className={desktop ? classes.desktop : classes.mobile}>
      <MerchContainer />
      <MerchContainer />
      <MerchContainer />
    </div>
  )
}

export default MerchListing
