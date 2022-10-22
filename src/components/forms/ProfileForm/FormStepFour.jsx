import React from 'react'
import TextInput from "../../UI/FormInput/TextInput";
import CalendarInput from "../../UI/FormInput/CalendarInput";
import MaskInput from "../../UI/FormInput/MaskInput";
import { useFormik } from 'formik'
import { initialValues, validationSchema } from "../ValidationSchema";




function FormStepFour() {

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
        <div className="space-y-4 m-[3%]">
            <div className="flex items-center">
                <input formik={formik} type="radio" />
                <label className="pl-2">
                    POR COMPRAS DE VALORES O VENCIMIENTO DE OPERACIONES A CARGO DEL
                    CLIENTE
                </label>
            </div>
            <div className="pl-[2%]">
                <div className="flex items-center">
                    <input formik={formik} type="radio" />
                    <label className="pl-2">CHEQUE A NOMBRE DE LA CASA</label>
                </div>
                <div className="flex items-center">
                    <input formik={formik} type="radio" />
                    <label className="pl-2">ABONO A CUENTA DE LA CASA</label>
                </div>
            </div>
            <div className="flex items-center">
                <input formik={formik} type="radio" />
                <label className="pl-2">
                    POR VENTA DE VALORES O VENCIMIENTO DE OPERACIONES A FAVOR DEL
                    CLIENTE
                </label>
            </div>
            <div className="pl-[2%]">
                <div className="flex items-center">
                    <input formik={formik} type="radio" />
                    <label className="pl-2">CHEQUE A NOMBRE DEL CLIENTE</label>
                </div>
                <div className="flex items-center">
                    <input formik={formik} type="radio" />
                    <label className="pl-2">ABONO A CUENTA DEL CLIENTE</label>
                </div>
            </div>
            <div className=" mb-[2%] border-t-2 border-[#C1C1C1]" />
            <div>
                <h1 className="text-xl text-[#1A3B69] mb-[2%]">
                    CUENTA BANCARIA
                </h1>
                <div className="grid-none md:grid grid-rows-2 grid-cols-2 gap-4">
                    <TextInput
                        formik={formik}
                        fieldName={"woner_of_the_account"}
                        label={"NOMBRE DEL TITULAR DE LA CUENTA"}
                        isAlphabetic
                    />
                    <TextInput
                        formik={formik}
                        fieldName={"bank_name"}
                        label={"BANCO"}
                        isAlphabetic
                    />
                    <TextInput
                        formik={formik}
                        fieldName={"type_of_account"}
                        label={"TIPO DE CUENTA"}
                        isAlphabetic
                    />
                    <TextInput
                        formik={formik}
                        fieldName={"account_number"}
                        label={"NÚMERO DE CUENTA"}
                        isAlphabetic
                    />
                </div>
                <div className=" mt-[2%] mb-[2%] border-t-2 border-[#C1C1C1]" />
                <h1 className="text-xl text-[#1A3B69] mb-[2%]">
                    MEDIO PARA LA RECEPCION DE INFORMACION
                </h1>
                <input formik={formik} type="radio" />
                <label className="pl-2">
                    ACEPTO RECIBIR Y ENVIAR LA INFORMACIÓN RELACIONADA A LA CUENTA
                    DE VALORES POR MEDIOS ELECTRONICOS
                </label>
                <div className="mt-[2%] mb-[2%] border-t-2 border-[#C1C1C1]" />
                PEP (PERSONA EXPUESTA POLITICAMENTE)
                <span className="text-[#40B879]">*</span>
                <p className="font-normal text-sm">
                    Personas naturales que desempeñan o han desempeñado funciones
                    públicas en nuestro país o en el extranjero (Eje. Presidente,
                    Ministros, Diputados, Alcaldes, Fiscal, Magistrado, Embajadores,
                    etc)
                </p>
                <div className="flex gap-6 pt-2 mb-[2%]">
                    <div className="flex items-center">
                        <input formik={formik} type="radio" />
                        <label className="pl-2">SÍ</label>
                    </div>
                    <div className="flex items-center">
                        <input formik={formik} type="radio" />
                        <label className="pl-2">NO</label>
                    </div>
                </div>
                ES USTED CIUDADANO O RESIDENTE (GREEN CARD) ESTADOUNIDENSE
                <span className="text-[#40B879]">*</span>
                <div className="flex gap-6 pt-2 mb-[2%]">
                    <div className="flex items-center">
                        <input formik={formik} type="radio" />
                        <label className="pl-2">SÍ</label>
                    </div>
                    <div className="flex items-center">
                        <input formik={formik} type="radio" />
                        <label className="pl-2">NO</label>
                    </div>
                </div>
                <div className="flex gap-1">
                    <span className="text-[#40B879]">*</span>
                    <p className="font-normal text-sm">
                        En caso su respuesta sea SI la CCB le solicitara documentación
                        adicional en cumplimiento a la Ley FATCA y Ley contral el
                        Lavado de Dinero y Financiamiento al terrorismo
                    </p>
                </div>
            </div>
        </div>

    )
}

export default FormStepFour