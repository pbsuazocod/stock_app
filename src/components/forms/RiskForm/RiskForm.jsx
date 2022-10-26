import { useState } from "react";
import { Formik, Form } from "formik";

// components
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import FormWrapper from "../../UI/FormWrapper/FormWrapper";
import RiskStepOne from "./RiskStepOne";
import RiskStepTwo from "./RiskStepTwo";
import RiskStepThree from "./RiskStepThree";
import RiskStepFour from "./RiskStepFour";
import RiskStepFive from "./RiskStepFive";

// Validation

import { initialValues, validationSchema } from "./ValidationSchema";

const currentPage = "riskpage";

// Form steps to be render

const steps = [
  "Form Step One",
  "Form Step two",
  "Form Step tree",
  "Form Step four",
  "Form Step Five",
];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <RiskStepOne />;
    case 1:
      return <RiskStepTwo />;
    case 2:
      return <RiskStepThree />;
    case 3:
      return <RiskStepFour />;
    case 4:
      return <RiskStepFive />;
    default:
      return <div>Not Found</div>;
  }
}

function RiskForm() {
  // State Management
  const [counter, setCounter] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  // Handlers

  const IncreasePersonInput = () => {
    setCounter(counter + 1);
  };

  const _handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function _handleSubmit(values, actions) {
    console.log(values);
    if (isLastStep) {
      console.log("form", values);
      alert(values);
      // _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  return (
    <FormWrapper currentStep={activeStep} currentPage={currentPage}>
      <Formik
        initialValues={initialValues}
        // validationSchema={currentValidationSchema}
        onSubmit={_handleSubmit}
      >
        {(formik) => (
          <Form>
            {_renderStepContent(activeStep)}

            {/* buttons  */}
            {!isLastStep ? (
              <div
                className={`mb-[3%] mr-[3%] ml-[3%] border-t-2 border-[#C1C1C1] flex`}
              >
                <div className="w-full pt-[2%]">
                  {activeStep === 2 && (
                    <div className="flex items-center pl-[2%] gap-2">
                      <button
                        onClick={IncreasePersonInput}
                        className="text-green-600"
                      >
                        <FaPlusCircle />
                      </button>
                      AÑADIR OTRA PERSONA
                    </div>
                  )}

                  <div
                    className={`flex ${
                      activeStep < 1 ? "justify-end" : "justify-between"
                    }`}
                  >
                    {activeStep > 0 && (
                      <>
                        <button
                          type="button"
                          onClick={_handleBack}
                          className="bg-[#1A3B69] rounded-lg text-white h-12 lg:w-[25%] w-[40%] mr-[2%] lg:mr-0 text-sm mt-4 gap-2 flex justify-center items-center"
                        >
                          <div className="lg:text-3xl text-xl ">
                            <FaArrowLeft />
                          </div>
                          ANTERIOR
                        </button>
                      </>
                    )}

                    <button
                      type="submit"
                      className={`rounded-lg text-white h-12 lg:w-[25%] mr-[2%] lg:mr-0 text-sm mt-4 gap-2 flex justify-center items-center ${
                        activeStep === 4
                          ? "w-[42%] pr-2 bg-[#40B879]"
                          : "bg-[#1A3B69] w-[40%]"
                      }`}
                    >
                      {activeStep === 4 ? "ENVIAR FORMALRIO" : "CONTINUAR"}
                      <div className="lg:text-3xl text-xl">
                        <FaArrowRight />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
}

export default RiskForm;
