import React from "react";
import { Form } from "formik";
import { Formik } from "formik";
import { useState } from "react";
import { Button } from "primereact/button";
import "./styles.css";

// components

import FormWrapper from "../../UI/FormWrapper/FormWrapper";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";
import FormStepSix from "./FormStepSix";

// Validation

import { initialValues, validationSchema } from "./ValidationSchema";

const currentPage = "profileForm";

// Form steps to be render

const steps = [
  "Form Step One",
  "Form Step two",
  "Form Step tree",
  "Form Step four",
  "Form Step Five",
  "Form Step Six",
];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <FormStepOne />;
    case 1:
      return <FormStepTwo />;
    case 2:
      return <FormStepThree />;
    case 3:
      return <FormStepFour />;
    case 4:
      return <FormStepFive />;
    case 5:
      return <FormStepSix />;
    default:
      return  ;
  }
}

function ProfileForm() {
  // Manage States
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const _handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function _handleSubmit(values, actions) {
    if (activeStep === steps.length - 2) {
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
        // validationSchema={currentValidationSchema}
        onSubmit={_handleSubmit}
      >
        {(formik) => (
          <Form>
            {_renderStepContent(activeStep)}

            {!isLastStep ? (
              <div
                className={`${
                  activeStep !== 3
                    ? " mb-[3%] mr-[3%] ml-[3%]  border-t-2 border-[#C1C1C1]"
                    : "mb-[3%] mr-[3%] ml-[3%] "
                }`}
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

                    <div className={`${activeStep === 4 ? "next" : ""}`}>
                      <Button
                        type="submit"
                        label={
                          activeStep === 4 ? "ENVIAR FORMALRIO" : "CONTINUAR"
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

export default ProfileForm;
