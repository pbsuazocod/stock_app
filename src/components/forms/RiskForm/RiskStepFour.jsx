import React from "react";
import { useState } from "react";
import { useFormikContext } from "formik";

// Data
import FormikControl from "../../formik/FormikControl";
import {
  purposeOfInvestments,
  economicSituationOptions,
} from "../../config/constants";

function RiskStepFour() {
  // Manage States

  const { values } = useFormikContext();
  const [investmentsDisable, setInvestmentsDisable] = useState(true);
  const [economicsDisable, setEconomicsDisable] = useState(true);

  React.useEffect(() => {
    if (values.purpose_of_investments === "Otro (explique):") {
      setInvestmentsDisable(false);
    } else {
      setInvestmentsDisable(true);
    }
  }, [values.purpose_of_investments]);

  React.useEffect(() => {
    const economicsOptions = values.economics_situation.find(
      (value) => value === "Otra acción (Especifique):"
    );
    setEconomicsDisable(!economicsOptions ? true : false);
  }, [values.economics_situation]);

  return (
    <div className="p-[2%] space-y-4">
      <h1 className="text-xl text-[#1A3B69] mb-[2%]">
        III.-INFORMACIÓN DE PERFIL DE RIESGO DEL CLIENTE
      </h1>
      <p className="mb-[2%] font-montserrat font-bold">
        14.-DE ACUERDO A SU CONOCIMIENTO Y EXPERIENCIA, ¿CUÁL ES SU PREFERENCIA
        RESPECTO AL RIESGO?
      </p>
      <div>
        <div className="flex items-center font-montserrat font-bold">
          <FormikControl
            control="radio"
            name="risk"
            options={[
              {
                key: "Conservador o adverso al riesgo (Rentista)",
                value: "conservative",
              },
            ]}
          />
        </div>
        <p className="pl-[2%] text-justify">
          Busca una inversión segura en la que el riesgo de pérdida de capital
          aportado sea mínimo pero a la vez una mayor probabilidad de preservar
          el capital. Se le recomienda una inversión en valores con altas
          calificaciones o en fondos de inversión de dinero, en valores de renta
          fija del Estado o con buenas calificaciones, con riesgo muy reducido
          de pérdida de valor del capital invertido, siempre que mantiene la
          inversión en el largo plazo.
        </p>
      </div>
      <div>
        <div className="flex items-center font-montserrat font-bold">
          <FormikControl
            control="radio"
            name="risk"
            options={[{ key: "Moderado:", value: "moderate" }]}
          />
        </div>
        <p className="pl-[2%] text-justify">
          Persigue mantener la estabilidad de su inversión, dispuesto a aceptar
          modestos retornos a cambio de tener mayor seguridad de sus
          inversiones, o rentabilidad ligeramente superior a los tipos de
          interés del mercado bancario. Busca un equilibrio entre rentabilidad y
          riesgo.
        </p>
      </div>
      <div>
        <div className="flex items-center font-montserrat font-bold">
          <FormikControl
            control="radio"
            name="risk"
            options={[{ key: "Agresivo o especulador:", value: "aggressive" }]}
          />
        </div>
        <p className="pl-[2%] text-justify">
          Son inversores que tienen conocimiento del mercado donde están
          invirtiendo, manejan herramientas de análisis fundamental y técnico,
          asumen los riesgos de sus inversiones, buscan maximizar la
          rentabilidad e invierten básicamente en valores de renta variable y
          renta fija de alto riesgo sin importar la volatilidad extrema de los
          mercados y las pérdidas potenciales
        </p>
      </div>

      <p className="font-montserrat font-bold">
        15.-¿CUÁL ES EL OBJETIVO O PROPÓSITO FUNDAMENTAL DE SUS INVERSIONES?
        (HAGA UN COTEJO)
      </p>

      <div className="pl-[2%]">
        <FormikControl
          control="radio"
          name="purpose_of_investments"
          options={purposeOfInvestments}
          layout
        />
      </div>
      <div className=" w-1/2">
        <FormikControl
          control="input"
          name={"other_explain"}
          label={""}
          type="text"
          disabled={investmentsDisable}
        />
      </div>
      <p className="text-justify font-montserrat font-bold">
        16.-IDENTIFIQUE CUÁL SERÍA LA REACCIÓN O DECISIÓN QUE USTED TOMARÍA, EN
        EL SUPUESTO QUE ESCUCHARA NOTICIAS NEGATIVAS DE LA SITUACIÓN ECONÓMICA
        LOCAL O INTERNACIONAL, SI OBSERVA QUE LOS ACTIVOS FINANCIEROS ESTÁN
        TENIENDO UN DESEMPEÑO NEGATIVO, O SI APRECIA QUE ESTÁ TENIENDO PÉRDIDAS
        DE CAPITAL EN SUS INVERSIONES:
      </p>
      <div className="flex items-center">
        <div className="pl-[2%]">
          <FormikControl
            control="checkbox"
            name="economics_situation"
            options={economicSituationOptions}
          />
        </div>
      </div>
      <div className=" w-1/2">
        <FormikControl
          control="input"
          name={"other_action_explain"}
          label={""}
          type="text"
          d={economicsDisable}
        />
      </div>
    </div>
  );
}

export default RiskStepFour;
