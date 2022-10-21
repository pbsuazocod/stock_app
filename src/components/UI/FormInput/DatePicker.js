import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
// import DateView from "react-datepicker";

function DatePicker(props) {
  const { label, name, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <input
              id={name}
              {...field}
              {...rest}
              //   select={value}
              //   onChange={(val) => setFieldValue(name, val)}
              type="date"
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;
