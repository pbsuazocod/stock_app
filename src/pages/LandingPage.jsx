import React from "react";
import PageWrapper from "../components/PageWrapper";
import logo_bursatiles from "../components/images/logo_bursatiles.png";
import logo_hencorp from "../components/images/logo_hencorp.png";
import { Link } from "react-router-dom";
import FormWrapper from "../components/UI/FormWrapper/FormWrapper";

function LandingPage() {
  return (
    <PageWrapper>
      <FormWrapper currentStep={9}>
        <div className=" flex h-[80%] items-center mr-[10%] ml-[10%] mt-[10%] mb-[10%] lg:justify-between justify-center gap-4 flex-wrap content-center">
          <Link
            to="/onboarding"
            className="flex justify-center p-[2%] items-center bg-white w-[45%] h-[40%] min-w-[200px] min-h-[6vw] rounded-lg"
          >
            <img
              className="w-[60%]"
              src={logo_hencorp}
              alt="logo corredora hencorp"
            />
          </Link>
          <Link
            to="/onboarding"
            className="p-[2%] flex justify-center bg-white w-[45%] min-h-[6vw] min-w-[200px] h-[40%] rounded-lg"
          >
            <img
              className="w-[60%]"
              src={logo_bursatiles}
              alt="logo corredora bursatil"
            />
          </Link>
        </div>
      </FormWrapper>
    </PageWrapper>
  );
}

export default LandingPage;
