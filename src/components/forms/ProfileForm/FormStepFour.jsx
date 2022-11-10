import React from "react";
import { useFormikContext, FieldArray } from "formik";
import { FaPlusCircle } from "react-icons/fa";

// Data

import { authPersonOptions } from "../../config/constants";
import { authorized_persons_values } from "./ValidationSchema";
import FormikControl from "../../formik/FormikControl";

function FormStepFour({ counter }) {

  // Manage State
  
  const { values, errors, setTouched } = useFormikContext();
  const [disableForm, setDisableForm] = React.useState(true);
  const [addingAnotherPerson, setAddingAnotherPerson] = React.useState(false);

  function addAnotherPerson(push) {
    setAddingAnotherPerson(true);
    push({
      ...authorized_persons_values,
    });
  }

  React.useEffect(() => {
    if (values.authorize_other_people) {
      setDisableForm(values.authorize_other_people === "no" ? true : false);
      if (!addingAnotherPerson) {
        setTouched({});
        setAddingAnotherPerson(false);
      }
    }
  }, [values.authorize_other_people]);

  return (
    <div className="p-[2%]">
      <div className="pl-[1%] font-montserrat font-bold">
        <p>
          DESEA AUTORIZAR A OTRA PERSONA QUE GIRE INSTRUCCIONES EN SU NOMBRE
        </p>

        <FormikControl
          control="radio"
          label=""
          name="authorize_other_people"
          options={authPersonOptions}
          className="pt-2"
        />
      </div>

      {!disableForm && (
        <div className="mt-[2%] ml-[2%]">
          <div className=" ">
            <FieldArray name="authorized_persons">
              {({ field, form, push, remove }) => {
                const { values } = form;
                const { authorized_persons } = values;

                return (
                  <React.Fragment>
                    {authorized_persons.map((field, index) => (
                      <React.Fragment key={index}>
                        <div className="font-montserrat font-bold grid-none md:grid grid-row-5 lg:grid-cols-2 grid-col-1 gap-4 border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                          <div>
                            <FormikControl
                              control="input"
                              name={`authorized_persons.${index}.signature_full_name`}
                              label="NOMBRE"
                              type="text"
                              disabled={disableForm}
                            />
                          </div>

                          <div>
                            <FormikControl
                              control="date"
                              name={`authorized_persons.${index}.signature_birthday`}
                              label="FECHA DE NACIMIENTO"
                              type="date"
                              disabled={disableForm}
                            />
                          </div>
                          <div>
                            <FormikControl
                              control="input"
                              name={`authorized_persons.${index}.signature_document_number`}
                              label="NO. DE DOC DE ID"
                              mask="999-9999999-9"
                              type="text"
                              disabled={disableForm}
                            />
                          </div>

                          <div>
                            <FormikControl
                              control="input"
                              name={`authorized_persons.${index}.signature_nationality`}
                              label="NACIONALIDAD"
                              type="text"
                              disabled={disableForm}
                            />
                          </div>

                          <div>
                            <FormikControl
                              control="input"
                              name={`authorized_persons.${index}.signature_address`}
                              label="DIRECCIÓN"
                              type="text"
                              disabled={disableForm}
                            />
                          </div>
                          <div>
                            <FormikControl
                              control="input"
                              name={`authorized_persons.${index}.signature_email`}
                              label="CORREO ELECTRÓNICO"
                              type="email"
                              disabled={disableForm}
                            />
                          </div>
                          <div>
                            <FormikControl
                              control="input"
                              name={`authorized_persons.${index}.signature_position`}
                              label="CARGO"
                              type="text"
                              disabled={disableForm}
                            />
                          </div>
                          <div>
                            <FormikControl
                              control="mask"
                              name={`authorized_persons.${index}.signature_phone`}
                              label="TELÉFONO "
                              mask={"(999) 999-9999"}
                              disabled={disableForm}
                            />
                          </div>
                          <div className="col-span-2">
                            <FormikControl
                              control="input"
                              name={`authorized_persons.${index}.signature_workspace`}
                              label="LUGAR DE TRABAJO"
                              type="text"
                              disabled={disableForm}
                            />
                          </div>
                        </div>
                        <div
                          className={`my-[3%] border-t-2 border-[#C1C1C1] flex col-span-2`}
                        ></div>
                      </React.Fragment>
                    ))}
                    <div className="w-full font-montserrat font-bold">
                      <div className="pl-[2%]">
                        <button
                          type="button"
                          onClick={() => addAnotherPerson(push)}
                          className=" flex items-center gap-2"
                        >
                          <span className="text-green-600">
                            <FaPlusCircle />
                          </span>
                          AÑADIR OTRA PERSONA
                        </button>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }}
            </FieldArray>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormStepFour;
