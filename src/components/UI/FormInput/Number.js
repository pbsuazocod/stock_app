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
              {/* {JSON.stringify(field, null, 4)}.*/}
              <label htmlFor={name}>{label}</label>
              <InputNumber id={name} {...field} className={rest.className} />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </React.Fragment>
  );
}

export default Number;
