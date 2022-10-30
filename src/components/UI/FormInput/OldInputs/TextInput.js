import React from "react";
import InputWrapper from "../InputWrapper";

import "./Styles.css";

export default function TextInput(props) {
  const {
    formik,
    fieldName,
    isRequired,
    placeholder,
    isAlphabetic,
    disabled,
    type
  } = props;

  return (
    <InputWrapper {...props}>
      <input
        id={fieldName}
        name={fieldName}
        value={formik.values[fieldName]}
        onChange={formik.handleChange(fieldName)}
        onBlur={formik.handleBlur(fieldName)}
        placeholder={placeholder}
        // className={`${
        //   formik.errors[fieldName] && formik.touched[fieldName]
        //     ? "p-invalid"
        //     : ""
        // }`}
        required={isRequired}
        disabled={disabled}
        keyfilter={isAlphabetic ? /^[A-Za-z\s]*$/ : null}
        type={type}
      />
    </InputWrapper>
  );
}
