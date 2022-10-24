import React from "react";
import FormikControl from "../../formik/FormikControl";
import { radioOptions } from "../../config/constants";
import {
  levelOfIncomeOptions,
  checkBoxOptions,
  alternativeInvestmentsOptions,
} from "../../config/constants";

function RiskStepThree() {
  return (
    <div className="p-[2%] space-y-4">
      <h1 className="text-xl text-[#1A3B69] mb-[2%]">
        INFORMACIÓN FINANCIERA DEL CLIENTE
      </h1>
      <div className="pl-[1%]">
        <FormikControl
          control="radio"
          label=""
          name="others_investments"
          options={radioOptions}
          className="pt-2"
        />

        <div className="mt-[2%] border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
          <p>
            SI SU RESPUESTA ES AFIRMATIVA ESPECIFIQUE EN QUÉ CONSISTEN DICHAS
            INVERSIONES Y SUS MONTOS.
          </p>

          <FormikControl
            control="input"
            name={"language"}
            label={""}
            type={"textarea"}
            className={
              "w-full h-16 border-solid border-[#C1C1C1] border-2 rounded-md "
            }
          />
        </div>
      </div>
      <div className="pl-[1%]">
        <p>
          ¿TIENE EXPERIENCIA EN LA NEGOCIACIÓN DE VALORES EN LOS MERCADOS DE
          VALORES?
        </p>

        <FormikControl
          control="radio"
          label=""
          name="stock_market_experience"
          options={radioOptions}
          className="pt-2"
        />

        <div className="space-y-3 mt-[2%]  border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
          <p>
            IDENTIFIQUE EL RANGO EN QUE SE ENCUENTRA LOS AÑOS DE EXPERIENCIA EN
            LAS NEGOCIACIONES EN LOS MERCADOS DE VALORES:
          </p>

          <div className="lg:w-1/4 w-full ">
            <FormikControl
              control="select"
              label=""
              name="level_of_income"
              options={levelOfIncomeOptions}
            />
          </div>

          <p>
            INDIQUE EN QUÉ TIPO DE VALORES HA REALIZADO INVERSIONES EN LOS
            MERCADOS DE VALORES:
          </p>

          <FormikControl
            control="checkbox"
            label=""
            name="checkBoxOptions"
            options={checkBoxOptions}
          />

          <div className="mt-[2%] lg:w-1/4 w-full border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
            <FormikControl
              control="input"
              name={"market_investments"}
              label={""}
              type="text"
            />
          </div>

          <p>
            SU EXPERIENCIA EN MERCADOS DE VALORES, ¿LA HA REALIZADO EN MERCADOS
            DE VALORES FUERA DE EL SALVADOR?
          </p>

          <FormikControl
            control="radio"
            label=""
            name="outside_salvador"
            options={radioOptions}
            className="pt-2"
          />
          <div className="grid grid-cols-3 mt-[2%] gap-4  w-full border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
            <div className="space-y-3">
              PAÍS
              <FormikControl
                control="input"
                name={"country_1"}
                label={""}
                type="text"
              />
              <FormikControl
                control="input"
                name={"country_2"}
                label={""}
                type="text"
              />
              <FormikControl
                control="input"
                name={"country_3"}
                label={""}
                type="text"
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
                />
              </div>
              <div className=" w-full">
                <FormikControl
                  control="input"
                  name={"experience_2"}
                  label={""}
                  type="text"
                />
              </div>
              <div className=" w-full">
                <FormikControl
                  control="input"
                  name={"experience_3"}
                  label={""}
                  type="text"
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
              />
              <FormikControl
                control="input"
                name={"negotiated_values_2"}
                label={""}
                type="text"
              />
              <FormikControl
                control="input"
                name={"negotiated_values_3"}
                label={""}
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="mb-[2%] mt-[2%] border-t-2 border-[#C1C1C1] " />
        <div className="space-y-3 w-full border-l-4 pr-[2%] pl-[1%] border-[#9747FF] first-line:border-solid">
          <p>
            ¿CONOCE ALGUNAS DE LAS SIGUIENTES ALTERNATIVAS DE INVERSIÓN QUE
            OFRECE EL MERCADO BURSÁTIL SALVADOREÑO? (HAGA UN COTEJO EN LAS QUE
            CONOZCA)
          </p>

          <FormikControl
            control="checkbox"
            label=""
            name="alternative_investments"
            options={alternativeInvestmentsOptions}
          />

          <p>MARQUE EL PLAZO O TIEMPO EN QUE ESTÁ INTERESADO EN INVERTIR:</p>

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
