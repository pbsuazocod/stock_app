import React, { useState } from "react";
import { ErrorMessage, useFormikContext } from "formik";

// Data

import {
  rangeOfIncomeOptions,
  savingsOptions,
  trentOptions,
  capitalPercentageOptions,
} from "../../config/constants";
import FormikControl from "../../formik/FormikControl";
import TextError from "../../UI/FormInput/TextError";

function RiskStepTwo() {
  // Manage State

  const { values, errors, setTouched, setFieldValue } = useFormikContext();
  const [percentage, setPercentage] = useState(0);

  React.useEffect(() => {
    const percentageCal =
      values.salary_percentage +
      values.percentage_front_own_business +
      values.percentage_from_rent +
      values.Pensions_others +
      values.percentage_stock_investments +
      values.others_percentage;
    setFieldValue("percentage", percentageCal);
  }, [
    values.salary_percentage,
    values.percentage_front_own_business,
    values.percentage_from_rent,
    values.Pensions_others,
    values.percentage_stock_investments,
    values.others_percentage,
  ]);

  return (
    <div className="md:p-[4%] p-[2%] space-y-2 font-monserrat font-bold">
      <h1 className="text-xl text-[#1A3B69] mb-[2%]">
        I.- INFORMACIÓN FINANCIERA DEL CLIENTE
      </h1>
      <p>
        2.-SELECCIONE EL RANGO EN EL QUE SE ENCUENTRA SU NIVEL DE INGRESOS
        ANUAL. El Ingreso anual está conformado por salarios, utilidades, otros
        ingresos
      </p>

      <div className="lg:w-1/3 w-full ">
        <FormikControl
          control="select"
          name={"anual_income"}
          label={""}
          options={rangeOfIncomeOptions}
        />
      </div>
      <p>
         3.-SEÑALE LA PROCEDENCIA DE SUS INGRESOS Y LA PROPORCIÓN QUE LE
        CORRESPONDE DEL TOTAL DE LOS MISMOS (El porcentaje debe sumar 100%)
      </p>
      <div className=" w-full">
        <div className="space-y-4 w-full">
          <div className="flex justify-between lg:w-[50%] md:w-[70%] w-full">
            <p>FUENTE</p>
            <p>PORCENTANJE %</p>
          </div>
          <div className="flex space-x-4">
            <div className="lg:w-[20vw] md:w-[32vw] w-[50vw]">
              <FormikControl
                control="input"
                name={"salary"}
                label={""}
                placeholder={"Salario"}
                type="text"
              />
            </div>
            <div className="md:w-[12vw] w-[30vw]">
              <FormikControl control="number" name={"salary_percentage"} />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="lg:w-[20vw] md:w-[32vw] w-[50vw]">
              <FormikControl
                control="input"
                name={"own_business_income"}
                label={""}
                placeholder={"Ingresos por negocio propio"}
                type="text"
              />
            </div>
            <div className="md:w-[12vw] w-[30vw]">
              <FormikControl
                control="number"
                name={"percentage_front_own_business"}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="lg:w-[20vw] md:w-[32vw] w-[50vw]">
              <FormikControl
                control="input"
                name={"rent_for_real_state"}
                label={""}
                placeholder={"renta por alquiler de inmuebles"}
                type="text"
              />
            </div>
            <div className="md:w-[12vw] w-[30vw]">
              <FormikControl control="number" name={"percentage_from_rent"} />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="lg:w-[20vw] md:w-[32vw] w-[50vw]">
              <FormikControl
                control="input"
                name={"pensions_and_others"}
                label={""}
                placeholder={"Pensiones, dietas, etc"}
                type="text"
              />
            </div>
            <div className="md:w-[12vw] w-[30vw]">
              <FormikControl control="number" name={"Pensions_others"} />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="lg:w-[20vw] md:w-[32vw] w-[50vw]">
              <FormikControl
                control="input"
                name={"stock_investments"}
                label={""}
                placeholder={"Inversiones en bolsa"}
                type="text"
              />
            </div>

            <div className="md:w-[12vw] w-[30vw]">
              <FormikControl
                control="number"
                name={"percentage_stock_investments"}
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="lg:w-[20vw] md:w-[32vw] w-[50vw]">
              <FormikControl
                control="input"
                name={"others"}
                label={""}
                placeholder={"Otros"}
                type="text"
              />
            </div>
            <div className="md:w-[12vw] w-[30vw]">
              <FormikControl control="number" name={"others_percentage"} />
            </div>
          </div>
        </div>

        <div className="mt-[1%] flex justify-between lg:w-[50%] md:w-[70%] w-full">
          <p>TOTAL</p>
          <div className="space-y-4">
            <p className=" text-right ">{values.percentage}%</p>
            <ErrorMessage name="percentage" component={TextError} />
          </div>
        </div>
      </div>

      <p>
        4.-ESPECIFIQUE A CUÁNTO ASCIENDE EL CAPITAL DISPONIBLE PARA INVERTIR :
      </p>

      <div className="lg:w-1/4 w-full">
        <FormikControl
          control="number"
          name={"stock_investments_amount"}
          label={"US"}
          // type="number"
          decimal
        />
      </div>
      <p>
        5.-INDIQUE EL RANGO EN QUE SE ENCUENTRA EL PORCENTAJE DEL CAPITAL
        DISPONIBLE PARA INVERTIR CON RESPECTO AL TOTAL DE SU PATRIMONIO:
      </p>
      <div className="lg:w-1/4 w-full">
        <FormikControl
          control="select"
          name={"capital_available"}
          label={""}
          placeholder={"Menos del 10%"}
          options={capitalPercentageOptions}
        />
      </div>
      <p>
        6.-SEÑALE CÓMO ESPERA QUE SEA LA TENDENCIA DE LA PRINCIPAL FUENTE DE
         INGRESOS EN LOS PRÓXIMOS 5 AÑOS:
      </p>
      <div className="lg:w-1/4 w-full">
        <FormikControl
          control="select"
          name={"income_source_trend"}
          label={""}
          options={trentOptions}
        />
      </div>
      <p>
         EN CASO, QUE SU RESPUESTA SEA “INESTABLE” O “NO SABE”, EXPLIQUE LAS
         RAZONES:
      </p>
      <div className="">
        <FormikControl
          control="textarea"
          name={"explain"}
          label={""}
          type={"textarea"}
          className={
            "w-full h-28 border-solid border-[#C1C1C1] border-2 rounded-md "
          }
        />
      </div>
      <p>
        ¿CUENTA CON AHORROS SUFICIENTES PARA AFRONTAR SITUACIONES
        IMPREVISTAS?
      </p>
      <div className="pl-[2%]">
        <FormikControl
          control="radio"
          label=""
          name="savings"
          options={savingsOptions}
          className="pt-2"
          layout
        />
      </div>
    </div>
  );
}

export default RiskStepTwo;
