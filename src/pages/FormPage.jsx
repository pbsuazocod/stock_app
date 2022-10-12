import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import ProfileForm from "../components/forms/ProfileForm/ProfileForm";


function FormPage() {


  return (
    <PageWrapper>
      <ProfileForm/>
    </PageWrapper>
  );
}

export default FormPage;
