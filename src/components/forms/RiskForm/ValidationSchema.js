import * as Yup from "yup";

// Form initial values and validaiton schemas

export const initialValues = {
  aditionnal_language_option: "",
  language: "",
  reading_domain: "",
  writing_domain: "",
  oral_expresion_domain: "",
  // step 2
  level_of_income:'',
  salary:'',
  own_business_income:"",
  rent_for_real_state:"",
  pensions_and_others:"",
  stock_inverstment:'',
  others:"",
  salary_percentage:"",
  income_front_own_business:'',
  rent_for_property_rental:"",
  Pensions_others:"",
  stock_investments:"",
  others_no_2:"",
  stock_investments_amount:"",
  capital_percentage:"",
  income_source_trend:"",
  explain:"",
  savings:"",
  // step 3
  checkBoxOptions: [],
  alternative_investments: [],
  conservative: [],
  moderate: [],
  aggressive: [],
  purpose_of_investments: [],
  economics_situation: [],
};

export const validationSchema = [
  Yup.object().shape({
    aditionnal_language_option: Yup.string().required(
      "Favor selecionar una opción"
    ),
    language: Yup.string().when("aditionnal_language_option", {
      is: "yes",
      then: Yup.string().required("Favor ingresar idioma"),
    }),
    reading_domain: Yup.string().when("aditionnal_language_option", {
      is: "yes",
      then: Yup.string().required("Favor ingresar porcentaje"),
    }),
    writing_domain: Yup.string().when("aditionnal_language_option", {
      is: "yes",
      then: Yup.string().required("Favor ingresar porcentaje"),
    }),
    oral_expresion_domain: Yup.string().when("aditionnal_language_option", {
      is: "yes",
      then: Yup.string().required("Favor ingresar porcentaje"),
    }),
  }),
];
