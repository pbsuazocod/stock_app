import React from "react";
import FormikControl from "../../formik/FormikControl";

// Data
import { authPersonOptions } from "../../config/constants";

function FormStepThree() {
  return (
    <div className="p-[2%]">
      <div className="pl-[1%]">
        <p>
          DESEA AUTORIZAR A OTRA PERSONA QUE GIRE INSTRUCCIONES EN SU NOMBRE
        </p>

        <FormikControl
          control="radio"
          label=""
          name="type_of_work_aut_person"
          options={authPersonOptions}
          className="pt-2"
        />
      </div>

      <div className="mt-[2%] ml-[2%] border-l-4 pr-[2%] pl-[1%] border-[#40B879] first-line:border-solid">
        <div className=" grid-none md:grid grid-row-5 lg:grid-cols-2 grid-col-1 gap-4">
          <FormikControl
            control="input"
            name="name_of_aut_person"
            label="NOMBRE"
            type="text"
          />

          <div>
            <FormikControl
              control="date"
              name="day_of_birth_aut_person"
              label="FECHA DE NACIMIENTO"
              type="date"
            />
          </div>

          <FormikControl
            control="input"
            name="place_of_birth_aut_person"
            label="LUGAR DE NACIMIENTO"
            type="text"
          />

          <FormikControl
            control="input"
            name="email_aut_person"
            label="CORREO ELECTRÓNICO"
            type="email"
          />

          <FormikControl
            control="input"
            name="doc_id_aut_person"
            label="NO. DE DOC DE ID"
            mask="999-9999999-9"
            type="text"
          />

          <FormikControl
            control="input"
            name="nacionality_aut_person"
            label="NACIONALIDAD"
            type="text"
          />

          <FormikControl
            control="input"
            name="job_title_aut_person"
            label="CARGO"
            type="text"
          />

          <FormikControl
            control="input"
            name="phone_number_aut_person"
            label="TELÉFONO "
            mask={"(999) 999-9999"}
            type="tel"
          />

          <div className="col-span-2">
            <FormikControl
              control="input"
              name="adress_aut_person"
              label="DIRECCIÓN"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormStepThree;
