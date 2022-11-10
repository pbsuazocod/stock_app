import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import React, { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";
import RiskPage from "./pages/RiskPage";
import BoardingPage from "./pages/BoardingPage";
import { useEffect, useState } from "react";
import axios from "axios";

const App = function () {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);

  // const { setAuthTokens } = useAuth();


  // data

useEffect(()=>{
  function postLogin () {
    axios.post('https://bdv-backend.staging.applab.do/api/auth/login', {
      email:'admin@admin.com',
      password:'secret'
    }).then((result) => {
      // console.log('result', result);
      if (result.status === 200) {
        localStorage.removeItem("tokens");
        localStorage.setItem("tokens", JSON.stringify(result.data.access_token));
        setLoggedIn(true);
        setIsError(false);
      } else {
        setIsError(true);
        setLoggedIn(false);
        localStorage.removeItem("tokens");
      }
    }).catch((e) => {
      console.log(e)
      setIsError(true);
      setLoggedIn(false);
      localStorage.removeItem("tokens");
    })
  }
  postLogin();
},[])




  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage isLoggedIn= {isLoggedIn} />} />
        {isLoggedIn && (<>
          <Route path="/formpage" element={<FormPage />} />
        <Route path="/onboarding" element={<BoardingPage />} />
        <Route path="/riskpage" element={<RiskPage />} />
        </>
        )}
      </Routes>
    </div>
  );
};

export default App;
