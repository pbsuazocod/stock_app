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
      {/* -----------------------------formStep 1 */}
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

      {/* -----------------------------formStep 2 */}

      {formStep === 2 && (
        <div className="md:p-[4%] p-[2%] space-y-2">
          <h1 className="text-xl text-[#1A3B69] mb-[2%]">
            INFORMACIÓN FINANCIERA DEL CLIENTE
          </h1>
          <p>
            Seleccione el rango en el que se encuentra su nivel de ingresos
            anual. El Ingreso anual está conformado por salarios, utilidades,
            otros ingresos
          </p>

          <div className="lg:w-1/4 w-full ">
            <TextInput
              formik={formik}
              fieldName={"level_of_income"}
              label={""}
              placeholder={"Menores de US$15,000.00 dolares"}
              isAlphabetic
            />
          </div>
          <p>
            Señale la procedencia de sus ingresos y la proporción que le
            corresponde del total de los mismos. (El porcentaje debe sumar 100%)
          </p>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full  ">
            <div className="space-y-4">
              FUENTE
              <TextInput
                formik={formik}
                fieldName={"salary"}
                label={""}
                placeholder={"Salario"}
                isAlphabetic
              />
              <TextInput
                formik={formik}
                fieldName={"own-business_income"}
                label={""}
                placeholder={"Ingresos por negocio propio"}
                isAlphabetic
              />
              <TextInput
                formik={formik}
                fieldName={"rent_for_real_state"}
                label={""}
                placeholder={"renta por alquiler de inmuebles"}
                isAlphabetic
              />
              <TextInput
                formik={formik}
                fieldName={"pensions_and_others"}
                label={""}
                placeholder={"Pensiones, dietas, etc"}
                isAlphabetic
              />
              <TextInput
                formik={formik}
                fieldName={"stock-inverstment"}
                label={""}
                placeholder={"Inversiones en bolsa"}
                isAlphabetic
              />
              <TextInput
                formik={formik}
                fieldName={"others"}
                label={""}
                placeholder={"Otros"}
                isAlphabetic
              />
              <p>TOTAL</p>
            </div>
            <div className="space-y-4">
              PORCENTANJE %
              <NumberInput
                formik={formik}
                fieldName={"salary_percentage"}
                label={""}
              />
              <NumberInput
                formik={formik}
                fieldName={"income_front_own_business"}
                label={""}
              />
              <NumberInput
                formik={formik}
                fieldName={"rent_for_property_rental"}
                label={""}
              />
              <NumberInput
                formik={formik}
                fieldName={"Pensions_others"}
                label={""}
              />
              <NumberInput
                formik={formik}
                fieldName={"stock_investments"}
                label={""}
              />
              <NumberInput formik={formik} fieldName={"others"} label={""} />
              <p className=" text-right ">100%</p>
            </div>
          </div>

          <p>
            Especifique a cuánto asciende el capital disponible para invertir :
          </p>

          <div className="lg:w-1/4 w-full">
            <NumberInput
              formik={formik}
              fieldName={"stock_investments"}
              label={"US"}
            />
          </div>
          <p>
            Indique el rango en que se encuentra el porcentaje del capital
            disponible para invertir con respecto al total de su patrimonio:
          </p>
          <div className="lg:w-1/4 w-full">
            <TextInput
              formik={formik}
              fieldName={"capital_percentage"}
              label={""}
              placeholder={"Menos del 10%"}
              isAlphabetic
            />
          </div>
          <p>
            Señale cómo espera que sea la tendencia de la principal fuente de
            ingresos en los próximos 5 años:
          </p>
          <div className="lg:w-1/4 w-full">
            <TextInput
              formik={formik}
              fieldName={"income_source_trend"}
              label={""}
              placeholder={"Muy estable"}
              isAlphabetic
            />
          </div>
          <p>
            En caso, que su respuesta sea “inestable” o “no sabe”, explique las
            razones:
          </p>
          <div className="">
            <input
              formik={formik}
              fieldName={"language"}
              label={""}
              isAlphabetic
              type={"textarea"}
              className={
                "w-full h-28 border-solid border-[#C1C1C1] border-2 rounded-md "
              }
            />
          </div>
          <p>
            ¿Cuenta con ahorros suficientes para afrontar situaciones
            imprevistas?
          </p>
          <div className="pl-[2%]">
            <div className="flex items-center">
              <input formik={formik} type="radio" />
              <label className="pl-2">NO</label>
            </div>
            <div className="flex items-center">
              <input formik={formik} type="radio" />
              <label className="pl-2">
                SI, PUEDO CUBIR UN MAXIMO DE 6 MESES DE GASTOS MENSUALES
              </label>
            </div>
            <div className="flex items-center">
              <input formik={formik} type="radio" />
              <label className="pl-2">
                {" "}
                SI, PUEDO CUBIR UN MAXIMO DE 12 MESES DE GASTOS MENSUALES
              </label>
            </div>
          </div>
        </div>
      )}

      {/* -----------------------------formStep 3 */}

      {formStep === 3 && (
        <div>
          <h1 className="text-xl text-[#1A3B69] mb-[2%]">
            INFORMACIÓN FINANCIERA DEL CLIENTE
          </h1>
          <div className="pl-[1%]">
            <p>POSEE OTRAS INVERSIONES</p>
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

            <div className="mt-[2%] ml-[2%] border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
              <p>
                SI SU RESPUESTA ES AFIRMATIVA ESPECIFIQUE EN QUÉ CONSISTEN
                DICHAS INVERSIONES Y SUS MONTOS.
              </p>
              <div className="">
                <input
                  formik={formik}
                  fieldName={"language"}
                  label={""}
                  isAlphabetic
                  type={"textarea"}
                  className={
                    "w-full h-28 border-solid border-[#C1C1C1] border-2 rounded-md "
                  }
                />
              </div>
            </div>
          </div>
          <div className="pl-[1%]">
            <p>
              ¿TIENE EXPERIENCIA EN LA NEGOCIACIÓN DE VALORES EN LOS MERCADOS DE
              VALORES?
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

            <div className="mt-[2%] ml-[2%] border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
              <p>
                IDENTIFIQUE EL RANGO EN QUE SE ENCUENTRA LOS AÑOS DE EXPERIENCIA
                EN LAS NEGOCIACIONES EN LOS MERCADOS DE VALORES:
              </p>

              <div className="lg:w-1/4 w-full ">
                <TextInput
                  formik={formik}
                  fieldName={"level_of_income"}
                  label={""}
                  placeholder={"Menos del 1 año "}
                  isAlphabetic
                />
              </div>

              <p>
                INDIQUE EN QUÉ TIPO DE VALORES HA REALIZADO INVERSIONES EN LOS
                MERCADOS DE VALORES:
              </p>

              <div className="flex items-center">
                <input
                  formik={formik}
                  fieldName={"corporate_bonds"}
                  type="checkbox"
                />
                <label className="pl-2">Bonos corporativos</label>
              </div>
              <div className="flex items-center">
                <input
                  formik={formik}
                  fieldName={"government_bonds"}
                  type="checkbox"
                />
                <label className="pl-2">Bonos gubernamentales</label>
              </div>
              <div className="flex items-center">
                <input formik={formik} fieldName={"stocks"} type="checkbox" />
                <label className="pl-2">Acciones</label>
              </div>
              <div className="flex items-center">
                <input
                  formik={formik}
                  fieldName={"investment_funds"}
                  type="checkbox"
                />
                <label className="pl-2">Fondos de inversión</label>
              </div>
              <div className="flex items-center">
                <input formik={formik} fieldName={"others"} type="checkbox" />
                <label className="pl-2">Otros</label>
              </div>
              <div className="mt-[2%] lg:w-1/4 w-full border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                <TextInput
                  formik={formik}
                  fieldName={"market_investments"}
                  label={""}
                  isAlphabetic
                />
              </div>

              <p>
                SU EXPERIENCIA EN MERCADOS DE VALORES, ¿LA HA REALIZADO EN
                MERCADOS DE VALORES FUERA DE EL SALVADOR?
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
              <div className="mt-[2%] lg:w-1/4 w-full border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                <div>
                  PAÍS
                  <TextInput
                    formik={formik}
                    fieldName={"country_1"}
                    label={""}
                    isAlphabetic
                  />
                  <TextInput
                    formik={formik}
                    fieldName={"country_2"}
                    label={""}
                    isAlphabetic
                  />
                  <TextInput
                    formik={formik}
                    fieldName={"country_3"}
                    label={""}
                    isAlphabetic
                  />
                </div>

                <div>
                  AÑOS DE EXPERIENCIA
                  <div className=" w-full">
                    <NumberInput
                      formik={formik}
                      fieldName={"experience_1"}
                      label={""}
                    />
                  </div>
                  <div className=" w-full">
                    <NumberInput
                      formik={formik}
                      fieldName={"experience_2"}
                      label={""}
                    />
                  </div>
                  <div className=" w-full">
                    <NumberInput
                      formik={formik}
                      fieldName={"experience_3"}
                      label={""}
                    />
                  </div>
                </div>
                <div>
                  TIPO DE VALORES NEGOCIADOS
                  <TextInput
                    formik={formik}
                    fieldName={"negotiated_values_1"}
                    label={""}
                    isAlphabetic
                  />
                  <TextInput
                    formik={formik}
                    fieldName={"negotiated_values_2"}
                    label={""}
                    isAlphabetic
                  />
                  <TextInput
                    formik={formik}
                    fieldName={"negotiated_values_3"}
                    label={""}
                    isAlphabetic
                  />
                </div>
              </div>
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
