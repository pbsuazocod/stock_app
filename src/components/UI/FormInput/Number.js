import React from "react";
import { Field, ErrorMessage } from "formik";
import { InputNumber } from "primereact";

import TextError from "./TextError";

function Number(props) {
  const { label, name, ...rest } = props;

  return (
    <div>
      <Field id={name} name={name} {...rest}>
        {({ field, form }) => {
          return (
            <div className="flex flex-col">
              <label htmlFor={name}>{label}</label>
              <InputNumber  id={name} {...field} />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Number;
