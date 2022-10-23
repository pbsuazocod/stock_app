import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import Text from "./Text";
import FormStepOne from "../forms/ProfileForm/FormStepOne";

function FormiKContainer() {


  const initialValues = {
    name: "",
    description: "",
    selectOption: "",
    radioOptions: "",
    checkBoxOptions: [],
    birthDay: null,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("required"),
    description: Yup.string().required("required"),
    selectOption: Yup.string().required("required"),
    radioOptions: Yup.string().required("required"),
    checkBoxOptions: Yup.array().required("required"),
    // birthDate: Yup.date().required("required").nullable(),
  });
  const onSubmit = (errors) => console.log("Form Data", errors);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <Text />
          <button type="submit">Submit Button</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormiKContainer;
