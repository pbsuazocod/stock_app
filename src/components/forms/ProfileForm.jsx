import { Form } from "formik";
import React from "react";
import { useFormik } from "formik";
import { useState } from "react";

// components
import TextInput from "../UI/FormInput/TextInput";
import NumberInput from "../UI/FormInput/NumberInput";
import CalendarInput from "../UI/FormInput/CalendarInput";
import MaskInput from "../UI/FormInput/MaskInput";

// Validation

import { initialValues, validationSchema } from "./ValidationSchema";

function ProfileForm() {
  const [formStep, setFormStep] = useState(0);
  // Setup form with formik

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema[formStep],
    onSubmit: (values) => {
      alert(values);
    },
  });

  return (
    <form className="flex ">
      <div>
        <TextInput
          formik={formik}
          fieldName={"name"}
          label={"NOMBRE"}
          isAlphabetic
        />
        <NumberInput formik={formik} fieldName={"age"} label={"AÑOS"} />
        <TextInput
          formik={formik}
          fieldName={"type_of_document"}
          label={"TIPO DE DOCUMENTO"}
          isAlphabetic
        />
        <CalendarInput
          formik={formik}
          fieldName={"job_longevity"}
          label={"FECHA DE INGRESO A LA EMPRESA"}
        />
        <TextInput
          formik={formik}
          fieldName={"marital_status"}
          label={"ESTADO CIVIL"}
          isAlphabetic
        />
        <TextInput
          formik={formik}
          fieldName={"address"}
          label={"DIRECCIÓN"}
          isAlphabetic
        />
        <MaskInput
          formik={formik}
          fieldName={"home_number"}
          label={"TELÉFONO CASA"}
          mask={"(999) 999-9999"}
        />
        <TextInput
          formik={formik}
          fieldName={"email"}
          label={"CORREO ELECTRÓNICO"}
          toolTip={
            "Solicitamos su direción de correo para comunicarnos con usted, por su seguridad nunca le solicitaremos que nos proporcione ninguna información por esta vía."
          }
        />
        <TextInput
          formik={formik}
          fieldName={"home"}
          label={"RESIDENCIA"}
          isAlphabetic
        />
      </div>
      <div>
        {/* 2DO COLUMN */}
        <TextInput
          formik={formik}
          fieldName={"nacionality"}
          label={"NACIONALIDAD"}
          isAlphabetic
        />
        <CalendarInput
          formik={formik}
          fieldName={"day_of_birth"}
          label={"FECHA DE NACIMIENTO"}
        />
        <MaskInput
          formik={formik}
          fieldName={"identification_card"}
          label={"NÚMERO DE DOCUMENTO"}
          mask={"999-9999999-9"}
          toolTip={
            "Solicitamos su número de documento para poder registrar y validar la información de identidad que es suministrada en este formulario."
          }
        />
        <CalendarInput
          formik={formik}
          fieldName={"expiration_date"}
          label={"FECHA DE VENCIMIENTO"}
        />
        <TextInput
          formik={formik}
          fieldName={"profession"}
          label={"PROFESIÓN"}
          isAlphabetic
        />
        <NumberInput
          formik={formik}
          fieldName={"nit_number"}
          label={"NÚMERO DE NIT"}
        />
        <MaskInput
          formik={formik}
          fieldName={"cellphone_number"}
          label={"TELÉFONO CELULAR"}
          mask={"(999) 999-9999"}
        />
      </div>
    </form>
  );
}

export default ProfileForm;
