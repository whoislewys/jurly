import React from "react";
import { 
  Card, 
  makeStyles, 
  useMediaQuery,
  CardActions,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  redeem: {
    height: 500,
    width: 500,
  },
  redeemContainer: {
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  redeemButton: {
    width: 300,
    borderRadius: 14,
    height: 35
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  }
}));

function MerchListing() {
const classes = useStyles();
const desktop = useMediaQuery('(min-width:768px)');

  return (
    <div className={ classes.redeemContainer }>
      <Card className={ classes.redeem }>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
        <CardActions className={ classes.cardActions }>
          <Button className={ classes.redeemButton } variant="outlined" size="small">Redeem</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MerchListing;