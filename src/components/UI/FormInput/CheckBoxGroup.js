import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckBoxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className="flex items-center pb-2">
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label className="pl-3" htmlFor={option.value}>
                    {option.key}
                  </label>
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckBoxGroup;
