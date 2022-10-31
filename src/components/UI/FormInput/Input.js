import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { InputText } from "primereact";

function Input(props) {
  const { label, name, disable, ...rest } = props;
  return (
    <React.Fragment>
      <Field id={name} name={name} {...rest}>
        {({ field, form }) => {
          return (
            <div className="flex flex-col">
              <label htmlFor={name}>{label}</label>
              <InputText
                id={name}
                name={field.name}
                {...field}
                {...rest}
                disabled={disable}
              />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </React.Fragment>
  );
}

export default Input;
