import React from "react";
import FormikControl from "../../formik/FormikControl";
import { useState } from "react";
import { useFormikContext } from "formik";

// Data

import { radioOptions } from "../../config/constants";
import { stockMarketOptions } from "../../config/constants";
import { outsideSalvadorOptions } from "../../config/constants";
import tooltip from "../../images/tooltip.png";

import {
  levelOfIncomeOptions,
  checkBoxOptions,
  alternativeInvestmentsOptions,
} from "../../config/constants";

function RiskStepThree() {
  // Manage state

  const [disableInvestment, setDisableInvestment] = useState(true);
  const [salMarkets, setSalMarkets] = useState(true);
  const [otherOptions, setOtherOptions] = useState(true);
  const [alternativeDisable, setAlternativeDisable] = useState(true);
  const [stockMarketExperience, setStockMarketExperience] = useState(true);
  const { values } = useFormikContext();

  React.useEffect(() => {
    if (values.other_investments === "yes") {
      setDisableInvestment(false);
    } else if (values.other_investments === "no") {
      setDisableInvestment(true);
    }
  }, [values.other_investments]);

  React.useEffect(() => {
    if (values.stock_market_experience === "yes") {
      setStockMarketExperience(false);
    } else if (values.stock_market_experience === "no") {
      setStockMarketExperience(true);
    }
  }, [values.stock_market_experience]);

  React.useEffect(() => {
    if (values.outside_salvador_experience === "yes") {
      setSalMarkets(false);
    } else if (values.outside_salvador_experience === "no") {
      setSalMarkets(true);
    }
  }, [values.outside_salvador_experience]);

  React.useEffect(() => {
    const otherOption = values.checkBoxOptions.find(
      (value) => value === "Otros"
    );
    setOtherOptions(!otherOption ? true : false);
  }, [values.checkBoxOptions]);

  React.useEffect(() => {
    const alternativeOption = values.alternative_investments.find(
      (value) => value === "Ninguno (Sólo indique)"
    );
    setAlternativeDisable(!alternativeOption ? true : false);
  }, [values.alternative_investments]);

  return (
    <div className="p-[2%] space-y-4 font-montserrat font-bold">
      <h1 className="text-xl text-[#1A3B69] mb-[2%]">
        II.-INFORMACIÓN DE INVERSIÓN DEL CLIENTE
      </h1>
      <p>7.-¿POSEE OTRAS INVERSIONES?</p>
      <div className="pl-[1%]">
        <FormikControl
          control="radio"
          label=""
          name="other_investments"
          options={radioOptions}
          className="pt-2"
        />

        <div className="mt-[2%] pr-[2%] pl-[1%]">
          <p>
            SI SU RESPUESTA ES AFIRMATIVA ESPECIFIQUE EN QUÉ CONSISTEN DICHAS
            INVERSIONES Y SUS MONTOS.
          </p>

          <FormikControl
            control="input"
            name={"investment_information"}
            label={""}
            type={"textarea"}
            disabled={disableInvestment}
            className={
              "w-full h-16 border-solid border-[#C1C1C1] border-2 rounded-md "
            }
          />
        </div>
      </div>
      <div className="pl-[1%]">
        <p className="flex gap-3">
          8.-¿TIENE EXPERIENCIA EN LA NEGOCIACIÓN DE VALORES EN LOS MERCADOS DE
          VALORES?
          <div className="w-4">
            <img
              src={tooltip}
              alt=""
              title="Si su respuesta es negativa, pase a la pregunta 12"
            />
          </div>
        </p>

        <FormikControl
          control="radio"
          label=""
          name="stock_market_experience"
          options={stockMarketOptions}
          className="pt-2"
        />

        <div className="space-y-3 mt-[2%]  pr-[2%] pl-[1%]">
          <p>
            9.-IDENTIFIQUE EL RANGO EN QUE SE ENCUENTRA LOS AÑOS DE EXPERIENCIA
            EN LAS NEGOCIACIONES EN LOS MERCADOS DE VALORES:
          </p>

          <div className="lg:w-1/4 w-full ">
            <FormikControl
              control="select"
              name="level_of_income"
              options={levelOfIncomeOptions}
              disabled={stockMarketExperience}
            />
          </div>

          <p>
            10.-INDIQUE EN QUÉ TIPO DE VALORES HA REALIZADO INVERSIONES EN LOS
            MERCADOS DE VALORES:
          </p>

          <div>
            <FormikControl
              control="checkbox"
              label=""
              name="checkBoxOptions"
              options={checkBoxOptions}
              disabled={stockMarketExperience}
            />
          </div>

          <div className="mt-[2%] lg:w-1/4 w-full pr-[2%] pl-[1%]">
            <FormikControl
              control="input"
              name={"market_investments"}
              label={""}
              type="text"
              disabled={otherOptions}
            />
          </div>

          <p>
            11.-SU EXPERIENCIA EN MERCADOS DE VALORES, ¿LA HA REALIZADO EN
            MERCADOS DE VALORES FUERA DE EL SALVADOR?
          </p>

          <FormikControl
            control="radio"
            label=""
            name="outside_salvador_experience"
            options={outsideSalvadorOptions}
            className="pt-2"
            disabled={stockMarketExperience}
          />
          <div className="grid md:grid-cols-3 grid-cols-1  mt-[2%] gap-4  w-full pr-[2%] pl-[1%]">
            <div className="space-y-3">
              PAÍS
              <FormikControl
                control="input"
                name={"country_1"}
                label={""}
                type="text"
                disabled={salMarkets}
              />
              <FormikControl
                control="input"
                name={"country_2"}
                label={""}
                type="text"
                disabled={salMarkets}
              />
              <FormikControl
                control="input"
                name={"country_3"}
                label={""}
                type="text"
                disabled={salMarkets}
              />
            </div>

            <div className="space-y-3">
              AÑOS DE EXPERIENCIA
              <div className=" w-full">
                <FormikControl
                  control="input"
                  name={"experience_1"}
                  label={""}
                  type="text"
                  disabled={salMarkets}
                />
              </div>
              <div className=" w-full">
                <FormikControl
                  control="input"
                  name={"experience_2"}
                  label={""}
                  type="text"
                  disabled={salMarkets}
                />
              </div>
              <div className=" w-full">
                <FormikControl
                  control="input"
                  name={"experience_3"}
                  label={""}
                  type="text"
                  disabled={salMarkets}
                />
              </div>
            </div>
            <div className="space-y-3">
              TIPO DE VALORES NEGOCIADOS
              <FormikControl
                control="input"
                name={"negotiated_values_1"}
                label={""}
                type="text"
                disabled={salMarkets}
              />
              <FormikControl
                control="input"
                name={"negotiated_values_2"}
                label={""}
                type="text"
                disabled={salMarkets}
              />
              <FormikControl
                control="input"
                name={"negotiated_values_3"}
                label={""}
                type="text"
                disabled={salMarkets}
              />
            </div>
          </div>
        </div>

        <div className="mb-[2%] mt-[2%] border-t-2 border-[#C1C1C1] " />
        <div className="space-y-3 w-full pr-[2%] pl-[1%]">
          <p>
            12.-¿CONOCE ALGUNAS DE LAS SIGUIENTES ALTERNATIVAS DE INVERSIÓN QUE
            OFRECE EL MERCADO BURSÁTIL SALVADOREÑO? (HAGA UN COTEJO EN LAS QUE
            CONOZCA)
          </p>

          <FormikControl
            control="checkbox"
            label=""
            name="alternative_investments"
            options={alternativeInvestmentsOptions}
          />
          <div className="mt-[2%] lg:w-1/4 w-full pr-[2%] pl-[1%]">
            <FormikControl
              control="input"
              name={"investments_alternative"}
              label={""}
              type="text"
              disabled={alternativeDisable}
            />
          </div>

          <p>
            13.-MARQUE EL PLAZO O TIEMPO EN QUE ESTÁ INTERESADO EN INVERTIR:
          </p>

          <div className="lg:w-1/4 w-full ">
            <FormikControl
              control="select"
              label=""
              name="investment_time"
              options={levelOfIncomeOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiskStepThree;
