import React from "react";
import FormikControl from "../../formik/FormikControl";
import { FiUpload } from "react-icons/fi";
import tooltip from "../../images/tooltip.png";

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
            name="full_name"
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
            name={"document_type"}
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
            maxdate={new Date()}
          />
          <FormikControl
            control="mask"
            name="phone"
            label="TELÉFONO CASA"
            mask="(999) 999-9999? 99999"
          />
          <FormikControl
            control="input"
            name="email"
            label="CORREO ELECTRÓNICO"
            type={"email"}
          />
          <FormikControl
            control="select"
            name="residence"
            label="RESIDENCIA"
            options={residencyOptions}
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
            name="birthday"
            label="FECHA DE NACIMIENTO"
          />
          <FormikControl
            control="mask"
            name="document_number"
            label="NÚMERO DE DOCUMENTO"
            mask="99999999-9"
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
            name="nit"
            label="NÚMERO DE NIT"
            mask="9999-999999-999-9"
          />
          <FormikControl
            control="mask"
            name="cellphone"
            label="TELÉFONO CELULAR"
            mask="(999) 999-9999? 99999"
          />
        </div>
        <div>
          <div className="flex gap-2">
            <h1>COMPROBANTE DE DOMICILIO</h1>
            <div className="w-4">
              <img
                src={tooltip}
                alt=""
                title="Puede adjuntar una factura de pago de servicios que muestre la dirección de su domicilio"
              />
            </div>
          </div>
          <FormikControl control="upload" name="proof_of_address" />
          <div className="w-44 h-12 bg-[#1a3b69] rounded-lg text-white flex  justify-center items-center">
            <label className="flex gap-2" for={"proof_of_address"}>
              SUBIR ARCHIVO <FiUpload />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormStepOne;
