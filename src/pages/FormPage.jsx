import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import ProfileForm from "../components/forms/ProfileForm/ProfileForm";
import FormiKContainer from "../components/formik/FormiKContainer";

function FormPage() {
  return (
    <PageWrapper>
      <ProfileForm/>
      {/* <FormiKContainer /> */}
    </PageWrapper>
  );
}

export default FormPage;
