import React from 'react'
import { InputMask } from "primereact/inputmask";

import InputWrapper from './InputWrapper';

import './Styles.css';

export default function MaskInput(props) {
    const {
        formik,
        fieldName,
        isRequired,
        placeholder,
        mask,
        disabled
    } = props;

    return (
        <InputWrapper {...props}>

            <InputMask
                id={fieldName}
                name={fieldName}
                value={formik.values[fieldName]}
                onChange={formik.handleChange(fieldName)}
                onBlur={formik.handleBlur(fieldName)}
                placeholder={placeholder}
                mask={mask}
                className={`w-full ${formik.errors[fieldName] && formik.touched[fieldName] ? 'p-invalid' : ''}`}
                required={isRequired}
                disabled={disabled}
                autoClear={false}
                unmask={true}
            />

        </InputWrapper>
    )
}

