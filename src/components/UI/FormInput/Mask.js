import React from "react";
import { InputMask } from "primereact/inputmask";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Mask(props) {
  const { label, name, disabled, ...rest } = props;

  return (
    <div>
      <Field id={name} name={name} {...rest}>
        {({ field, form }) => {
          return (
            <div className="flex flex-col">
              <label htmlFor={name}>{label}</label>
              <InputMask id={name} {...field} {...rest} disabled={disabled} />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Mask;
