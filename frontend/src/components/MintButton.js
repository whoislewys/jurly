import Button from "@mui/material/Button";
import { Contract, utils } from "ethers";
import React, { useEffect, useState } from "react";
// import * as JurlyABI from "../ABIs/Jurly.json";
import ClippyPhygitalABI from "../ABIs/ClippyPhygital.json";
// import GenericNFTAbi from '../ABIs/GenericNFT.json';

function MintButton({ provider }) {
  const [signer, setSigner] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (provider == null) {
      return;
    }

    const init = async () => {
      const accounts = await provider.listAccounts();
      const signer = await provider.getSigner(accounts[0]);
      setSigner(signer);

      const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const contract = new Contract(
        contractAddress,
        ClippyPhygitalABI.abi,
        signer
      );
      setContract(contract);
    };
    init();
  }, [provider]);

  const mint = async () => {
    if (contract == null || signer == null) {
      return;
    }
    console.log("Bout to mint");
    const mintTx = await contract.mint(signer._address, "uri", {
      value: utils.parseEther("0.1"),
    });
    console.log("mint tx: ", mintTx);
    const mintResp = await mintTx.wait();
    console.log("mintResp: ", mintResp);
    // const bal =  await contract.balanceOf(signer._address);
    // console.log(33, bal)
  };

  return (
    <div>
      <Button variant="contained" onClick={mint}>
        Mint for 0.1 ETH
      </Button>
      {/* <p>Balance: {bal}</p> */}
    </div>
  );
}

export default MintButton;
