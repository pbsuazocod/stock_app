import React from 'react'
import FormikControl from '../../formik/FormikControl';

import FormWrapper from '../../UI/FormWrapper/FormWrapper';
import { useState } from 'react'


function FormStep_1() {


  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-[2%] gap-6">
        <div className="space-y-2">
          <FormikControl
            control='input'
            label="NOMBRE"
            name='name'
            type="text"
          />
          <div className="w-1/2">
            <TextInput
              formik={formik}
              fieldName={"age"}
              label={"EDAD"}
              type={"number"}
            />
          </div>
          <TextInput
            formik={formik}
            fieldName={"type_of_document"}
            label={"TIPO DE DOCUMENTO"}
            isAlphabetic
            type={"text"}
          />
          <TextInput
            formik={formik}
            fieldName={"issue_date"}
            label={"FECHA DE EMISIÓN"}
            type={'date'}
          />
          <TextInput
            formik={formik}
            fieldName={"marital_status"}
            label={"ESTADO CIVIL"}
            isAlphabetic
            type={"text"}
          />
          <TextInput
            formik={formik}
            fieldName={"address"}
            label={"DIRECCIÓN"}
            isAlphabetic
            type={"text"}
          />
          <TextInput
            formik={formik}
            fieldName={"home_number"}
            label={"TELÉFONO CASA"}
            mask={"(999) 999-9999"}
            type={'tel'}
          />
          <TextInput
            formik={formik}
            fieldName={"email"}
            label={"CORREO ELECTRÓNICO"}
            toolTip={
              "Solicitamos su direción de correo para comunicarnos con usted, por su seguridad nunca le solicitaremos que nos proporcione ninguna información por esta vía."
            }
            type={'email'}
          />
          <TextInput
            formik={formik}
            fieldName={"recidency"}
            label={"RESIDENCIA"}
            isAlphabetic
            type={"text"}
          />
        </div>
        <div className="space-y-2 ">

          <TextInput
            formik={formik}
            fieldName={"nacionality"}
            label={"NACIONALIDAD"}
            isAlphabetic
            type={"text"}
          />
          <TextInput
            formik={formik}
            fieldName={"day_of_birth"}
            label={"FECHA DE NACIMIENTO"}
            type={'date'}
          />
          <TextInput
            formik={formik}
            fieldName={"identification_card"}
            label={"NÚMERO DE DOCUMENTO"}
            mask={"999-9999999-9"}
            toolTip={
              "Solicitamos su número de documento para poder registrar y validar la información de identidad que es suministrada en este formulario."
            }
            type={'tel'}
          />
          <TextInput
            formik={formik}
            fieldName={"expiration_date"}
            label={"FECHA DE VENCIMIENTO"}
            type={'date'}

          />
          <TextInput
            formik={formik}
            fieldName={"profession"}
            label={"PROFESIÓN"}
            isAlphabetic
            type={"text"}
          />
          <TextInput
            formik={formik}
            fieldName={"nit_number"}
            label={"NÚMERO DE NIT"}
            type={'tel'}
          />
          <TextInput
            formik={formik}
            fieldName={"cellphone_number"}
            label={"TELÉFONO CELULAR"}
            mask={"(999) 999-9999"}
            type={'tel'}
          />
        </div>
      </div>
    </>

  )
}

export default FormStep_1