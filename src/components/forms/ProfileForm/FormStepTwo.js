import React from 'react'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from "../ValidationSchema";
import FormikControl from '../../formik/FormikControl';


function FormStepTwo() {

    const radioOptions = [
        { key: "NEGOCIO PROPIO O INDEPENDIENTE", value: "NEGOCIO PROPIO O INDEPENDIENTE" },
        { key: "EMPLEO PRIVADO, EMPLEO PUBLICO", value: "EMPLEO PRIVADO, EMPLEO PUBLICO" },
        { key: "PENSIONADO", value: "PENSIONADO" },
    ];


    //   Setup form with formik
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert("formik values", formik.values);
            console.log("Form Values", formik.values);
        },
    });
    return (
        <>
            <div className="p-[3%] space-y-4">
                <FormikControl
                    control="radio"
                    label=""
                    name="type_of_work"
                    options={radioOptions}
                    className='pt-2'
                />


                <div className="w-1/2">
                    <FormikControl
                        control='input'
                        name="company_name"
                        label="NOMBRE DE LA EMPRESA"
                        className="w-1/2"
                        type='text'
                    />
                </div>
                <FormikControl
                    control='input'
                    name="company_line_of_work"
                    label="A QUÉ SE DEDICA LA EMPRESA"
                    type='text'
                />
                <div className="md:flex gap-4 ">
                    <FormikControl
                        control='input'
                        name="job_title"
                        label="CARGO"
                        type='text'
                    />
                    <FormikControl
                        control='input'
                        name="time_in_the_company"
                        label="TIEMPO QUE LABORA EN LA EMPRESA"
                        isAlphabetic
                        type='number'
                    />
                </div>
                <div className="w-1/2">
                    <FormikControl
                        control='input'
                        name="phone"
                        label="TELÉFONO"
                        mask="(999) 999-9999"
                        type='tel'
                    />
                </div>
                <FormikControl
                    control='input'
                    name="full_address"
                    label="DIRECCIÓN COMPLETA"
                    type='text'
                />
            </div>
        </>

    )
}

export default FormStepTwo