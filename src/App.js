import React, { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import RiskPage from "./pages/RiskPage";

const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/formpage" element={<FormPage />} />
        <Route path="/riskpage" element={<RiskPage />} />
      </Routes>
    </div>
  );
};

export default App;
