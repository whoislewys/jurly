import { makeStyles } from '@mui/styles'
import React from "react"
import Mint from "../components/Mint"

const useStyles = makeStyles((theme) => ({
  mintScreen: {
    height: "100vh",
    background: "rgb(45,44,44)",
    background: "radial-gradient(circle, rgba(25,25,25,1) 0%, rgba(0,0,0,1) 100%)"
    // background: "rgb(188,36,255)",
    // background: "linear-gradient(90deg, rgba(188,36,255,1) 0%, rgba(0,255,100,1) 100%)",
    // backgroundColor: 'black',
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
