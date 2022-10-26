import { useState } from "react";
import FormikControl from "../../formik/FormikControl";
import { languageOptions } from "../../config/constants";
import { useFormikContext, FieldArray } from "formik";
import { FaPlusCircle } from "react-icons/fa";
import { step1Test } from "./ValidationSchema";

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

      <div className="mt-[2%] ml-[2%]">
        <div className=" ">
          <FieldArray name="languages">
            {({ field, form, push, remove }) => {
              const { values } = form;
              const { languages } = values;
              console.log(values);

              return (
                <>
                  {languages.map((field, index) => (
                    <>
                      <div className="grid-none md:grid grid-row-5 lg:grid-cols-4 grid-col-1 gap-4 border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                        <FormikControl
                          control="input"
                          name={`languages.${index}.language`}
                          label={"IDIOMA"}
                          type="text"
                          className="p-inputtext-lg block"
                        />

                        <FormikControl
                          control="input"
                          name={`languages.${index}.reading_domain`}
                          label={"% DOMINIO DE LECTURA"}
                          type="number"
                          className="p-inputtext-lg block"
                        />
                        <FormikControl
                          control="input"
                          name={`languages.${index}.writing_domain`}
                          label={"% DOMINIO DE ESCRITURA"}
                          type="number"
                          className="p-inputtext-lg block"
                        />
                        <FormikControl
                          control="input"
                          name={`languages.${index}.oral_expresion_domain`}
                          label={"% DOMINIO EXPRESIÓN ORAL"}
                          type="number"
                          className="p-inputtext-lg block"
                        />
                      </div>
                      <div
                        className={`my-[3%] border-t-2 border-[#C1C1C1] flex col-span-2`}
                      ></div>
                    </>
                  ))}
                  <div className="w-full">
                    <div className="pl-[2%]">
                      <button
                        onClick={() =>
                          push({
                            ...step1Test,
                          })
                        }
                        className=" flex items-center gap-2"
                      >
                        <span className="text-green-600">
                          <FaPlusCircle />
                        </span>
                        AÑADIR OTRA PERSONA
                      </button>
                    </div>
                  </div>
                </>
              );
            }}
          </FieldArray>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
      {/* <div className="mt-[2%] ml-[2%] border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
        <div className=" grid-none md:grid grid-row-1 lg:grid-cols-4 grid-col-1 gap-4 ">
          <FormikControl
            control="input"
            name={"language"}
            label={"IDIOMA"}
            type="text"
            className="p-inputtext-lg block"
          />

          <FormikControl
            control="number"
            name={"reading_domain"}
            label={"% DOMINIO DE LECTURA"}
            type="number"
            className="p-inputtext-lg block"
          />
          <FormikControl
            control="number"
            name={"writing_domain"}
            label={"% DOMINIO DE ESCRITURA"}
            type="number"
            className="p-inputtext-lg block"
          />
          <FormikControl
            control="number"
            name={"oral_expresion_domain"}
            label={"% DOMINIO EXPRESIÓN ORAL"}
            type="number"
            className="p-inputtext-lg block"
          />
        </div>
      </div> */}
    </div>
  );
}

export default RiskStepOne;
