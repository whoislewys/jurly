import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Contract } from "ethers";
import React, { useEffect, useState } from "react";
import ClippyDigitalABI from "./ABIs/ClippyDigital.json";
import ClippyPhygitalABI from "./ABIs/ClippyPhygital.json";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import MintScreen from "./components/MintScreen";
import Navbar from "./components/Navbar";
import RedeemScreen from "./components/RedeemScreen";
import useWeb3Modal from "./hooks/useWeb3Modal";
import InfoScreen from "./components/InfoScreen";
import Footer from "./components/Footer"

function App() {
  const [balance, setBalance] = useState("");
  const [digitalContractt, setDigitalContract] = useState(null);
  const [ownedTokenIds, setOwnedTokenIds] = useState(null);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#E4595C",
      },
      alternateTextColor: "black",
      secondary: {
        main: "#ffffff",
      },
    },
  });

  useEffect(() => {
    if (provider == null) {
      return;
    }
    const getBalance = async () => {
      const accounts = await provider.listAccounts();
      const signer = await provider.getSigner(accounts[0]);

      const phygitalContractAddr = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const phygitalContract = new Contract(
        phygitalContractAddr,
        ClippyPhygitalABI.abi,
        signer
      );
      const phygitalBalance = await phygitalContract.balanceOf(
        await signer.getAddress()
      );
      console.log("phygital balance: ", phygitalBalance);

      const digitalContractAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
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

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* CssBaseline in themeprovider ensures dark mode gets applied, + other nice styling */}
        {/* you find more: https://mui.com/components/css-baseline */}
        <CssBaseline />
        <Navbar
          provider={provider}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
        />
        <Box backgroundColor='black' display='flex' justifyContent='center' alignItems='center'>
          <img
            src={require("./assets/hero1.jpg")}
            style={{
              width: '95%',
            }}
          />
        </Box>
        <HomeScreen provider={provider} />
        <MintScreen provider={provider} />
        <InfoScreen provider={provider} />
        <RedeemScreen
          digitalContractt={digitalContractt}
          ownedTokenIds={ownedTokenIds}
        />
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;

