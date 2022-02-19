import { Typography } from "@mui/material";
import { Contract } from "ethers";
import React, { useEffect, useState } from "react";
import ClippyDigitalABI from "./ABIs/ClippyDigital.json";
import ClippyPhygitalABI from "./ABIs/ClippyPhygital.json";
import MintButton from "./components/MintButton";

const Home = ({ provider }) => {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    if (provider == null) {
      return;
    }
    const getBalance = async () => {
      const accounts = await provider.listAccounts();
      const signer = await provider.getSigner(accounts[0]);

      const phygitalContractAddr = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
      const phygitalContract = new Contract(
        phygitalContractAddr,
        ClippyPhygitalABI.abi,
        signer
      );
      const phygitalBalance = await phygitalContract.balanceOf(await signer.getAddress());
      console.log("phygital balance: ", phygitalBalance.toString());
      setBalance(phygitalBalance.toString());

      const digitalContractAddr = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
      const digitalContract = new Contract(
        digitalContractAddr,
        ClippyDigitalABI.abi,
        signer
      );
      const digitalBalance = await digitalContract.balanceOf(
        await signer.getAddress()
      );
      console.log("digital balance: ", digitalBalance.toString());
    };
    getBalance();
  }, [provider]);

  return (
    <div>
      <p>home</p>
      <MintButton provider={provider} />
      <Typography>Balance: {balance}</Typography>
    </div>
  );
};

export default Home;
