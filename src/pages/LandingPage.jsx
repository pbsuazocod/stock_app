import React from "react";
import PageWrapper from "../components/PageWrapper";
import logo_bursatiles from "../components/images/logo_bursatiles.png";
import logo_hencorp from "../components/images/logo_hencorp.png";
import { Link } from "react-router-dom";
import FormWrapper from "../components/UI/FormWrapper/FormWrapper";

function LandingPage() {
  return (
    <PageWrapper>
      <FormWrapper currentStep={0}>
        <div className=" flex h-[80%] items-center mr-[10%] ml-[10%] mt-[10%] mb-[10%] lg:justify-between justify-center gap-4 flex-wrap content-center">
          <Link
            to="/onboarding"
            className="flex flex-col p-[2%] items-center bg-white w-[45%] h-[40%] min-w-[200px] rounded-lg"
          >
            <img src={logo_hencorp} alt="logo corredora hencorp" />
            <div className="text-sm text-[#1A3B69] font-bold">
              <p>HENCORP, S.A. DE C.V.</p>
              <p>CASA DE CORREDORES DE BOLSA</p>
            </div>
          </Link>
          <Link
            to="/onboarding"
            className="p-[2%] flex flex-col items-center bg-white w-[45%] min-w-[200px] h-[40%] rounded-lg"
          >
            <img src={logo_bursatiles} alt="logo corredora bursatil" />
            <div className="text-sm text-[#1A3B69] font-bold">
              <p>SERVICIOS GENERALES</p>
              <p>BURSATILES S.A. DE C.V.</p>
            </div>
          </Link>
        </div>
      </FormWrapper>
    </PageWrapper>
  );
}

export default LandingPage;
