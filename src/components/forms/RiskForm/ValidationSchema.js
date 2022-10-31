import * as Yup from "yup";

// Form initial values and validaiton schemas
export const step1Test = {
  language: "",
  reading_domain: "",
  writing_domain: "",
  oral_expresion_domain: "",
};

export const initialValues = {
  aditionnal_language_option: "",
  languages: [step1Test],
  // step 2
  level_of_income: "",
  salary: "",
  own_business_income: "",
  rent_for_real_state: "",
  pensions_and_others: "",
  stock_inverstment: "",
  others: "",
  salary_percentage: "",
  percentage_front_own_business: "",
  percentage_from_rent: "",
  stock_investments: "",
  others_percentage: "",
  Pensions_others: "",
  others_no_2: "",
  stock_investments_amount: "",
  capital_percentage: "",
  income_source_trend: "",
  explain: "",
  savings: "",
  // step 3
  other_investments: "",
  investment_information: "",
  stock_market_experience: "",
  level_of_income: "",
  checkBoxOptions: [],
  type_of_values: [],
  market_investments: "",
  outside_salvador_experience: "",
  country_1: "",
  country_2: "",
  country_3: "",
  experience_1: "",
  experience_2: "",
  experience_3: "",
  negotiated_values_1: "",
  negotiated_values_2: "",
  negotiated_values_3: "",
  alternative_investments: [],
  investment_time: "",
  // step4
  conservative: "",
  moderate: "",
  aggressive: "",
  purpose_of_investments: [],
  economics_situation: [],
  other_explain: "",
  other_action_explain: "",
};

export const validationSchema = [
  Yup.object().shape({
    aditionnal_language_option: Yup.string().required(
      "Favor selecionar una opción"
    ),
    languages: Yup.array().when("aditionnal_language_option", {
      is: "yes",
      then: (schema) =>
        schema.of(
          Yup.object().shape({
            language: Yup.string().required("Favor ingresar idioma"),
            reading_domain: Yup.string().required("Favor ingresar porcentaje"),
            writing_domain: Yup.string().required("Favor ingresar porcentaje"),
            oral_expresion_domain: Yup.string().required(
              "Favor ingresar porcentaje"
            ),
          })
        ),
    }),
  }),
  Yup.object().shape({
    level_of_income: Yup.string().required("Favor ingresar rango de ingresos"),
    salary: Yup.string().required("Favor ingresar salario"),
    own_business_income: Yup.string().required(
      "Favor ingresar ingresos por negocios propios"
    ),
    rent_for_real_state: Yup.string().required(
      "Favor ingresar renta por alquiler"
    ),
    pensions_and_others: Yup.string().required(
      "Favor ingresar pensiones, dietas, etc"
    ),
    stock_inverstment: Yup.string().required(
      "Favor ingresar inversiones en bolsa"
    ),
    others: Yup.string().required("Favor ingresar otros"),
    salary_percentage: Yup.number().required("Favor ingresar porcentaje"),
    percentage_front_own_business: Yup.number().required(
      "Favor ingresar porcentaje"
    ),
    percentage_from_rent: Yup.number().required("Favor ingresar porcentaje"),
    Pensions_others: Yup.string().required("Favor ingresar porcentaje"),
    stock_investments: Yup.number().required("Favor ingresar porcentaje"),
    others_percentage: Yup.number().required("Favor ingresar porcentaje"),
    stock_investments_amount: Yup.number().required(
      "Favor ingresar capital disponible"
    ),
    capital_percentage: Yup.string().required("Favor ingresar rango"),
    income_source_trend: Yup.string().required(
      "Favor seleccione una tendencia"
    ),
    explain: Yup.string().required("Favor ingresar explicar las razones"),
    savings: Yup.string().required("Favor ingresar seleccione una opción"),
  }),
  Yup.object().shape({
    other_investments: Yup.string().required("Favor seleccione una opción"),
    investment_information: Yup.string().when("other_investments", {
      is: (other_investments) => other_investments === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    stock_market_experience: Yup.string().required(
      "Favor  seleccione una opción"
    ),
    level_of_income: Yup.string().required("Favor ingresar escoger un rango"),
    checkBoxOptions: Yup.array().required("Favor  seleccione una opción"),
    market_investments: Yup.string().required("Favor expecificar"),
    outside_salvador_experience: Yup.string().required(
      "Favor ingresar seleccione una opción"
    ),
    country_1: Yup.string().required("Favor ingresar un país"),
    country_2: Yup.string().required("Favor ingresar un país"),
    country_3: Yup.string().required("Favor ingresar un país"),
    experience_1: Yup.string().required("Favor ingresar años de experiencia"),
    experience_2: Yup.string().required("Favor ingresar años de experiencia"),
    experience_3: Yup.string().required("Favor ingresar años de experiencia"),
    negotiated_values_1: Yup.string().required(
      "Favor ingresar tipos de valores negociados"
    ),
    negotiated_values_2: Yup.string().required(
      "Favor ingresar tipos de valores negociados"
    ),
    negotiated_values_3: Yup.string().required(
      "Favor ingresar tipos de valores negociados"
    ),
  }),
  Yup.object().shape({
    conservative: Yup.string().required("Favor ingresar seleccione una opción"),
    moderate: Yup.string().required("Favor ingresar seleccione una opción"),
    aggressive: Yup.string().required("Favor ingresar seleccione una opción"),
    purpose_of_investments: Yup.array().required(
      "Favor ingresar seleccione una opción"
    ),
    economics_situation: Yup.array().required(
      "Favor ingresar seleccione una opción"
    ),
    other_explain: Yup.string().required("Favor explique"),
    other_action_explain: Yup.string().required("Favor especifique"),
  }),
];
