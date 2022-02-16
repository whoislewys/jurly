import React from "react";
import { 
  Card, 
  makeStyles, 
  useMediaQuery,
  CardActions,
  CardContent,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import Autocomplete from "react-google-autocomplete";
import { GOOGLE_API_KEY } from "../env"
import { margin } from "@mui/system";
import MintButton from "./MintButton";

const useStyles = makeStyles((theme) => ({
  desktopRedeem: {
    height: 500,
    width: 500,
    borderRadius: 14,
    backgroundColor: '#202231'
  },
  mobileRedeem: {
    height: 500,
    width: "80%",
    borderRadius: 14,
    backgroundColor: '#202231'
  },
  mobileButton: {
    width: "85%",
    borderRadius: 14,
    height: 35,
    marginTop: 10,
    backgroundColor: '#161522',
    borderColor: '#2e3348',
    borderWidth: '1px'
  },
  desktopButton: {
    width: 300,
    borderRadius: 14,
    height: 35,
    marginTop: 10,
    backgroundColor: '#161522',
    borderColor: '#2e3348',
    borderWidth: '1px'
  },
  redeemContainer: {
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    padding: "5%"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

function MerchListing() {
  const classes = useStyles();
  const desktop = useMediaQuery('(min-width:768px)');

  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [formValid, setFormValid] = React.useState(false);

  const setFormvalid = () => {
    if (address.length > 0 && emailValid()) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }

  const emailValid = () => {
    return email.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value)
    setFormvalid()
  }

  const handleAddressInput = (place) => {
    setAddress(place.formatted_address)
    setFormvalid()
  }

  return (
    <div className={ classes.redeemContainer }>
      <Card className={ desktop ? classes.desktopRedeem : classes.mobileRedeem }>
        <CardContent className={ classes.content }>
          <div>
            <Typography sx={{ fontSize: 14 }} color="#7F7F7F" gutterBottom>
              Redeem
            </Typography>
          </div>
          <Autocomplete
            className={ desktop ? classes.desktopButton : classes.mobileButton }
            apiKey={GOOGLE_API_KEY}
            onPlaceSelected={(place) => {
              handleAddressInput(place)
            }}
            options={{
              types: ["address"],
            }}
          />
          <input 
            className={ desktop ? classes.desktopButton : classes.mobileButton }
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            value={email}
            onChange={e => handleEmailInput(e)}
          />
        </CardContent>
        <CardActions className={ classes.cardActions }>
          <Button 
            className={ desktop ? classes.desktopButton : classes.mobileButton } 
            variant="outlined" 
            disabled={!formValid} 
            size="small"
          >Redeem</Button>
          <MintButton/>
        </CardActions>
      </Card>
    </div>
  );
}

export default MerchListing;