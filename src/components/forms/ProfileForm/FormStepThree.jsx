import React from "react";
import { FieldArray } from "formik";
import { FaPlusCircle } from "react-icons/fa";

// Data

import FormikControl from "../../formik/FormikControl";
import { personal_reference_values } from "./ValidationSchema";

function FormStepThree() {
  // Manage States

  const [addingAnotherPerson, setAddingAnotherPerson] = React.useState(false);

  function addAnotherPerson(push) {
    setAddingAnotherPerson(true);
    push({
      ...personal_reference_values,
    });
  }

  return (
    <div className="p-[2%]">
      <div className="mt-[2%] ml-[2%]">
        <div>
          <FieldArray name="personal_reference">
            {({ form, push }) => {
              const { values } = form;
              const { personal_reference } = values;

              return (
                <React.Fragment>
                  {personal_reference.map((field, index) => (
                    <React.Fragment key={index}>
                      <div className="font-monserrant font-bold grid md:grid-cols-2 grid-cols-1  grid-rows-1 gap-4  border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                        <div>
                          <FormikControl
                            control="input"
                            name={`personal_reference.${index}.name_of_ref_person`}
                            label="NOMBRE"
                            type="text"
                          />
                        </div>
                        <div>
                          <FormikControl
                            control="input"
                            name={`personal_reference.${index}.ref_place_of_work`}
                            label="LUGAR DE TRABAJO"
                            type="text"
                          />
                        </div>

                        <div>
                          <FormikControl
                            control="input"
                            name={`personal_reference.${index}.ref_email_aut_person`}
                            label="CORREO ELECTRÓNICO"
                            type="email"
                          />
                        </div>

                        <div>
                          <FormikControl
                            control="mask"
                            name={`personal_reference.${index}.phone_number_ref_person`}
                            label="TELÉFONO "
                            mask={"(999) 999-9999"}
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
    </div>
  );
}

export default FormStepThree;
