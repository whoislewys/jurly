import React from "react";
import MintButton from "../components/MintButton";
import MerchListing from "../components/MerchListing";

const Home = ({ provider }) => {
  return (
    <div>
      <MintButton provider={provider}/>
      <MerchListing/>
    </div>
  )
};

export default Home;
