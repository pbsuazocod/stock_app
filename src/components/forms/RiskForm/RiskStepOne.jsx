import { useState } from "react";
import FormikControl from "../../formik/FormikControl";
import { languageOptions } from "../../config/constants";

function RiskStepOne() {
  const [adicLang, setAdicLang] = useState(false);

  return (
    <div className="p-[2%]">
      <div className="pl-[1%]">
        <p>¿DOMINA UN IDIOMA ADICIONAL AL IDIOMA ESPAÑOL?</p>
        <div className="flex gap-2">
          <FormikControl
            control="radio"
            label=""
            name="aditionnal_language_option"
            options={languageOptions}
          />
        </div>
      </div>

      <div className="mt-[2%] ml-[2%] border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
        <div className=" grid-none md:grid grid-row-1 lg:grid-cols-4 grid-col-1 gap-4 ">
          <FormikControl
            control="input"
            name={"language"}
            label={"IDIOMA"}
            type="text"
          />

          <FormikControl
            control="input"
            name={"reading_domain"}
            label={"% DOMINIO DE LECTURA"}
            type="number"
          />
          <FormikControl
            control="input"
            name={"writing_domain"}
            label={"% DOMINIO DE ESCRITURA"}
            type="number"
          />
          <FormikControl
            control="input"
            name={"oral_expresion_domain"}
            label={"% DOMINIO EXPRESIÓN ORAL"}
            type="number"
          />
        </div>
      </div>
    </div>
  );
}

export default RiskStepOne;
