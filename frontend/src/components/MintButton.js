import { Typography } from "@material-ui/core";
import { badgeUnstyledClasses } from "@mui/base";
import Button from "@mui/material/Button";
import { Contract } from "ethers";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
// import * as JurlyABI from "../ABIs/Jurly.json";
import * as ClippyPhygitalABI from "../ABIs/ClippyPhygital.json";

function MintButton({ provider }) {
  // const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  const [signer, setSigner] = useState("");
  const [contract, setContract] = useState(null);
  const [bal, setBal] = useState(null);

  useEffect(() => {
    if (provider == null) {
      return;
    }
    const init = async () => {
      const accounts = await provider.listAccounts();
      console.log("accounts: ", accounts);
      const signer = await provider.getSigner(accounts[0]);
      console.log("accounts: ", signer);
      setSigner(signer);

      const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const contract = new Contract(contractAddress, ClippyPhygitalABI.abi, signer);
      console.log("Contract: ", contract);
      setContract(contract);

      console.log('wtf');
      const balTx = await contract.balanceOf(signer._address);
      const balresp = await balTx.wait();
      console.warn('balresp :', balresp);
      setBal(balresp);
    };
    init();

  }, [provider]);


  // const bal = async () => {
  //   if (contract == null || signer == null) {
  //     return;
  //   }

  //   console.log(1, signer._address)
  //   console.log(2, contract)
  //   console.warn('callin balanceof:');
  //   const balTx = await contract.balanceOf(signer._address);
  //   const balresp = await balTx.wait();
  //   console.warn('balresp :', balresp);
  //   return balresp
  // } 
  
  const mint = async () => {
    if (contract == null || signer == null) {
      return;
    }
    console.log('Bout to mint')
    const mintTx = await contract.mint(signer._address, "uri", {
      value: ethers.utils.parseEther("0.1"),
    });
    console.log("mint tx: ", mintTx);
    const mintResp = await mintTx.wait();
    console.log("mintResp: ", mintResp);
    // const bal =  await contract.balanceOf(signer._address);
    // console.log(33, bal)
  };

  return (
    <div>
      <Button variant="outlined" onClick={mint}>
        {" "}
        Mint for 0.1 ETH{" "}
        {/* `bal: ${bal()}` */}
      </Button>
      <Typography>{bal}</Typography>
    </div>
  );
}

export default MintButton;
