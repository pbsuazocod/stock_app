import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import FormWrapper from "../components/UI/FormWrapper/FormWrapper";
import ProfileForm from "../components/forms/ProfileForm";

function FormPage() {
  const formTitle = "DATOS GENERALES";

  return (
    <PageWrapper>
      <FormWrapper formTitle={formTitle}><ProfileForm/></FormWrapper>
    </PageWrapper>
  );
}

export default FormPage;
