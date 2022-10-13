import { Form } from "formik";
import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

// components
import TextInput from "../../UI/FormInput/TextInput";
import NumberInput from "../../UI/FormInput/NumberInput";
import CalendarInput from "../../UI/FormInput/CalendarInput";
import MaskInput from "../../UI/FormInput/MaskInput";
import FormWrapper from "../../UI/FormWrapper/FormWrapper";

// Validation
import { initialValues, validationSchema } from "../ValidationSchema";

function ProfileForm() {
  // Manage States
  const [formStep, setFormStep] = useState(1);
  const [counter, setCounter] = useState(0);
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
    <FormWrapper currentStep={formStep}>
      <form className="">
        {JSON.stringify(formStep)}

        {/* ----------------------------formStep 1 */}
        {formStep == 1 && (
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

        {/* ----------------------------formStep 2 */}

        {formStep === 2 && (
          <>
            <div className="p-[2%] space-y-4">
              <div className="">
                <div className="flex items-center">
                  <input formik={formik} type="radio" />
                  <label className="pl-2">NEGOCIO PROPIO O INDEPENDIENTE</label>
                </div>
                <div className="flex items-center">
                  <input formik={formik} type="radio" />
                  <label className="pl-2">EMPLEO PRIVADO, EMPLEO PUBLICO</label>
                </div>
                <div className="flex items-center">
                  <input formik={formik} type="radio" />
                  <label className="pl-2">PENSIONADO</label>
                </div>
              </div>
              <div className="w-1/2">
                <TextInput
                  formik={formik}
                  fieldName={"company_name"}
                  label={"NOMBRE DE LA EMPRESA"}
                  className="w-1/2"
                  isAlphabetic
                />
              </div>
              <TextInput
                formik={formik}
                fieldName={"company_line_of_work"}
                label={"A QUÉ SE DEDICA LA EMPRESA"}
                isAlphabetic
              />
              <div className="md:flex gap-4 ">
                <TextInput
                  formik={formik}
                  fieldName={"job_title"}
                  label={"CARGO"}
                  isAlphabetic
                />
                <TextInput
                  formik={formik}
                  fieldName={"time_in_the_company"}
                  label={"TIEMPO QUE LABORA EN LA EMPRESA"}
                  isAlphabetic
                />
              </div>
              <div className="w-1/2">
                <MaskInput
                  formik={formik}
                  fieldName={"phone"}
                  label={"TELÉFONO"}
                  mask={"(999) 999-9999"}
                />
              </div>
              <TextInput
                formik={formik}
                fieldName={"full_address"}
                label={"DIRECCIÓN COMPLETA"}
                isAlphabetic
              />
            </div>
          </>
        )}

        {/* -----------------------------formStep 3 */}

        {formStep === 3 && (
          <div className="p-[2%]">
            <p>
              DESEA AUTORIZAR A OTRA PERSONA QUE GIRE INSTRUCCIONES EN SU NOMBRE
            </p>
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

            <div className="mt-[2%] border-l-4 pl-[2%] border-[#40B879] first-line:border-solid">
              <div className="grid grid-cols-1 md:grid-cols-2 p-[2%] gap-6">
                <div className="space-y-2">
                  <TextInput
                    formik={formik}
                    fieldName={"name"}
                    label={"NOMBRE"}
                    isAlphabetic
                  />
                  <CalendarInput
                    formik={formik}
                    fieldName={"day_of_birth"}
                    label={"FECHA DE NACIMIENTO"}
                  />
                  <TextInput
                    formik={formik}
                    fieldName={"place_of_birth"}
                    label={"LUGAR DE NACIMIENTO"}
                    isAlphabetic
                  />

                  <TextInput
                    formik={formik}
                    fieldName={"email"}
                    label={"CORREO ELECTRÓNICO"}
                    toolTip={
                      "Solicitamos su direción de correo para comunicarnos con usted, por su seguridad nunca le solicitaremos que nos proporcione ninguna información por esta vía."
                    }
                  />
                </div>

                <div className="space-y-2">
                  <MaskInput
                    formik={formik}
                    fieldName={"doc_id"}
                    label={"NO. DE DOC DE ID"}
                    mask={"999-9999999-9"}
                    toolTip={
                      "Solicitamos su número de documento para poder registrar y validar la información de identidad que es suministrada en este formulario."
                    }
                  />
                  <TextInput
                    formik={formik}
                    fieldName={"nacionality"}
                    label={"NACIONALIDAD"}
                    isAlphabetic
                  />
                  <TextInput
                    formik={formik}
                    fieldName={"job_title"}
                    label={"CARGO"}
                    isAlphabetic
                  />
                  <MaskInput
                    formik={formik}
                    fieldName={"phone_number"}
                    label={"TELÉFONO"}
                    mask={"(999) 999-9999"}
                  />
                </div>
              </div>
              <TextInput
                formik={formik}
                fieldName={"adress"}
                label={"DIRECCIÓN"}
                isAlphabetic
              />
            </div>
          </div>
        )}

        {/* -----------------------------formStep 4 */}

        {formStep === 4 && (
          <div className="space-y-4 ml-[2%] mr-[2%]">
            <div className="flex items-center">
              <input formik={formik} type="radio" />
              <label className="pl-2">
                POR COMPRAS DE VALORES O VENCIMIENTO DE OPERACIONES A CARGO DEL
                CLIENTE
              </label>
            </div>
            <div className="pl-[2%]">
              <div className="flex items-center">
                <input formik={formik} type="radio" />
                <label className="pl-2">CHEQUE A NOMBRE DE LA CASA</label>
              </div>
              <div className="flex items-center">
                <input formik={formik} type="radio" />
                <label className="pl-2">ABONO A CUENTA DE LA CASA</label>
              </div>
            </div>
            <div className="flex items-center">
              <input formik={formik} type="radio" />
              <label className="pl-2">
                POR VENTA DE VALORES O VENCIMIENTO DE OPERACIONES A FAVOR DEL
                CLIENTE
              </label>
            </div>
            <div className="pl-[2%]">
              <div className="flex items-center">
                <input formik={formik} type="radio" />
                <label className="pl-2">CHEQUE A NOMBRE DEL CLIENTE</label>
              </div>
              <div className="flex items-center">
                <input formik={formik} type="radio" />
                <label className="pl-2">ABONO A CUENTA DEL CLIENTE</label>
              </div>
            </div>
            <div className=" mb-[2%] border-t-2 border-[#C1C1C1]" />
            <div>
              <h1 className="text-xl text-[#1A3B69]"> CUENTA BANCARIA</h1>
              <div className="flex gap-6">
                <TextInput
                  formik={formik}
                  fieldName={"woner_of_the_account"}
                  label={"NOMBRE DEL TITULAR DE LA CUENTA"}
                  isAlphabetic
                />
                <TextInput
                  formik={formik}
                  fieldName={"bank_name"}
                  label={"BANCO"}
                  isAlphabetic
                />
              </div>
              <div className="flex gap-6">
                <TextInput
                  formik={formik}
                  fieldName={"type_of_account"}
                  label={"TIPO DE CUENTA"}
                  isAlphabetic
                />
                <TextInput
                  formik={formik}
                  fieldName={"account_number"}
                  label={"NÚMERO DE CUENTA"}
                  isAlphabetic
                />
              </div>
              <div className=" mt-[2%] mb-[2%] border-t-2 border-[#C1C1C1]" />
              <h1 className="text-xl text-[#1A3B69]">
                MEDIO PARA LA RECEPCION DE INFORMACION
              </h1>
              <input formik={formik} type="radio" />
              <label className="pl-2">
                ACEPTO RECIBIR Y ENVIAR LA INFORMACIÓN RELACIONADA A LA CUENTA
                DE VALORES POR MEDIOS ELECTRONICOS
              </label>
              <div className="mt-[2%] mb-[2%] border-t-2 border-[#C1C1C1]" />
              PEP (PERSONA EXPUESTA POLITICAMENTE)
              <span className="text-[#40B879]">*</span>
              <p className="font-normal text-sm">
                Personas naturales que desempeñan o han desempeñado funciones
                públicas en nuestro país o en el extranjero (Eje. Presidente,
                Ministros, Diputados, Alcaldes, Fiscal, Magistrado, Embajadores,
                etc)
              </p>
              <div className="flex gap-6 pt-2">
                <div className="flex items-center">
                  <input formik={formik} type="radio" />
                  <label className="pl-2">SÍ</label>
                </div>
                <div className="flex items-center">
                  <input formik={formik} type="radio" />
                  <label className="pl-2">NO</label>
                </div>
              </div>
              ES USTED CIUDADANO O RESIDENTE (GREEN CARD) ESTADOUNIDENSE
              <span className="text-[#40B879]">*</span>
              <div className="flex gap-6 pt-2">
                <div className="flex items-center">
                  <input formik={formik} type="radio" />
                  <label className="pl-2">SÍ</label>
                </div>
                <div className="flex items-center">
                  <input formik={formik} type="radio" />
                  <label className="pl-2">NO</label>
                </div>
              </div>
              <div className="flex gap-1">
                <span className="text-[#40B879]">*</span>
                <p className="font-normal text-sm">
                  En caso su respuesta sea SI la CCB le solicitara documentación
                  adicional en cumplimiento a la Ley FATCA y Ley contral el
                  Lavado de Dinero y Financiamiento al terrorismo
                </p>
              </div>
            </div>
          </div>
        )}

        {/* buttons  */}
        <div
          className={`m-[2%] border-t-2 border-[#C1C1C1] flex`}
        >
          <div className="w-full pt-[2%]">
            {formStep === 3 && (
              <div className="flex items-center gap-2">
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
          </div>
        </div>
      </form>
    </FormWrapper>
  );
}

export default ProfileForm;
