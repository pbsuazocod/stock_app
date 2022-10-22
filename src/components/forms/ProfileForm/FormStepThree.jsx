import React from 'react'
import TextInput from "../../UI/FormInput/TextInput";
import CalendarInput from "../../UI/FormInput/CalendarInput";
import MaskInput from "../../UI/FormInput/MaskInput";
import { useFormik } from 'formik'
import { initialValues, validationSchema } from "../ValidationSchema";




function FormStepThree() {

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
        <div className="p-[2%]">
            <div className="pl-[1%]">
                <p>
                    DESEA AUTORIZAR A OTRA PERSONA QUE GIRE INSTRUCCIONES EN SU
                    NOMBRE
                </p>
                <div className="flex gap-2">
                    <div className="flex items-center">
                        <input formik={formik} type="radio" />
                        <label className="pl-2">SI</label>
                    </div>
                    <div className="flex items-center">
                        <input formik={formik} type="radio" />
                        <label className="pl-2">NO</label>
                    </div>
                </div>
            </div>

            <div className="mt-[2%] ml-[2%] border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
                <div className=" grid-none md:grid grid-row-5 lg:grid-cols-2 grid-col-1 gap-4">
                    <TextInput
                        formik={formik}
                        fieldName={"name"}
                        label={"NOMBRE"}
                        isAlphabetic
                    />
                    <CalendarInput
                        formik={formik}
                        fieldName={"day_of_birth"}
                        label={"FECHA DE NACIMIENTO"}
                    />
                    <TextInput
                        formik={formik}
                        fieldName={"place_of_birth"}
                        label={"LUGAR DE NACIMIENTO"}
                        isAlphabetic
                    />

                    <TextInput
                        formik={formik}
                        fieldName={"email"}
                        label={"CORREO ELECTRÓNICO"}
                        toolTip={
                            "Solicitamos su direción de correo para comunicarnos con usted, por su seguridad nunca le solicitaremos que nos proporcione ninguna información por esta vía."
                        }
                    />
                    <MaskInput
                        formik={formik}
                        fieldName={"doc_id"}
                        label={"NO. DE DOC DE ID"}
                        mask={"999-9999999-9"}
                        toolTip={
                            "Solicitamos su número de documento para poder registrar y validar la información de identidad que es suministrada en este formulario."
                        }
                    />
                    <TextInput
                        formik={formik}
                        fieldName={"nacionality"}
                        label={"NACIONALIDAD"}
                        isAlphabetic
                    />
                    <TextInput
                        formik={formik}
                        fieldName={"job_title"}
                        label={"CARGO"}
                        isAlphabetic
                    />
                    <MaskInput
                        formik={formik}
                        fieldName={"phone_number"}
                        label={"TELÉFONO"}
                        mask={"(999) 999-9999"}
                    />
                    <div className="col-span-2">
                        <TextInput
                            formik={formik}
                            fieldName={"adress"}
                            label={"DIRECCIÓN"}
                            isAlphabetic
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormStepThree