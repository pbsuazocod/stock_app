import React from "react";
import { rangeOfIncomeOptions, savingsOptions } from "../../config/constants";
import FormikControl from "../../formik/FormikControl";

function RiskStepTwo() {
  return (
    <div className="md:p-[4%] p-[2%] space-y-2">
      <h1 className="text-xl text-[#1A3B69] mb-[2%]">
        INFORMACIÓN FINANCIERA DEL CLIENTE
      </h1>
      <p>
        Seleccione el rango en el que se encuentra su nivel de ingresos anual.
        El Ingreso anual está conformado por salarios, utilidades, otros
        ingresos
      </p>

      <div className="lg:w-1/4 w-full ">
        <FormikControl
          control="select"
          name={"level_of_income"}
          label={""}
          options={rangeOfIncomeOptions}
        />
      </div>
      <p>
        Señale la procedencia de sus ingresos y la proporción que le corresponde
        del total de los mismos. (El porcentaje debe sumar 100%)
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
            name={"own-business_income"}
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
            name={"stock-inverstment"}
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
            control="input"
            name={"salary_percentage"}
            label={""}
            type="number"
          />
          <FormikControl
            control="input"
            name={"income_front_own_business"}
            label={""}
            type="number"
          />
          <FormikControl
            control="input"
            name={"rent_for_property_rental"}
            label={""}
            type="number"
          />
          <FormikControl
            control="input"
            name={"Pensions_others"}
            label={""}
            type="number"
          />
          <FormikControl
            control="input"
            name={"stock_investments"}
            label={""}
            type="number"
          />
          <FormikControl
            control="input"
            name={"others"}
            label={""}
            type="text"
          />
          <p className=" text-right ">100%</p>
        </div>
      </div>

      <p>Especifique a cuánto asciende el capital disponible para invertir :</p>

      <div className="lg:w-1/4 w-full">
        <FormikControl
          control="input"
          name={"stock_investments_amount"}
          label={"US"}
          type="number"
        />
      </div>
      <p>
        Indique el rango en que se encuentra el porcentaje del capital
        disponible para invertir con respecto al total de su patrimonio:
      </p>
      <div className="lg:w-1/4 w-full">
        <FormikControl
          control="input"
          name={"capital_percentage"}
          label={""}
          placeholder={"Menos del 10%"}
        />
      </div>
      <p>
        Señale cómo espera que sea la tendencia de la principal fuente de
        ingresos en los próximos 5 años:
      </p>
      <div className="lg:w-1/4 w-full">
        <FormikControl
          control="input"
          name={"income_source_trend"}
          label={""}
          placeholder={"Muy estable"}
        />
      </div>
      <p>
        En caso, que su respuesta sea “inestable” o “no sabe”, explique las
        razones:
      </p>
      <div className="">
        <FormikControl
          control="textarea"
          name={"language"}
          label={""}
          type={"textarea"}
          className={
            "w-full h-28 border-solid border-[#C1C1C1] border-2 rounded-md "
          }
        />
      </div>
      <p>
        ¿Cuenta con ahorros suficientes para afrontar situaciones imprevistas?
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
