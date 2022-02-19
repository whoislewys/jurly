import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Contract } from "ethers";
import React, { useEffect, useState } from "react";
import ClippyDigitalABI from "./ABIs/ClippyDigital.json";
import ClippyPhygitalABI from "./ABIs/ClippyPhygital.json";
import MintButton from "./components/MintButton";

const Home = ({ provider }) => {
  const [balance, setBalance] = useState("");
  const [digitalContractt, setDigitalContract] = useState(null);
  const [ownedTokenIds, setOwnedTokenIds] = useState(null);
  const [activeTokenId, setActiveTokenId] = useState(-1);
  const theme = useTheme();

  useEffect(() => {
    if (provider == null) {
      return;
    }
    const getBalance = async () => {
      const accounts = await provider.listAccounts();
      const signer = await provider.getSigner(accounts[0]);

      const phygitalContractAddr = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
      const phygitalContract = new Contract(
        phygitalContractAddr,
        ClippyPhygitalABI.abi,
        signer
      );
      const phygitalBalance = await phygitalContract.balanceOf(
        await signer.getAddress()
      );
      console.log("phygital balance: ", phygitalBalance);

      const digitalContractAddr = "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e";
      const digitalContract = new Contract(
        digitalContractAddr,
        ClippyDigitalABI.abi,
        signer
      );
      setDigitalContract(digitalContract);
      const digitalBalance = await digitalContract.balanceOf(
        await signer.getAddress()
      );
      setBalance(digitalBalance.toString());

      const ownedTokenIdss = [];
      for (let i = 0; i < digitalBalance; i++) {
        const tokenId = await digitalContract.tokenOfOwnerByIndex(
          await signer.getAddress(),
          i
        );
        console.log(`tok #${i} by owner. TokenId: ${tokenId}: `);
        ownedTokenIdss.push(tokenId);
      }
      console.log("ownedtokids: ", ownedTokenIdss);
      const tokenIdsStr = ownedTokenIdss.map((id) => id.toString());
      setOwnedTokenIds(tokenIdsStr);
      console.log("tokenIdsStr: ", tokenIdsStr);
    };
    getBalance();
  }, [provider]);

  const burn = async () => {
    const burnTx = await digitalContractt.burn(activeTokenId);
    console.log("burntx: ", burnTx);
  };

  const NftIdSelector = () => {
    if (ownedTokenIds == null) {
      return <></>;
    }

    return (
      <FormControl sx={{ marginTop: theme.spacing(2), width: "75%" }}>
        <InputLabel id="demo-simple-select-label">NFT to Redeem</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activeTokenId === -1 ? "" : activeTokenId}
          label="NFT to Redeem"
          onChange={(e) => setActiveTokenId(e.target.value)}
        >
          {ownedTokenIds.map((id) => {
            return (
              <MenuItem value={id} key={id}>
                {id}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  };

  return (
    <Box sx={{ padding: "0 20%", display: "flex", flexDirection: "column" }}>
      <Typography variant="h4">Mint</Typography>
      <MintButton provider={provider} />
      <Typography variant="h4" sx={{ marginTop: theme.spacing(2) }}>
        Redeem
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <NftIdSelector />
        <Button
          variant="outlined"
          sx={{ marginTop: theme.spacing(2), width: "15%" }}
          onClick={burn}
        >
          Redeem
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
