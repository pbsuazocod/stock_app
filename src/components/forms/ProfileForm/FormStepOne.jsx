import React from "react";
import FormikControl from "../../formik/FormikControl";

// Data
import {
  documentOptions,
  civilOptions,
  residencyOptions,
} from "../../config/constants";

function FormStepOne() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-[2%] gap-6 font-montserrat font-bold">
        <div className="space-y-2">
          <FormikControl
            control="input"
            label="NOMBRE"
            name="name"
            type="text"
          />
          <FormikControl
            control="number"
            name="age"
            label="EDAD"
            mode="decimal"
          />

          <FormikControl
            control="select"
            name={"type_of_document"}
            label={"TIPO DE DOCUMENTO"}
            placeholder="Seleccione tipo de domuento"
            options={documentOptions}
          />

          <FormikControl
            control="date"
            name={"issue_date"}
            label={"FECHA DE EMISIÓN"}
            type={"date"}
          />
          <FormikControl
            control="select"
            name={"marital_status"}
            label={"ESTADO CIVIL"}
            options={civilOptions}
          />
          <FormikControl
            control="input"
            name={"address"}
            label={"DIRECCIÓN"}
            type={"text"}
          />
          <FormikControl
            control="mask"
            name="home_number"
            label="TELÉFONO CASA"
            mask={"(999) 999-9999"}
          />
          <FormikControl
            control="input"
            name="email"
            label="CORREO ELECTRÓNICO"
            type={"email"}
          />
          <FormikControl
            control="select"
            name="residency"
            label="RESIDENCIA"
            options={residencyOptions}
          />
        </div>
        <div className="space-y-2 ">
          <FormikControl
            control="input"
            name="nationality"
            label="NACIONALIDAD"
            type="text"
          />
          <FormikControl
            control="date"
            name="day_of_birth"
            label="FECHA DE NACIMIENTO"
          />
          <FormikControl
            control="mask"
            name="identification_card"
            label="NÚMERO DE DOCUMENTO"
            mask="999-9999999-9"
          />
          <FormikControl
            control="date"
            name="expiration_date"
            label="FECHA DE VENCIMIENTO"
          />
          <FormikControl
            control="input"
            name="profession"
            label="PROFESIÓN"
            type="text"
          />
          <FormikControl
            control="mask"
            name="nit_number"
            label="NÚMERO DE NIT"
            mask="9999-999999-999-9"
          />
          <FormikControl
            control="mask"
            name="cellphone_number"
            label="TELÉFONO CELULAR"
            mask="(999) 999-9999"
          />
        </div>
      </div>
    </>
  );
}

export default FormStepOne;
