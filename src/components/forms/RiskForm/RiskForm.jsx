import React from "react";
import { useState } from "react";
import { useFormik } from "formik";

// components
import TextInput from "../../UI/FormInput/TextInput";
import NumberInput from "../../UI/FormInput/TextInput";
import CalendarInput from "../../UI/FormInput/CalendarInput";
import MaskInput from "../../UI/FormInput/MaskInput";
import FormWrapper from "../../UI/FormWrapper/FormWrapper";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

// Validation
import { initialValues, validationSchema } from "../ValidationSchema";

function RiskForm() {
  // State Management
  const [formStep, setFormStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const currentPage = "riskpage";

  // Setup form with formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema[formStep],
    onSubmit: (values) => {
      alert(values);
    },
  });

  // Handlers
  const clickHandler = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };

  const DecreceStepperHandler = (e) => {
    e.preventDefault();
    setFormStep(formStep - 1);
  };

  const IncreasePersonInput = () => {
    setCounter(counter + 1);
  };

  return (
    <FormWrapper currentStep={formStep} currentPage={currentPage}>
      {formStep === 1 && (
        <div className="p-[2%]">
          <div className="pl-[1%]">
            <p>¿DOMINA UN IDIOMA ADICIONAL AL IDIOMA ESPAÑOL?</p>
            <div className="flex gap-2">
              <div className="flex items-center">
                <input formik={formik} type="radio" />
                <label className="pl-2">SI</label>
              </div>
              <div className="flex items-center">
                <input formik={formik} type="radio" />
                <label className="pl-2">NO</label>
              </div>
            </div>
          </div>

          <div className="mt-[2%] ml-[2%] border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
            <div className=" grid-none md:grid grid-row-1 lg:grid-cols-4 grid-col-1 gap-4 ">
              <TextInput
                formik={formik}
                fieldName={"language"}
                label={"IDIOMA"}
                isAlphabetic
              />

              <NumberInput
                formik={formik}
                fieldName={"reading_domain"}
                label={"% DOMINIO DE LECTURA"}
              />
              <NumberInput
                formik={formik}
                fieldName={"writing_domain"}
                label={"% DOMINIO DE ESCRITURA"}
              />
              <NumberInput
                formik={formik}
                fieldName={"oral_expresion_domain"}
                label={"% DOMINIO EXPRESIÓN ORAL"}
              />
            </div>
          </div>
        </div>
      )}

      {/* buttons  */}
      {formStep < 5 ? (
        <div
          className={`mb-[3%] mr-[3%] ml-[3%] border-t-2 border-[#C1C1C1] flex`}
        >
          <div className="w-full pt-[2%]">
            {formStep === 1 && (
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
                formStep === 1 ? "justify-end" : "justify-between"
              }`}
            >
              {formStep > 1 && (
                <>
                  <button
                    onClick={DecreceStepperHandler}
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
                onClick={clickHandler}
                className={`rounded-lg text-white h-12 lg:w-[25%] mr-[2%] lg:mr-0 text-sm mt-4 gap-2 flex justify-center items-center ${
                  formStep === 4
                    ? "w-[42%] pr-2 bg-[#40B879]"
                    : "bg-[#1A3B69] w-[40%]"
                }`}
              >
                {formStep === 4 ? "ENVIAR FORMALRIO" : "CONTINUAR"}
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
    </FormWrapper>
  );
}

export default RiskForm;
