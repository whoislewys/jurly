import { makeStyles } from '@mui/styles'
import React from "react"
import Mint from "../components/Mint"

const useStyles = makeStyles((theme) => ({
  mintScreen: {
    height: "100vh",
    background: "rgb(45,44,44)",
    background: "radial-gradient(circle, rgba(25,25,25,1) 0%, rgba(0,0,0,1) 100%)"
  }
}))

const MintScreen = ({ provider }) => {
  const classes = useStyles()

  return (
    <div className={ classes.mintScreen }>
      <Mint provider={provider}/>
    </div>
  );
};

export default MintScreen;
