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
  stock_investments: "",
  others: "",

  salary_percentage: null,

  percentage_front_own_business: null,
  percentage_from_rent: null,
  percentage_stock_investments: null,
  others_percentage: null,
  Pensions_others: null,
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
  investments_alternative: "",
  percentage: 0,

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

    // ----------------------------------------------------------------
    salary: Yup.string(),
    own_business_income: Yup.string(),
    rent_for_real_state: Yup.string(),
    pensions_and_others: Yup.string(),
    stock_investments: Yup.string(),
    others: Yup.string(),
    stock_investments_amount: Yup.string(),

    // ----------------------------------------------------------------
    salary_percentage: Yup.number("Favor ingresar número mayor a 0")

      .transform((value) => (isNaN(value) ? 0 : value))
      .integer()
      .typeError("Favor ingresar un porcentaje"),

    percentage_front_own_business: Yup.number()
      .transform((value) => (isNaN(value) ? 0 : value))
      .integer()
      .typeError("Favor ingresar un porcentaje"),
    percentage_from_rent: Yup.number()
      .transform((value) => (isNaN(value) ? 0 : value))
      .integer()
      .typeError("Favor ingresar un porcentaje"),
    percentage_stock_investments: Yup.number()
      .transform((value) => (isNaN(value) ? 0 : value))
      .integer()
      .typeError("Favor ingresar un porcentaje"),
    others_percentage: Yup.number()
      .transform((value) => (isNaN(value) ? 0 : value))
      .integer()
      .typeError("Favor ingresar un porcentaje"),
    Pensions_others: Yup.number()
      .transform((value) => (isNaN(value) ? 0 : value))
      .integer()
      .typeError("Favor ingresar un porcentaje"),
    // ----------------------------------------------------------------

    percentage: Yup.number()
      .max(100, "Porcentaje debe ser igual a 100")
      .min(100, "Porcentaje debe ser igual a 100"),
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
    level_of_income: Yup.string().required("Favor escoger un rango"),
    checkBoxOptions: Yup.array().required("Favor  seleccione una opción"),
    market_investments: Yup.string().when("checkBoxOptions", {
      is: (checkBoxOptions) =>
        checkBoxOptions.find((value) => value === "Otros"),
      then: Yup.string().required("Favor especifique"),
    }),
    outside_salvador_experience: Yup.string().required(
      "Favor ingresar seleccione una opción"
    ),
    country_1: Yup.string().when("outside_salvador_experience", {
      is: (outside_salvador_experience) =>
        outside_salvador_experience === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    country_2: Yup.string().when("outside_salvador_experience", {
      is: (outside_salvador_experience) =>
        outside_salvador_experience === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    country_3: Yup.string().when("outside_salvador_experience", {
      is: (outside_salvador_experience) =>
        outside_salvador_experience === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    experience_1: Yup.string().when("outside_salvador_experience", {
      is: (outside_salvador_experience) =>
        outside_salvador_experience === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    experience_2: Yup.string().when("outside_salvador_experience", {
      is: (outside_salvador_experience) =>
        outside_salvador_experience === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    experience_3: Yup.string().when("outside_salvador_experience", {
      is: (outside_salvador_experience) =>
        outside_salvador_experience === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    negotiated_values_1: Yup.string().when("outside_salvador_experience", {
      is: (outside_salvador_experience) =>
        outside_salvador_experience === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    negotiated_values_2: Yup.string().when("outside_salvador_experience", {
      is: (outside_salvador_experience) =>
        outside_salvador_experience === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    negotiated_values_3: Yup.string().when("outside_salvador_experience", {
      is: (outside_salvador_experience) =>
        outside_salvador_experience === "yes",
      then: Yup.string().required("Favor especifique inversiones"),
      otherwise: Yup.string().notRequired(),
    }),
    alternative_investments: Yup.array().required(
      "Favor elegir alternativas de inversión"
    ),
    investments_alternative: Yup.string().when("alternative_investments", {
      is: (alternative_investments) =>
        alternative_investments.find(
          (value) => value === "Ninguno (Sólo indique)"
        ),
      then: Yup.string().required("Favor especifique"),
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
    other_explain: Yup.string().when("purpose_of_investments", {
      is: (purpose_of_investments) =>
        purpose_of_investments.find((value) => value === "Otro (explique):"),
      then: Yup.string().required("Favor especifique"),
    }),
    investments_alternative: Yup.string().when("alternative_investments", {
      is: (alternative_investments) =>
        alternative_investments.find(
          (value) => value === "Ninguno (Sólo indique)"
        ),
      then: Yup.string().required("Favor especifique"),
    }),
    other_action_explain: Yup.string().when("economics_situation", {
      is: (economics_situation) =>
        economics_situation.find(
          (value) => value === "Otra acción (Especifique):"
        ),
      then: Yup.string().required("Favor especifique"),
    }),
  }),
];
