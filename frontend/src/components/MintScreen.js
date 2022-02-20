import { makeStyles } from '@mui/styles'
import React from "react"
import Mint from "../components/Mint"

const useStyles = makeStyles((theme) => ({
  mintScreen: {
    // background: "rgb(188,36,255)",
    // background: "linear-gradient(90deg, rgba(188,36,255,1) 0%, rgba(0,255,100,1) 100%)",
    backgroundColor: 'black',
  }
}))

const MintScreen = ({ provider }) => {
  const classes = useStyles()

  return (
    <div className={ classes.mintScreen }>
      <Mint/>
    </div>
  );
};

export default MintScreen;
