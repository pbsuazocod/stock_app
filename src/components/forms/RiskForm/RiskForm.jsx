import { useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "primereact/button";

// components
import FormWrapper from "../../UI/FormWrapper/FormWrapper";
import RiskStepOne from "./RiskStepOne";
import RiskStepTwo from "./RiskStepTwo";
import RiskStepThree from "./RiskStepThree";
import RiskStepFour from "./RiskStepFour";
import RiskStepFive from "./RiskStepFive";

// Validation

import { initialValues, validationSchema } from "./ValidationSchema";
import { submitForm } from "../../../utils/form_helper";

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
      return;
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
    if (activeStep === steps.length - 2) {
      console.log("form", values);
      submitForm(values, [
        "checkBoxOptions",
        "type_of_values",
        "languages",
        "alternative_investments",
        "purpose_of_investments",
        "economics_situation",
      ]);
      setActiveStep(activeStep + 1);
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
        validationSchema={currentValidationSchema}
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
                  <div
                    className={`flex ${
                      activeStep < 1
                        ? "justify-end"
                        : "md:justify-between flex-wrap gap-2 justify-center"
                    }`}
                  >
                    {activeStep > 0 && (
                      <>
                        <div>
                          <Button
                            type="button"
                            onClick={_handleBack}
                            label="ANTERIOR"
                            iconPos="left"
                            icon="pi pi-arrow-left"
                            className="p-button-raised"
                          />
                        </div>
                      </>
                    )}
                    <div className={`${activeStep === 3 ? "next" : ""}`}>
                      <Button
                        type="submit"
                        label={
                          activeStep === 3 ? "ENVIAR FORMULARIO" : "CONTINUAR"
                        }
                        iconPos="right"
                        icon="pi pi-arrow-right"
                        className="p-button-raised"
                      />
                    </div>
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
