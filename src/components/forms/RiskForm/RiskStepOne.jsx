import React, { useState } from "react";

// Components

import { useFormikContext, FieldArray } from "formik";
import { FaPlusCircle } from "react-icons/fa";

// Data

import FormikControl from "../../formik/FormikControl";
import { languageOptions } from "../../config/constants";
import { step1Test } from "./ValidationSchema";

function test(values) {
  return values.languages.map((value, key) => (
    <div key={key}>
      <h1>language: {value.language}</h1>
      <h1>reading_domain: {value.reading_domain}</h1>
      <h1>writing_domain: {value.writing_domain}</h1>
      <h1>oral_expresion_domain: {value.oral_expresion_domain}</h1>
      <hr />
    </div>
  ));
}

function RiskStepOne() {
  // Manage States

  const [adicLang, setAdicLang] = useState(false);
  const { values, submitForm } = useFormikContext();
  const [languageDisable, setLanguageDisable] = useState(true);

  React.useEffect(() => {
    if (values.aditionnal_language_option === "yes") {
      setLanguageDisable(false);
    } else if (values.aditionnal_language_option === "no") {
      setLanguageDisable(true);
    }
  }, [values.aditionnal_language_option]);

  return (
    <div className="p-[2%]">
      <div className="pl-[1%] font-montserrat font-bold">
        <p>¿DOMINA UN IDIOMA ADICIONAL AL IDIOMA ESPAÑOL?</p>

        <FormikControl
          control="radio"
          label=""
          name="aditionnal_language_option"
          options={languageOptions}
          className={"font-montserrat font-bold"}
        />
      </div>

      <div className="mt-[2%] ml-[2%]">
        <div className=" ">
          <FieldArray name="languages">
            {({ field, form, push, remove }) => {
              const { values } = form;
              const { languages } = values;
              return (
                <>
                  {languages.map((field, index) => (
                    <React.Fragment key={index}>
                      <div className="grid-none md:grid font-montserrat font-bold grid-row-5 lg:grid-cols-4 grid-col-1 gap-4 border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                        <div>
                          <FormikControl
                            control="input"
                            name={`languages.${index}.language`}
                            label={"IDIOMA"}
                            type="text"
                            className="p-inputtext-lg block"
                            disable={languageDisable}
                          />
                        </div>

                        <div>
                          <FormikControl
                            control="input"
                            name={`languages.${index}.reading_domain`}
                            label={"% DOMINIO DE LECTURA"}
                            type="number"
                            className="p-inputtext-lg block"
                            disable={languageDisable}
                          />
                        </div>
                        <div>
                          <FormikControl
                            control="input"
                            name={`languages.${index}.writing_domain`}
                            label={"% DOMINIO DE ESCRITURA"}
                            type="number"
                            className="p-inputtext-lg block"
                            disable={languageDisable}
                          />
                        </div>
                        <div>
                          <FormikControl
                            control="input"
                            name={`languages.${index}.oral_expresion_domain`}
                            label={"% DOMINIO EXPRESIÓN ORAL"}
                            type="number"
                            className="p-inputtext-lg block"
                            disable={languageDisable}
                          />
                        </div>
                      </div>
                      <div
                        className={`my-[3%] border-t-2 border-[#C1C1C1] flex col-span-2`}
                      ></div>
                    </React.Fragment>
                  ))}
                  <div className="w-full">
                    <div className="pl-[2%]">
                      <button
                        type="button"
                        onClick={() =>
                          push({
                            ...step1Test,
                          })
                        }
                        className=" flex items-center gap-2 font-bold"
                      >
                        <span className="text-green-600">
                          <FaPlusCircle />
                        </span>
                        AÑADIR OTRA IDIOMA
                      </button>
                    </div>
                  </div>
                </>
              );
            }}
          </FieldArray>
        </div>
      </div>
    </div>
  );
}

export default RiskStepOne;
