import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";
import DrawerMenu from "./components/DrawerMenu";
import useMediaQuery from '@mui/material/useMediaQuery';
import useWeb3Modal from "./hooks/useWeb3Modal";

function App() {
  const desktop = useMediaQuery('(min-width:768px)');

  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  return (
    <div className="App">
      {desktop && <Navbar/>}
      {!desktop && <DrawerMenu/>}
      <Routes>
        <Route path="/" element={<Home provider={provider} />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
