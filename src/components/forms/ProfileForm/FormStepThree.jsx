import React from "react";
import FormikControl from "../../formik/FormikControl";
import { useFormikContext, FieldArray } from "formik";
// Data
import { FaPlusCircle } from "react-icons/fa";
import { personal_reference_values } from "./ValidationSchema";

function FormStepThree({ counter }) {
  // Manage States
  const { values, errors, setTouched } = useFormikContext();
  const [disableForm, setDisableForm] = React.useState(true);
  const [addingAnotherPerson, setAddingAnotherPerson] = React.useState(false);

  function addAnotherPerson(push) {
    setAddingAnotherPerson(true);
    push({
      ...personal_reference_values,
    });
  }

  // React.useEffect(() => {
  //   if (values.type_of_work_aut_person) {
  //     setDisableForm(values.type_of_work_aut_person === "no" ? true : false);
  //     if (!addingAnotherPerson) {
  //       setTouched({});
  //       setAddingAnotherPerson(false);
  //     }
  //   }
  // }, [values.type_of_work_aut_person]);

  return (
    <div className="p-[2%]">
      <div className="mt-[2%] ml-[2%]">
        <div className=" ">
          <FieldArray name="personal_reference">
            {({ field, form, push, remove }) => {
              const { values } = form;
              const { personal_reference } = values;
              console.log(personal_reference);

              return (
                <React.Fragment>
                  {personal_reference.map((field, index) => (
                    <React.Fragment key={index}>
                      <div className="font-monserrant font-bold grid grid-cols-2 grid-rows-1 gap-4  border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                        <FormikControl
                          control="input"
                          name={`personal_reference.${index}.name_of_ref_person`}
                          label="NOMBRE"
                          type="text"
                        />
                        <FormikControl
                          control="input"
                          name={`personal_reference.${index}.ref_place_of_work`}
                          label="LUGAR DE TRABAJO"
                          type="text"
                        />

                        <FormikControl
                          control="input"
                          name={`personal_reference.${index}.ref_email_aut_person`}
                          label="CORREO ELECTRÓNICO"
                          type="email"
                        />

                        <FormikControl
                          control="mask"
                          name={`personal_reference.${index}.phone_number_ref_person`}
                          label="TELÉFONO "
                          mask={"(999) 999-9999"}
                        />
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
