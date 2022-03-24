import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import NavBar from "./Components/NawBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Shelters from "./Pages/Shelters/Shelters";
import Rules from "./Pages/Rules/Rules";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shelters" element={<Shelters />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
