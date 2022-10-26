import React from "react";
import FormikControl from "../../formik/FormikControl";
import { useFormikContext, FieldArray } from "formik";
// Data
import { authPersonOptions } from "../../config/constants";
import { FaPlusCircle } from "react-icons/fa";
import { step3Test } from "./ValidationSchema";

function FormStepThree({ counter }) {
  const { values, submitForm, errors } = useFormikContext();
  const [disableForm, setDisableForm] = React.useState(false);
  console.log(errors);
  React.useEffect(() => {
    if (values && values.type_of_work_aut_person) {
      setDisableForm(values.type_of_work_aut_person === "no" ? true : false);
    }
  }, [values]);
  return (
    <div className="p-[2%]">
      {/* {JSON.stringify(values.type_of_work_aut_person)} */}

      <div className="pl-[1%]">
        <p>
          DESEA AUTORIZAR A OTRA PERSONA QUE GIRE INSTRUCCIONES EN SU NOMBRE
        </p>

        <FormikControl
          control="radio"
          label=""
          name="type_of_work_aut_person"
          options={authPersonOptions}
          className="pt-2"
        />
      </div>

      <div className="mt-[2%] ml-[2%]">
        <div className=" ">
          <FieldArray name="authorized_persons">
            {({ field, form, push, remove }) => {
              const { values } = form;
              const { authorized_persons } = values;
              console.log(values);

              return (
                <>
                  {authorized_persons.map((field, index) => (
                    <>
                      <div className="grid-none md:grid grid-row-5 lg:grid-cols-2 grid-col-1 gap-4 border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                        <FormikControl
                          control="input"
                          name={`authorized_persons.${index}.name_of_aut_person`}
                          label="NOMBRE"
                          type="text"
                          disabled={disableForm}
                        />

                        <FormikControl
                          control="date"
                          name={`authorized_persons.${index}.day_of_birth_aut_person`}
                          label="FECHA DE NACIMIENTO"
                          type="date"
                          disabled={disableForm}
                        />
                        <FormikControl
                          control="input"
                          name={`authorized_persons.${index}.place_of_birth_aut_person`}
                          label="LUGAR DE NACIMIENTO"
                          type="text"
                          disabled={disableForm}
                        />

                        <FormikControl
                          control="input"
                          name={`authorized_persons.${index}.email_aut_person`}
                          label="CORREO ELECTRÓNICO"
                          type="email"
                          disabled={disableForm}
                        />

                        <FormikControl
                          control="input"
                          name={`authorized_persons.${index}.doc_id_aut_person`}
                          label="NO. DE DOC DE ID"
                          mask="999-9999999-9"
                          type="text"
                          disabled={disableForm}
                        />

                        <FormikControl
                          control="input"
                          name={`authorized_persons.${index}.nationality_aut_person`}
                          label="NACIONALIDAD"
                          type="text"
                          disabled={disableForm}
                        />

                        <FormikControl
                          control="input"
                          name={`authorized_persons.${index}.job_title_aut_person`}
                          label="CARGO"
                          type="text"
                          disabled={disableForm}
                        />

                        <FormikControl
                          control="input"
                          name={`authorized_persons.${index}.phone_number_aut_person`}
                          label="TELÉFONO "
                          mask={"(999) 999-9999"}
                          type="tel"
                          disabled={disableForm}
                        />

                        <div className="col-span-2">
                          <FormikControl
                            control="input"
                            name={`authorized_persons.${index}.address_aut_person`}
                            label="DIRECCIÓN"
                            type="text"
                            disabled={disableForm}
                          />
                        </div>
                      </div>
                      <div
                        className={`my-[3%] border-t-2 border-[#C1C1C1] flex col-span-2`}
                      ></div>
                    </>
                  ))}
                  <div className="w-full">
                    <div className="pl-[2%]">
                      <button
                        type="button"
                        onClick={() =>
                          push({
                            ...step3Test,
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
    </div>
  );
}

export default FormStepThree;
