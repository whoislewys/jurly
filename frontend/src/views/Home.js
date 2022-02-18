import React from "react";
import MintButton from "../components/MintButton";
import MerchListing from "../components/MerchListing";

const Home = ({ provider }) => {
  console.log('[home] provider: ', provider);
  return (
    <div>
      <MintButton provider={provider}/>
      <MerchListing/>
    </div>
  )
};

export default Home;
