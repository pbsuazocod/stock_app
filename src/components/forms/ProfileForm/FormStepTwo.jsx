import React from "react";
import FormikControl from "../../formik/FormikControl";

// Data

import { typeOfWorkOptions } from "../../config/constants";

function FormStepTwo() {
  
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
          />
        </div>

        <FormikControl
          control="input"
          name="job_activity"
          label="A QUÉ SE DEDICA LA EMPRESA"
          type="text"
        />

        <div className="md:flex gap-4 ">
          <FormikControl
            control="input"
            name="job_position"
            label="CARGO"
            type="text"
          />

          <FormikControl
            control="number"
            name="time_in_company"
            label="TIEMPO QUE LABORA EN LA EMPRESA"
            mode="decimal"
          />
        </div>

        <div className="md:w-1/2">
          <FormikControl
            control="mask"
            name="job_phone"
            label="TELÉFONO"
            mask="(999) 999-9999"
          />
        </div>

        <FormikControl
          control="input"
          name="full_address"
          label="DIRECCIÓN COMPLETA"
          type="text"
        />
      </div>
    </>
  );
}

export default FormStepTwo;
