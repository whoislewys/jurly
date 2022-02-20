import React, { useEffect, useState } from 'react'
import { useTheme } from "@emotion/react"
import {
  Card,
  useMediaQuery,
  CardActions,
  CardContent,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  MenuItem,
  Select,
  InputLabel
} from "@mui/material"
import { makeStyles } from '@mui/styles'
import { usePlacesWidget } from 'react-google-autocomplete'
import { GOOGLE_API_KEY } from '../env'

const useStyles = makeStyles((theme) => ({
  header: {
    color: 'white',
  },
  desktopRedeem: {
    height: 500,
    width: 500,
    borderRadius: 14,
    backgroundColor: '#202231',
  },
  mobileRedeem: {
    height: 500,
    width: '80%',
    borderRadius: 14,
    backgroundColor: '#202231',
  },
  mobileButton: {
    width: '85%',
    borderRadius: 14,
    height: 35,
    marginTop: 10,
    backgroundColor: '#161522',
    borderColor: '#2e3348',
    borderWidth: '1px',
    color: 'white',
  },
  desktopButton: {
    width: 300,
    borderRadius: 14,
    height: 35,
    marginTop: 10,
    backgroundColor: 'green',
    borderColor: '#2e3348',
    borderWidth: '1px',
  },
  redeemContainer: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
    padding: '5%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    width: '60%',
    marginTop: theme.spacing(2),
  },
  redeemButton: {
    backgroundColor: 'black',
    color: 'white',
  },
}))

function Redeem({ digitalContractt, ownedTokenIds }) {
  const theme = useTheme();
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:768px)')

  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('us')
  const [formValid, setFormValid] = useState(false)
  const [activeTokenId, setActiveTokenId] = useState(-1)

  // checks form validity
  useEffect(() => {
    if (address.length > 0 && emailValid() && activeTokenId) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }, [activeTokenId, address, email])

  const { ref: materialRef } = usePlacesWidget({
    apiKey: GOOGLE_API_KEY,
    onPlaceSelected: (place) => setAddress(place.formatted_address),
    inputAutocompleteValue: 'country',
    options: {
      componentRestrictions: { country },
      types: ['address'],
    },
  })

  const NftIdSelector = () => {
    if (ownedTokenIds === null) {
      return <></>;
    }

    return (
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">NFT to Redeem</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activeTokenId === -1 ? "" : activeTokenId}
          label="NFT to Redeem"
          onChange={(e) => setActiveTokenId(e.target.value)}
        >
          {ownedTokenIds.map((id) => {
            return (
              <MenuItem value={id} key={id}>
                {id}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  };

  const burn = async () => {
    const burnTx = await digitalContractt.burn(activeTokenId);
    console.log("burntx: ", burnTx);
  };

  const emailValid = () => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  }

  return (
    <div className={classes.redeemContainer}>
      <Card
        className={isDesktop ? classes.desktopRedeem : classes.mobileRedeem}
      >
        <CardContent className={classes.content}>
          <div>
            <Typography variant='h4' className={classes.header} gutterBottom>
              Claim your Jewelry
            </Typography>
          </div>

          <TextField
            className={classes.textField}
            fullWidth
            color='secondary'
            variant='outlined'
            inputRef={materialRef}
          />

          <TextField
            className={classes.textField}
            id='outlined-basic'
            label='Email'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box
            className={classes.textField}
          >
            <NftIdSelector />
          </Box>




        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
              disabled={!formValid}
              variant="outlined"
              sx={{ marginTop: theme.spacing(2), width: "15%" }}
              onClick={burn}
          >Redeem</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Redeem
