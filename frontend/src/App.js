import React from "react";
import "./App.css";
import WalletButton from "./components/WalletButton";
import Home from "./Home";
import useWeb3Modal from "./hooks/useWeb3Modal";

function App() {
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  return (
    <div className="App">
      <WalletButton
        provider={provider}
        loadWeb3Modal={loadWeb3Modal}
        logoutOfWeb3Modal={logoutOfWeb3Modal}
      />
      <Home provider={provider}/>
    </div>
  );
}

export default App;
