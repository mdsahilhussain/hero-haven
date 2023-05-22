import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
