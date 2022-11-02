import React from "react";
import { Field, ErrorMessage } from "formik";
import { InputNumber } from "primereact";

import TextError from "./TextError";

function Number(props) {
  const { label, name, ...rest } = props;

  return (
    <React.Fragment>
      <Field id={name} name={name} {...rest}>
        {({ field, form }) => {
          return (
            <div className="flex flex-col">
              <label htmlFor={name}>{label}</label>
              <InputNumber
                id={name}
                name={field.name}
                value={form.values[field.name]}
                onValueChange={(e) => form.setFieldValue(field.name, e.value)}
                onBlur={form.handleBlur(field.name)}
                {...rest}
              />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </React.Fragment>
  );
}

export default Number;
