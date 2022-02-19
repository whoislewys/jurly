import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";
import "./App.css";
import ContentCard from "./components/ContentCard";
import Navbar from "./components/Navbar";
import Home from "./Home";
import useWeb3Modal from "./hooks/useWeb3Modal";

function App() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

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
        <ContentCard />
        <Home provider={provider} />
      </ThemeProvider>
    </div>
  );
}

export default App;
