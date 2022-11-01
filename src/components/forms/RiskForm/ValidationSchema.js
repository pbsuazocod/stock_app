import * as Yup from "yup";

// Form initial values and validaiton schemas
export const step1Test = {
  language: "ingles",
  reading_domain: "100",
  writing_domain: "80",
  oral_expresion_domain: "70",
};

export const initialValues = {
  aditionnal_language_option: "",
  languages: [step1Test],

  // step 2
  
  level_of_income: "Menores de US$15,000.00 dolares",
  salary: "as",
  own_business_income: "asd",
  rent_for_real_state: "ads",
  pensions_and_others: "ads",
  stock_investments: "ad",
  others: "asd",
  salary_percentage: "12",
  percentage_front_own_business: "12",
  percentage_from_rent: "12",
  percentage_stock_investments: "12",
  others_percentage: "12",
  Pensions_others: "ads",
  stock_investments_amount: "1222222",
  capital_percentage: "Mas del 10%",
  income_source_trend: "Nada estable",
  explain: "asdasdasd",
  savings: " SI, PUEDO CUBIR UN MAXIMO DE 6 MESES DE GASTOS MENSUALES",

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
 
  // Step1

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

  // Step2

  Yup.object().shape({
    level_of_income: Yup.string().required("Favor ingresar salario"),
    salary: Yup.string().required("Favor ingresar salario"),
    salary_percentage: Yup.string().required("Favor ingresar porcentaje"),
    own_business_income: Yup.string().required(
      "Favor ingresar ingresos por negocios propios"
    ),
    percentage_front_own_business: Yup.number().required(
      "Favor ingresar porcentaje"
    ),
    rent_for_real_state: Yup.string().required(
      "Favor ingresar renta por alquiler"
    ),
    percentage_from_rent: Yup.string().required("Favor ingresar porcentaje"),
    pensions_and_others: Yup.string().required(
      "Favor ingresar pensiones, dietas, etc"
    ),
    Pensions_others: Yup.string().required("Favor ingresar porcentaje"),
    stock_investments: Yup.string().required("Favor ingresar porcentaje"),
    percentage_stock_investments: Yup.string().required(
      "Favor ingresar capital disponible"
    ),
    others: Yup.string().required("Favor ingresar otros"),
    others_percentage: Yup.string().required("Favor ingresar porcentaje"),
    stock_investments_amount: Yup.string().required(
      "Favor ingresar inversiones en bolsa"
    ),
    capital_percentage: Yup.string().required("Favor ingresar rango"),
    income_source_trend: Yup.string().required(
      "Favor seleccione una tendencia"
    ),
    explain: Yup.string().required("Favor ingresar explicar las razones"),
    savings: Yup.string().required("Favor ingresar seleccione una opción"),
  }),

  // Step3

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
    country_1: Yup.string().when('outside_salvador_experience', {
      is: (outside_salvador_experience) => outside_salvador_experience === 'yes',
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    country_2: Yup.string().when('outside_salvador_experience', {
      is: (outside_salvador_experience) => outside_salvador_experience === 'yes',
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    country_3: Yup.string().when('outside_salvador_experience', {
      is: (outside_salvador_experience) => outside_salvador_experience === 'yes',
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    experience_1: Yup.string().when('outside_salvador_experience', {
      is: (outside_salvador_experience) => outside_salvador_experience === 'yes',
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    experience_2: Yup.string().when('outside_salvador_experience', {
      is: (outside_salvador_experience) => outside_salvador_experience === 'yes',
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    experience_3: Yup.string().when('outside_salvador_experience', {
      is: (outside_salvador_experience) => outside_salvador_experience === 'yes',
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    negotiated_values_1: Yup.string().when('outside_salvador_experience', {
      is: (outside_salvador_experience) => outside_salvador_experience === 'yes',
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    negotiated_values_2: Yup.string().when('outside_salvador_experience', {
      is: (outside_salvador_experience) => outside_salvador_experience === 'yes',
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    negotiated_values_3: Yup.string().when('outside_salvador_experience', {
      is: (outside_salvador_experience) => outside_salvador_experience === 'yes',
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
  }),

  // Step4

  Yup.object().shape({
    conservative: Yup.array().required("Favor ingresar seleccione una opción"),
    moderate: Yup.array().required("Favor ingresar seleccione una opción"),
    aggressive: Yup.array().required("Favor ingresar seleccione una opción"),
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
