import React from "react";
import FormiKContainer from "../components/formik/FormiKContainer";
import RiskForm from "../components/forms/RiskForm/RiskForm";
import PageWrapper from "../components/PageWrapper";
// import PageWrapper from "../components/PageWrapper";
import FormWrapper from "../components/UI/FormWrapper/FormWrapper";
// import RiskPage from ""

function RiskPage() {
  return (
    <PageWrapper>
      <RiskForm />
      {/* <FormiKContainer /> */}
    </PageWrapper>
  );
}

export default RiskPage;
