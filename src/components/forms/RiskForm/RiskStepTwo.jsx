import React, { useState } from "react";
import {
  rangeOfIncomeOptions,
  savingsOptions,
  trentOptions,
  capitalPercentageOptions,
} from "../../config/constants";
import FormikControl from "../../formik/FormikControl";
import { useFormikContext } from "formik";

function RiskStepTwo() {
  const { values, errors, setTouched } = useFormikContext();
  const [percentage, setPercentage] = useState(0);

  React.useEffect(() => {
    const percentageCal =
      values.salary_percentage +
      values.income_front_own_business +
      values.rent_for_property_rental +
      values.Pensions_others +
      values.stock_investments +
      values.others_percentaje;
    // const percentageCal =
    //   values.salary_percentage + values.income_front_own_business;
    setPercentage(percentageCal);
  }, [
    values.salary_percentage,
    values.income_front_own_business,
    values.rent_for_property_rental,
    values.Pensions_others,
    values.stock_investments,
    values.others_percentaje,
  ]);

  return (
    <div className="md:p-[4%] p-[2%] space-y-2 font-monserrat font-bold">
      <h1 className="text-xl text-[#1A3B69] mb-[2%]">
        INFORMACIÓN FINANCIERA DEL CLIENTE
      </h1>
      <p>
        SELECCIONE EL RANGO EN EL QUE SE ENCUENTRA SU NIVEL DE INGRESOS ANUAL.
        El Ingreso anual está conformado por salarios, utilidades, otros
        ingresos
      </p>

      <div className="lg:w-1/3 w-full ">
        <FormikControl
          control="select"
          name={"level_of_income"}
          label={""}
          options={rangeOfIncomeOptions}
        />
      </div>
      <p>
         SEÑALE LA PROCEDENCIA DE SUS INGRESOS Y LA PROPORCIÓN QUE LE
        CORRESPONDE DEL TOTAL DE LOS MISMOS (El porcentaje debe sumar 100%)
      </p>
      <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full  ">
        <div className="space-y-4">
          FUENTE
          <FormikControl
            control="input"
            name={"salary"}
            label={""}
            placeholder={"Salario"}
            type="text"
          />
          <FormikControl
            control="input"
            name={"own_business_income"}
            label={""}
            placeholder={"Ingresos por negocio propio"}
            type="text"
          />
          <FormikControl
            control="input"
            name={"rent_for_real_state"}
            label={""}
            placeholder={"renta por alquiler de inmuebles"}
            type="text"
          />
          <FormikControl
            control="input"
            name={"pensions_and_others"}
            label={""}
            placeholder={"Pensiones, dietas, etc"}
            type="text"
          />
          <FormikControl
            control="input"
            name={"stock_inverstment"}
            label={""}
            placeholder={"Inversiones en bolsa"}
            type="text"
          />
          <FormikControl
            control="input"
            name={"others"}
            label={""}
            placeholder={"Otros"}
            type="text"
          />
          <p>TOTAL</p>
        </div>
        <div className="space-y-4">
          PORCENTANJE %
          <FormikControl
            control="number"
            name={"salary_percentage"}
            label={""}
          />
          <FormikControl
            control="number"
            name={"income_front_own_business"}
            label={""}
          />
          <FormikControl
            control="number"
            name={"rent_for_property_rental"}
            label={""}
          />
          <FormikControl control="number" name={"Pensions_others"} label={""} />
          <FormikControl
            control="input"
            name={"stock_investments"}
            label={""}
            type="number"
          />
          <FormikControl
            control="input"
            name={"others_percentaje"}
            label={""}
            type="number"
          />
          <p className=" text-right ">{percentage}</p>
        </div>
      </div>

      <p>ESPECIFIQUE A CUÁNTO ASCIENDE EL CAPITAL DISPONIBLE PARA INVERTIR :</p>

      <div className="lg:w-1/4 w-full">
        <FormikControl
          control="input"
          name={"stock_investments_amount"}
          label={"US"}
          type="number"
        />
      </div>
      <p>
        INDIQUE EL RANGO EN QUE SE ENCUENTRA EL PORCENTAJE DEL CAPITAL
        DISPONIBLE PARA INVERTIR CON RESPECTO AL TOTAL DE SU PATRIMONIO:
      </p>
      <div className="lg:w-1/4 w-full">
        <FormikControl
          control="select"
          name={"capital_percentage"}
          label={""}
          placeholder={"Menos del 10%"}
          options={capitalPercentageOptions}
        />
      </div>
      <p>
        SEÑALE CÓMO ESPERA QUE SEA LA TENDENCIA DE LA PRINCIPAL FUENTE DE
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
        ¿CUENTA CON AHORROS SUFICIENTES PARA AFRONTAR SITUACIONES IMPREVISTAS?
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
