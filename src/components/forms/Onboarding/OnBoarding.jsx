import React from "react";
import FormWrapper from "../../UI/FormWrapper/FormWrapper";
import { MdAddAPhoto } from "react-icons/md";
import { useState } from "react";
import photo from "../../images/photo.png";
import { TbChecks } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { Button } from "primereact/button";

function OnBoarding() {
  const currentPage = "onBording_step_1";
  // manage state
  const [activeStep, setActiveStep] = useState(6);
  const location = useLocation()
  const { market_id } = location.state

  // Form steps to be render
  return (
    <FormWrapper currentStep={activeStep} currentPage={currentPage}>
      {activeStep === 6 && (
        <>
          <div className=" flex flex-col pt-[12%] items-center bg-white md:w-full h-80 w-[85vw]">
            <button
              onClick={() => {
                setActiveStep(activeStep + 1);
              }}
            >
              <MdAddAPhoto className="text-6xl" />
            </button>
            <h1>Haga click para abrir la camara</h1>
            <footer className="flex flex-col justify-center text-white items-center bg-gray-500 w-full h-[20%]  mt-auto">
              <h1>Requerimos fotos de su documento</h1>
            </footer>
          </div>
          <div className="border-gray-30 0 border-t-4 mt-[10%] mb-[5%] mr-[2%] ml-[2%]" />{" "}
        </>
      )}

      {activeStep === 7 && (
        <>
          <div className="flex flex-col items-center justify-center w-full h-80">
            <button
              onClick={() => {
                setActiveStep(activeStep + 1);
              }}
              className="bg-white w-[60%] rounded-2xl"
            >
              <div className="bg-blue-500 flex justify-center">
                <h1 className="bold text-white">ID CARD</h1>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div>
                  <img className="md:w-[10vw] w-[20vw] h-auto" src={photo} alt="" />
                </div>
                <div className="pl-[10%] flex flex-col text-justify space-y-2">
                  <h1 className="text-2xl bold">001-000100-8</h1>
                  <h1>Lugar de nacimiento</h1>
                  <h1>Fecha de nacimiento</h1>
                  <h1>Nacionalidad</h1>
                  <h1>Fecha de expiraci??n</h1>
                  <h1>Ocupaci??n</h1>
                </div>
              </div>
            </button>
          </div>
        </>
      )}

      {activeStep === 8 && (
        <>
          <div className="flex flex-col items-center justify-center w-full h-80">
            <div className="flex flex-col items-center justify-center">
              <TbChecks className="text-[20vh] text-green-500" />
              <h1 className="text-center">INFORMACI??N VALIDADA CORRECTAMENTE</h1>
            </div>
            <Link className="mt-[2%]" to="/formpage" state={{ market_id }}>
              <Button
                type="button"
                label="CONTINUAR"
                iconPos="right"
                icon="pi pi-arrow-right"
                className="p-button-raised"
              />
            </Link>
          </div>
        </>
      )}
    </FormWrapper>
  );
}

export default OnBoarding;
