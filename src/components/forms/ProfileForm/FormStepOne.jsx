import React from "react";
import FormikControl from "../../formik/FormikControl";
import { documentOptions } from "../../config/constants";

function FormStepOne() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-[2%] gap-6">
        <div className="space-y-2">
          <FormikControl
            control="input"
            label="NOMBRE"
            name="name"
            type="text"
          />
          <FormikControl
            control="input"
            name="age"
            label="EDAD"
            type="number"
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
            control="input"
            name={"marital_status"}
            label={"ESTADO CIVIL"}
            type={"text"}
          />
          <FormikControl
            control="input"
            name={"address"}
            label={"DIRECCIÓN"}
            type={"text"}
          />
          <FormikControl
            control="input"
            name="home_number"
            label="TELÉFONO CASA"
            mask={"(999) 999-9999"}
            type="tel"
          />
          <FormikControl
            control="input"
            name="email"
            label="CORREO ELECTRÓNICO"
            type={"email"}
          />
          <FormikControl
            control="input"
            name="recidency"
            label="RESIDENCIA"
            type={"text"}
          />
        </div>
        <div className="space-y-2 ">
          <FormikControl
            control="input"
            name="nacionality"
            label="NACIONALIDAD"
            type="text"
          />
          <FormikControl
            control="date"
            name="day_of_birth"
            label="FECHA DE NACIMIENTO"
          />
          <FormikControl
            control="input"
            name="identification_card"
            label="NÚMERO DE DOCUMENTO"
            mask="999-9999999-9"
            type="tel"
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
            control="input"
            name="nit_number"
            label="NÚMERO DE NIT"
            type="tel"
          />
          <FormikControl
            control="input"
            name="cellphone_number"
            label="TELÉFONO CELULAR"
            mask="(999) 999-9999"
            type="tel"
          />
        </div>
      </div>
    </>
  );
}

export default FormStepOne;
