import React from "react";

import InputWrapper from "../InputWrapper";

import "./Styles.css";

export default function MaskInput(props) {
  const { formik, fieldName, isRequired, placeholder, mask, disabled } = props;

  return (
    <InputWrapper {...props}>
      <input
        id={fieldName}
        name={fieldName}
        value={formik.values[fieldName]}
        onChange={formik.handleChange(fieldName)}
        onBlur={formik.handleBlur(fieldName)}
        placeholder={placeholder}
        mask={mask}
        className={`${
          formik.errors[fieldName] && formik.touched[fieldName]
            ? "p-invalid"
            : ""
        }`}
        required={isRequired}
        disabled={disabled}
        autoClear={false}
        unmask={true}
        type="tel"
      />
    </InputWrapper>
  );
}
