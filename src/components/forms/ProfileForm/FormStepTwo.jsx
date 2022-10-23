import React from "react";
import FormikControl from "../../formik/FormikControl";

// Data
import { typeOfWorkOptions } from "../../config/constants";

function FormStepTwo() {
  return (
    <>
      <div className="p-[3%] space-y-4">
        <FormikControl
          control="radio"
          label=""
          name="type_of_work"
          options={typeOfWorkOptions}
          className="pt-2"
          layout
        />

        <div className="w-1/2">
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
          name="company_line_of_work"
          label="A QUÉ SE DEDICA LA EMPRESA"
          type="text"
        />

        <div className="md:flex gap-4 ">
          <FormikControl
            control="input"
            name="job_title"
            label="CARGO"
            type="text"
          />

          <FormikControl
            control="input"
            name="time_in_the_company"
            label="TIEMPO QUE LABORA EN LA EMPRESA"
            type="number"
          />
        </div>

        <div className="w-1/2">
          <FormikControl
            control="input"
            name="phone"
            label="TELÉFONO"
            mask="(999) 999-9999"
            type="tel"
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
