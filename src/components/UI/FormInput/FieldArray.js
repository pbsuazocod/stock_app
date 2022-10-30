import React from "react";
import { Field, ErrorMessage, FieldArray, useFormikContext } from "formik";
import { InputNumber } from "primereact";

import TextError from "./TextError";
import FormikControl from "../../formik/FormikControl";

function FieldArrayComponent(props) {
  const { label, name, ...rest } = props;
  const { values, submitForm } = useFormikContext();
  const [disableForm, setDisableForm] = React.useState(false);

  React.useEffect(() => {
    if (values && values.type_of_work_aut_person) {
      setDisableForm(values.type_of_work_aut_person === "no" ? true : false);
    }
  }, [values]);
  return (
    <React.Fragment>
      <FieldArray id={name} name={name} {...rest}>
        {({ field, form, push, remove }) => {
          const { values } = form;
          const { mul } = values;
          console.log(values);
          if (mul) {
            return mul.map((field, index) => (
              <React.Fragment>
                <FormikControl
                  control="input"
                  name="name_of_aut_person"
                  label="NOMBRE"
                  type="text"
                  disabled={disableForm}
                />

                <FormikControl
                  control="date"
                  name="day_of_birth_aut_person"
                  label="FECHA DE NACIMIENTO"
                  type="date"
                  disabled={disableForm}
                />
                <FormikControl
                  control="input"
                  name="place_of_birth_aut_person"
                  label="LUGAR DE NACIMIENTO"
                  type="text"
                  disabled={disableForm}
                />

                <FormikControl
                  control="input"
                  name="email_aut_person"
                  label="CORREO ELECTRÓNICO"
                  type="email"
                  disabled={disableForm}
                />

                <FormikControl
                  control="input"
                  name="doc_id_aut_person"
                  label="NO. DE DOC DE ID"
                  mask="999-9999999-9"
                  type="text"
                  disabled={disableForm}
                />

                <FormikControl
                  control="input"
                  name="nationality_aut_person"
                  label="NACIONALIDAD"
                  type="text"
                  disabled={disableForm}
                />

                <FormikControl
                  control="input"
                  name="job_title_aut_person"
                  label="CARGO"
                  type="text"
                  disabled={disableForm}
                />

                <FormikControl
                  control="input"
                  name="phone_number_aut_person"
                  label="TELÉFONO "
                  mask={"(999) 999-9999"}
                  type="tel"
                  disabled={disableForm}
                />

                <div className="col-span-2">
                  <FormikControl
                    control="input"
                    name="adress_aut_person"
                    label="DIRECCIÓN"
                    type="text"
                    disabled={disableForm}
                  />
                </div>
              </React.Fragment>
            ));
          } else {
            return null;
          }
        }}
      </FieldArray>
    </React.Fragment>
  );
}

export default FieldArrayComponent;
