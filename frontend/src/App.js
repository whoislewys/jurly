import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to React Router!</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
