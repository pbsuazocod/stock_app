import React from "react";
import { InputText } from "primereact/inputtext";

import InputWrapper from "./InputWrapper";

import "./Styles.css";

export default function TextInput(props) {
  const { formik, fieldName, isRequired, placeholder, isAlphabetic, disabled } =
    props;

  return (
    <InputWrapper {...props}>
      <InputText
        id={fieldName}
        name={fieldName}
        value={formik.values[fieldName]}
        onChange={formik.handleChange(fieldName)}
        onBlur={formik.handleBlur(fieldName)}
        placeholder={placeholder}
        className={`w-full font-Montserrat border-rose-600 ${
          formik.errors[fieldName] && formik.touched[fieldName]
            ? "p-invalid"
            : ""
        }`}
        required={isRequired}
        disabled={disabled}
        keyfilter={isAlphabetic ? /^[A-Za-z\s]*$/ : null}
      />
    </InputWrapper>
  );
}
