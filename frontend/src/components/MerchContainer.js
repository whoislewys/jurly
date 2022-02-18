import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core'
import StockJewelry from '../stock-jewelry.png'

const useStyles = makeStyles((theme) => ({
  merchContainer: {
    maxWidth: '30%',
    minWidth: '230px',
    height: '70%',
    margin: '10px',
  },
  title: {
    fontSize: 22,
  },
  description: {
    fontSize: 16,
  },
  image: {
    width: '80%',
  },
}))

function MerchContainer() {
  const classes = useStyles()

  return (
    <Card className={classes.merchContainer}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          Jewelry Title
        </Typography>
        <Typography
          className={classes.description}
          color='textSecondary'
          gutterBottom
        >
          Jewelry Description
        </Typography>
        <img className={classes.image} src={StockJewelry} />
      </CardContent>
      <CardActions>
        <Button size='small'>Buy Now</Button>
      </CardActions>
    </Card>
  )
}

export default MerchContainer
