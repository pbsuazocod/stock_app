import React, { useState } from "react";
import FormikControl from "../../formik/FormikControl";
import tooltip from "../../images/tooltip.png";

// Data

import { useFormikContext } from "formik";
import { typeOfWorkOptions } from "../../config/constants";
import { companyOptions } from "../../config/constants";
import { companyTimeOptions } from "../../config/constants";
import { FiUpload } from "react-icons/fi";

function FormStepTwo() {
  // state

  const { values } = useFormikContext();
  const [disabledFields, setDisabledFields] = useState(true);
  const [constancyDisable, setConstancyDisable] = useState(true);

  React.useEffect(() => {
    if (
      values.job_type === "NEGOCIO PROPIO O INDEPENDIENTE" ||
      values.job_type === "EMPLEO PRIVADO, EMPLEO PUBLICO"
    ) {
      setDisabledFields(false)
      setConstancyDisable(false);
    } else if (values.job_type === "PENSIONADO") {
      setConstancyDisable(false);
      setDisabledFields(true)
    }
  }, [values.job_type]);

  return (
    <>
      <div className="p-[3%] space-y-4 font-montserrat font-bold">
        <FormikControl
          control="radio"
          name="job_type"
          options={typeOfWorkOptions}
          className="pt-2"
          layout
        />

        <div className="md:w-1/2">
          <FormikControl
            control="input"
            name="company_name"
            label="NOMBRE DE LA EMPRESA"
            className="w-1/2"
            type="text"
            disabled={disabledFields}
          />
        </div>
        <div className="md:w-1/2">
          <FormikControl
            control="select"
            name="job_activity"
            label="NATURALEZA DE LA EMPRESA"
            options={companyOptions}
            disabled={disabledFields}
          />
        </div>
        <div className="md:flex gap-6 h-20 ">
          <div>
            <FormikControl
              control="input"
              name="job_position"
              label="CARGO"
              type="text"
              disabled={disabledFields}
            />
          </div>
          <FormikControl
            control="select"
            name="time_in_company"
            label="ANTIGÜEDAD"
            options={companyTimeOptions}
            disabled={disabledFields}
          />
        </div>

        <div className="md:w-1/2">
          <FormikControl
            control="mask"
            name="job_phone"
            label="TELÉFONO"
            mask="(999) 999-9999"
            disabled={disabledFields}
          />
        </div>

        <FormikControl
          control="input"
          name="full_address"
          label="DIRECCIÓN COMPLETA"
          type="text"
          disabled={disabledFields}
        />
        <div>
          <div className="flex gap-2">
            <h1>CONSTANCIA</h1>
            <div className="w-4">
              <img
                src={tooltip}
                alt=""
                title="•“Para negocio propio: Deliberación de último año” 
                •“Para Empleo Privado: Constancia de empleo”
                •“Para Pensionado: Constancia de pensión”"
              />
            </div>
          </div>
          <FormikControl
            control="upload"
            name="constancy"
            disabled={constancyDisable}
          />
          <div className="w-44 h-12 mt-3 bg-[#1a3b69] rounded-lg text-white flex  justify-center items-center">
            <label className="flex gap-2" for={"proof_of_address"}>
              SUBIR ARCHIVO <FiUpload />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormStepTwo;
