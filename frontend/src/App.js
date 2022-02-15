import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";
import DrawerMenu from "./components/DrawerMenu";
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const desktop = useMediaQuery('(min-width:768px)');

  return (
    <div className="App">
      {desktop && <Navbar/>}
      {!desktop && <DrawerMenu/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
