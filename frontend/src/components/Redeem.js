import React from "react";
import {
  Card,
  makeStyles,
  useMediaQuery,
  CardActions,
  CardContent,
  Input,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import Autocomplete, {usePlacesWidget} from "react-google-autocomplete";
import { GOOGLE_API_KEY } from "../env";

const useStyles = makeStyles((theme) => ({
  header: {
    color: "white",
  },
  desktopRedeem: {
    height: 500,
    width: 500,
    borderRadius: 14,
    backgroundColor: "#202231",
  },
  mobileRedeem: {
    height: 500,
    width: "80%",
    borderRadius: 14,
    backgroundColor: "#202231",
  },
  mobileButton: {
    width: "85%",
    borderRadius: 14,
    height: 35,
    marginTop: 10,
    backgroundColor: "#161522",
    borderColor: "#2e3348",
    borderWidth: "1px",
    color: "white",
  },
  desktopButton: {
    width: 300,
    borderRadius: 14,
    height: 35,
    marginTop: 10,
    backgroundColor: "green",
    borderColor: "#2e3348",
    borderWidth: "1px",
  },
  redeemContainer: {
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    padding: "5%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    // color: "white",
    // backgroundColor: "black",
    width: '60%',
    marginTop: theme.spacing(2),
  },
  redeemButton: {
    backgroundColor: "black",
    color: "white",
  },
}));

function MerchListing() {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:768px)");

  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [country, setCountry] = React.useState("us");
  const [formValid, setFormValid] = React.useState(false);

  const { ref: materialRef } = usePlacesWidget({
    apiKey: GOOGLE_API_KEY,
    onPlaceSelected: (place) => console.log(place),
    inputAutocompleteValue: "country",
    options: {
      componentRestrictions: { country },
      types: ['address'],
    },
  });

  const setFormvalid = () => {
    if (address.length > 0 && emailValid()) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const emailValid = () => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setFormvalid();
  };

  const handleAddressInput = (place) => {
    setAddress(place.formatted_address);
    setFormvalid();
  };

  return (
    <div className={classes.redeemContainer}>
      <Card
        className={isDesktop ? classes.desktopRedeem : classes.mobileRedeem}
      >
        <CardContent className={classes.content}>
          <div>
            <Typography
              variant="h4"
              className={classes.header}
              color="#7F7F7F"
              gutterBottom
            >
              Claim your Jewelry
            </Typography>
          </div>

          <TextField
            className={classes.input}
            fullWidth
            color="secondary"
            variant="outlined"
            inputRef={materialRef}
          />

          {/*TODO: make styling not look poopoo*/}
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => handleEmailInput(e)}
          />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.redeemButton}
            variant="outlined"
            // disabled={!formValid}
            size="small"
          >
            Claim
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MerchListing;
