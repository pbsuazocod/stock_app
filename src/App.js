import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import React, { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import RiskPage from "./pages/RiskPage";
import BoardingPage from "./pages/BoardingPage";

const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/formpage" element={<FormPage />} />
        <Route path="/onboarding" element={<BoardingPage />} />
        <Route path="/riskpage" element={<RiskPage />} />
      </Routes>
    </div>
  );
};

export default App;
