import React from 'react'
import { InputNumber } from "primereact/inputnumber";

import InputWrapper from './InputWrapper';

import './Styles.css';

export default function NumberInput(props) {
    const {
        formik,
        fieldName,
        isRequired,
        placeholder,
        disabled
    } = props;

    return (
        <InputWrapper {...props}>
        {console.log(formik.values[fieldName])}

            <InputNumber 
                id={fieldName}
                name={fieldName}
                value={formik.values[fieldName]}
                onChange={(e) => formik.setFieldValue(fieldName, e.value)}
                onBlur={formik.handleBlur(fieldName)}
                placeholder={placeholder}
                className={`w-full ${formik.errors[fieldName] && formik.touched[fieldName] ? 'p-invalid' : ''}`}
                required={isRequired}
                disabled={disabled}
            />

        </InputWrapper>
    )
}

