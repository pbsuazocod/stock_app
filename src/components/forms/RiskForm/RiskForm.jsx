import React from "react";
import { useState } from "react";
import { useFormik, Formik, Form } from "formik";
import { Link } from "react-router-dom";

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
import { initialValues, validationSchema } from "./RiskValidationSchema";
import RiskStepOne from "./RiskStepOne";
import RiskStepTwo from "./RiskStepTwo";
import RiskStepThree from "./RiskStepThree";

function RiskForm() {
  // State Management
  const [formStep, setFormStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const currentPage = "riskpage";

  // Setup form with formik
  // const formik = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: validationSchema[formStep],
  //   onSubmit: (values) => {
  //     alert(values);
  //   },
  // });

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

      <Formik
        initialValues={initialValues}
      // validationSchema={currentValidationSchema}
      // onSubmit={_handleSubmit}
      >
        {(formik) => (
          <Form>
            {/* -----------------------------formStep 1 */}
            {formStep === 1 && (
              <RiskStepOne />
            )}

            {/* -----------------------------formStep 2 */}

            {formStep === 2 && (
              <RiskStepTwo />
            )}

            {/* -----------------------------formStep 3 */}

            {formStep === 3 && (
              <RiskStepThree />
            )}
            {/* -----------------------------formStep 4 */}

            {formStep === 4 && (
              <div className="p-[2%] space-y-4">
                <h1 className="text-xl text-[#1A3B69] mb-[2%]">
                  INFORMACIÓN DE PERFIL DE RIESGO DEL CLIENTE
                </h1>
                <h2 className="text-xl text-[#1A3B69] mb-[2%]">
                  DE ACUERDO A SU CONOCIMIENTO Y EXPERIENCIA, ¿CUÁL ES SU PREFERENCIA
                  RESPECTO AL RIESGO?
                </h2>
                <div>
                  <div className="flex items-center">
                    <input
                      formik={formik}
                      fieldName={"conservative"}
                      type="checkbox"
                    />
                    <label className="pl-2">
                      Conservador o adverso al riesgo (Rentista):
                    </label>
                  </div>
                  <p className="pl-[2%] text-justify">
                    Busca una inversión segura en la que el riesgo de pérdida de
                    capital aportado sea mínimo pero a la vez una mayor probabilidad
                    de preservar el capital. Se le recomienda una inversión en valores
                    con altas calificaciones o en fondos de inversión de dinero, en
                    valores de renta fija del Estado o con buenas calificaciones, con
                    riesgo muy reducido de pérdida de valor del capital invertido,
                    siempre que mantiene la inversión en el largo plazo.
                  </p>
                </div>
                <div>
                  <div className="flex items-center">
                    <input formik={formik} fieldName={"moderate"} type="checkbox" />
                    <label className="pl-2">Moderado:</label>
                  </div>
                  <p className="pl-[2%] text-justify">
                    Persigue mantener la estabilidad de su inversión, dispuesto a
                    aceptar modestos retornos a cambio de tener mayor seguridad de sus
                    inversiones, o rentabilidad ligeramente superior a los tipos de
                    interés del mercado bancario. Busca un equilibrio entre
                    rentabilidad y riesgo.
                  </p>
                </div>
                <div>
                  <div className="flex items-center">
                    <input formik={formik} fieldName={"aggressive"} type="checkbox" />
                    <label className="pl-2">Agresivo o especulador</label>
                  </div>
                  <p className="pl-[2%] text-justify">
                    Son inversores que tienen conocimiento del mercado donde están
                    invirtiendo, manejan herramientas de análisis fundamental y
                    técnico, asumen los riesgos de sus inversiones, buscan maximizar
                    la rentabilidad e invierten básicamente en valores de renta
                    variable y renta fija de alto riesgo sin importar la volatilidad
                    extrema de los mercados y las pérdidas potenciales
                  </p>
                </div>

                <p>
                  ¿CUÁL ES EL OBJETIVO O PROPÓSITO FUNDAMENTAL DE SUS INVERSIONES?
                  (HAGA UN COTEJO)
                </p>

                <div className="flex items-center">
                  <input
                    formik={formik}
                    fieldName={"invest_risk_free"}
                    type="checkbox"
                  />
                  <label className="pl-2">
                    Invertir en valores libres de riesgo y fácilmente convertibles en
                    efectivo
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    formik={formik}
                    fieldName={"moderate_risks"}
                    type="checkbox"
                  />
                  <label className="pl-2">
                    Invertir en valores líquidos y con riesgos moderados.
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    formik={formik}
                    fieldName={"acumulate_capital"}
                    type="checkbox"
                  />
                  <label className="pl-2">
                    Lograr un rendimiento que permita acumular capital para financiar
                    metas futuras.
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    formik={formik}
                    fieldName={"high_profitability"}
                    type="checkbox"
                  />
                  <label className="pl-2">
                    Obtener rentabilidad alta aunque esto signifique mayor riesgo.{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    formik={formik}
                    fieldName={"others_explain"}
                    type="checkbox"
                  />
                  <label className="pl-2">Otro (explique):___________________ </label>
                </div>
                <p className="text-justify">
                  IDENTIFIQUE CUÁL SERÍA LA REACCIÓN O DECISIÓN QUE USTED TOMARÍA, EN
                  EL SUPUESTO QUE ESCUCHARA NOTICIAS NEGATIVAS DE LA SITUACIÓN
                  ECONÓMICA LOCAL O INTERNACIONAL, SI OBSERVA QUE LOS ACTIVOS
                  FINANCIEROS ESTÁN TENIENDO UN DESEMPEÑO NEGATIVO, O SI APRECIA QUE
                  ESTÁ TENIENDO PÉRDIDAS DE CAPITAL EN SUS INVERSIONES:
                </p>
                <div className="flex items-center">
                  <input
                    formik={formik}
                    fieldName={"moderate_risks"}
                    type="checkbox"
                  />
                  <label className="pl-2">
                    Invertir en valores líquidos y con riesgos moderados.
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    formik={formik}
                    fieldName={"acumulate_capital"}
                    type="checkbox"
                  />
                  <label className="pl-2">
                    Lograr un rendimiento que permita acumular capital para financiar
                    metas futuras.
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    formik={formik}
                    fieldName={"high_profitability"}
                    type="checkbox"
                  />
                  <label className="pl-2">
                    Obtener rentabilidad alta aunque esto signifique mayor riesgo.{" "}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    formik={formik}
                    fieldName={"others_explain"}
                    type="checkbox"
                  />
                  <label className="pl-2">Otro (explique):___________________ </label>
                </div>
              </div>
            )}

            {/* -----------------------------formStep 5 */}
            {formStep === 5 && (
              <Link to="/" className="m-[2%]">
                <h1>EL FORMULARIO FUE ENVIADO EXITOSAMENTE.</h1>
              </Link>
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
                    className={`flex ${formStep === 1 ? "justify-end" : "justify-between"
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
                      className={`rounded-lg text-white h-12 lg:w-[25%] mr-[2%] lg:mr-0 text-sm mt-4 gap-2 flex justify-center items-center ${formStep === 4
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
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
}

export default RiskForm;
