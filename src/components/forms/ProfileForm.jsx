import { Form } from "formik";
import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// components
import TextInput from "../UI/FormInput/TextInput";
import NumberInput from "../UI/FormInput/NumberInput";
import CalendarInput from "../UI/FormInput/CalendarInput";
import MaskInput from "../UI/FormInput/MaskInput";

// Validation

import { initialValues, validationSchema } from "./ValidationSchema";

function ProfileForm() {
  const [formStep, setFormStep] = useState(0);

  // Setup form with formik

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema[formStep],
    onSubmit: (values) => {
      alert(values);
    },
  });

  const clickHandler = (e) => {
    e.preventDefault();
    setFormStep(formStep + 1);
  };

  const DecreceStepperHandler = (e) => {
    e.preventDefault();
    setFormStep(formStep - 1);
  };

  return (
    <form className="">
      {JSON.stringify(formStep)}
      {/* formStep 1 */}
      {formStep == 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 p-[2%] gap-6">
            <div className="space-y-2">
              <TextInput
                formik={formik}
                fieldName={"name"}
                label={"NOMBRE"}
                isAlphabetic
              />
              <NumberInput formik={formik} fieldName={"age"} label={"EDAD"} />
              <TextInput
                formik={formik}
                fieldName={"type_of_document"}
                label={"TIPO DE DOCUMENTO"}
                isAlphabetic
              />
              <CalendarInput
                formik={formik}
                fieldName={"issue_date"}
                label={"FECHA DE EMISIÓN"}
              />
              <TextInput
                formik={formik}
                fieldName={"marital_status"}
                label={"ESTADO CIVIL"}
                isAlphabetic
              />
              <TextInput
                formik={formik}
                fieldName={"address"}
                label={"DIRECCIÓN"}
                isAlphabetic
              />
              <MaskInput
                formik={formik}
                fieldName={"home_number"}
                label={"TELÉFONO CASA"}
                mask={"(999) 999-9999"}
              />
              <TextInput
                formik={formik}
                fieldName={"email"}
                label={"CORREO ELECTRÓNICO"}
                toolTip={
                  "Solicitamos su direción de correo para comunicarnos con usted, por su seguridad nunca le solicitaremos que nos proporcione ninguna información por esta vía."
                }
              />
              <TextInput
                formik={formik}
                fieldName={"home"}
                label={"RESIDENCIA"}
                isAlphabetic
              />
            </div>
            <div className="space-y-2 ">
              {/* 2DO COLUMN */}
              <TextInput
                formik={formik}
                fieldName={"nacionality"}
                label={"NACIONALIDAD"}
                isAlphabetic
              />
              <CalendarInput
                formik={formik}
                fieldName={"day_of_birth"}
                label={"FECHA DE NACIMIENTO"}
              />
              <MaskInput
                formik={formik}
                fieldName={"identification_card"}
                label={"NÚMERO DE DOCUMENTO"}
                mask={"999-9999999-9"}
                toolTip={
                  "Solicitamos su número de documento para poder registrar y validar la información de identidad que es suministrada en este formulario."
                }
              />
              <CalendarInput
                formik={formik}
                fieldName={"expiration_date"}
                label={"FECHA DE VENCIMIENTO"}
              />
              <TextInput
                formik={formik}
                fieldName={"profession"}
                label={"PROFESIÓN"}
                isAlphabetic
              />
              <NumberInput
                formik={formik}
                fieldName={"nit_number"}
                label={"NÚMERO DE NIT"}
              />
              <MaskInput
                formik={formik}
                fieldName={"cellphone_number"}
                label={"TELÉFONO CELULAR"}
                mask={"(999) 999-9999"}
              />
            </div>
          </div>
        </>
      )}

      {/* formStep 2 */}

      <div>
        <div className="flex items-center">
          <input formik={formik} type="radio"/>
          <label className="pl-2">NEGOCIO PROPIO O INDEPENDIENTE</label>
        </div>
        <div className="flex items-center">
          <input formik={formik} type="radio"/>
          <label className="pl-2">EMPLEO PRIVADO, EMPLEO PUBLICO</label>
        </div>
        <div className="flex items-center">
          <input formik={formik} type="radio"/>
          <label className="pl-2">PENSIONADO</label>
        </div>
        <TextInput
                formik={formik}
                fieldName={"company_name"}
                label={"NOMBRE DE LA EMPRESA"}
                isAlphabetic
              />
        <TextInput
                formik={formik}
                fieldName={"company_line_of_work"}
                label={"A QUÉ SE DEDICA LA EMPRESA"}
                isAlphabetic
              />
        <TextInput
                formik={formik}
                fieldName={"job_title"}
                label={"CARGO"}
                isAlphabetic
              />
        <TextInput
                formik={formik}
                fieldName={"time_in_the_company"}
                label={""}
                isAlphabetic
              />

      </div>

      {/* buttons  */}
      <div
        className={`mr-[4%] ml-[4%] divide-y-8 h-20 border-t-2 border-[#C1C1C1] flex ${
          formStep <= 0 ? "justify-end" : "justify-between"
        } `}
      >
        {formStep > 0 && (
          <>
            <button
              onClick={DecreceStepperHandler}
              className="bg-[#1A3B69] rounded-lg text-white w-52 h-12 mt-4 gap-2 flex justify-center items-center"
            >
              <div className="text-3xl">
                <FaArrowLeft />
              </div>
              ANTERIOR
            </button>
          </>
        )}
        <button
          onClick={clickHandler}
          className="bg-[#1A3B69] rounded-lg text-white w-52 h-12 mt-4 gap-2 flex justify-center items-center"
        >
          CONTINUAR
          <div className="text-3xl">
            <FaArrowRight />
          </div>
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
