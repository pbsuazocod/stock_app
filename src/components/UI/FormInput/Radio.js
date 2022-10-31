import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, options, className, layout, disabled, ...rest } = props;
  return (
    <div>
      <div className={`gap-4 ${layout ? "" : "flex"}`}>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <div className="flex items-center">
                    <input
                      disabled={disabled}
                      type="radio"
                      id={option.value}
                      {...field}
                      value={option.value}
                      checked={field.value === option.value}
                      className="text-green-500"
                    />
                    <label className="pl-2" htmlFor={option.value}>
                      {option.key}
                    </label>
                  </div>
                </React.Fragment>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
