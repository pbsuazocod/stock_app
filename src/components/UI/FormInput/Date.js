import React from "react";
import { Calendar } from "primereact/calendar";
import { Field, formik, ErrorMessage } from "formik";
import TextError from "./TextError";

function Date(props) {
  const { label, name, minDate, maxDate, ...rest } = props;
  return (
    <div>
      <Field id={name} name={name} {...rest}>
        {({ field, form }) => {
          return (
            <div className="flex flex-col">
              <label htmlFor={name}>{label}</label>
              <Calendar
                dateFormat="dd/mm/yy"
                id={name}
                {...field}
                disabled={rest.disabled}
                minDate={minDate}
                maxDate={maxDate}
              />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Date;
