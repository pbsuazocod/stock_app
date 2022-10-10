import React, { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";

const App = function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/formpage" element={<FormPage />} />
      </Routes>
    </div>
  );
};

export default App;
