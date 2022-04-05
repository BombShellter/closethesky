import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Shelters from "./Pages/Shelters/Shelters";
import Rules from "./Pages/Rules/Rules";
import Layout from "./Components/Layout/layout";
import ShelterStatistic from "./Pages/ShelterStatistic/ShelterStatistic";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/shelters" element={<Shelters />} />
          <Route
            path="/shelters/shelter-statistic"
            element={<ShelterStatistic />}
          />
          <Route path="/rules" element={<Rules />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
