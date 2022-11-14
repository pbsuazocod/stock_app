import React from "react";
import { Field, ErrorMessage } from "formik";
// import { FileUpload } from "primereact";

import TextError from "./TextError";

function Upload(props) {
  const { label, name, ...rest } = props;

  return (
    <React.Fragment>
      <Field id={name} name={name} {...rest}>
        {({ field, form }) => {
          return (
            <div className="flex flex-col">
              <label htmlFor={name}>{label}</label>
              <input
                type="file"
                id={name}
                name={field.name}
                value={form.values[field.name]}
                onChange={(e) => form.setFieldValue("file", e.target.files[0])}
                // onBlur={form.handleBlur(field.name)}
                {...rest}
                className=" opacity-0 z-0 absolute bg-green-300"
              />
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </React.Fragment>
  );
}

export default Upload;
