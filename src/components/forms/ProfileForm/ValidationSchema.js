import * as Yup from "yup";

const phoneRegExp = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

// Form initial values and validation schemas
const step1Test = {
  name: "",
  age: "",
  type_of_document: "",
  issue_date: "",
  marital_status: "",
  address: "",
  home_number: "",
  email: "",
  recidency: "",
  nacionality: "",
  day_of_birth: "",
  identification_card: "",
  expiration_date: "",
  profession: "",
  nit_number: "",
  cellphone_number: "",
};
const step2Test = {
  type_of_work: "",
  company_name: "",
  company_line_of_work: "",
  job_title: "",
  time_in_the_company: "",
  phone: "",
  full_address: "",
};
export const step3Test = {
  name_of_aut_person: "",
  day_of_birth_aut_person: "",
  place_of_birth_aut_person: "",
  email_aut_person: "",
  doc_id_aut_person: "",
  nationality_aut_person: "",
  job_title_aut_person: "",
  phone_number_aut_person: "",
  address_aut_person: "",
};

export const initialValues = {
  ...step1Test,
  // name: "",
  // age: "-1",
  // type_of_document: "",
  // issue_date: "",
  // marital_status: "",
  // address: "",
  // home_number: "",
  // email: "",
  // recidency: "",
  // nacionality: "",
  // day_of_birth: "",
  // identification_card: "",
  // expiration_date: "",
  // profession: "",
  // nit_number: "",
  // cellphone_number: "",
  // step 2
  ...step2Test,
  // type_of_work: "",
  // company_name: "",
  // company_line_of_work: "",
  // job_title: "",
  // time_in_the_company: "",
  // phone: "",
  // full_address: "",
  // step 3
  // ...step3Test,
  type_of_work_aut_person: "",
  authorized_persons: [step3Test],

  // name_of_aut_person: "",
  // day_of_birth_aut_person: "",
  // place_of_birth_aut_person: "",
  // email_aut_person: "",
  // doc_id_aut_person: "",
  // nationality_aut_person: "",
  // job_title_aut_person: "",
  // phone_number_aut_person: "",
  // address_aut_person: "",
  // step 4
  stock_purchase: "",
  sale_values: "",
  woner_of_the_account: "",
  bank_name: "",
  type_of_account: "",
  account_number: "",
  receive_email_auth: "",
  PEP: "",
  green_card: "",
};

export const validationSchema = [
  Yup.object({
    name: Yup.string()
      .max(15, "Debe ser mas de 10 caracteres.")
      .required("Favor ingresar tu nombre completo"),
    age: Yup.number()
      .required("Favor ingresar tu edad")
      .min(18, "Debe ser mayor de 18 años")
      .max(100, "Debe ser menor de 100 años"),
    type_of_document: Yup.string().required("Favor ingresar tipo de documento"),
    issue_date: Yup.string().required("Favor introducir la fecha de emisión"),
    marital_status: Yup.string().required("Favor ingresar su estado civil"),
    address: Yup.string().required("Favor ingresar su dirección"),
    home_number: Yup.string()
    .required("Favor ingresar un numero de télefono")
    .matches(phoneRegExp, 'Favor ingresar un numero de télefono valido'),
    email: Yup.string()
      .email("Invalid email address")
      .required(
        "Debes ingresar tu dirección de correo con el siguiente formato: tuemail@ejemplo.com"
      ),
    recidency: Yup.string().required("Favor ingresar su residencia"),
    nacionality: Yup.string().required("Favor ingresar su nacionalidad"),
    day_of_birth: Yup.string().required("Favor introducir la fecha de emisión"),
    identification_card: Yup.string().required(
      "Favor introducir número de documento"
    ),
    expiration_date: Yup.string().required(
      "Favor introducir la fecha de vencimiento"
    ),
    profession: Yup.string().required("Favor ingresar su profesión"),
    nit_number: Yup.string()
      .min(10, "Verifica que estes ingresando el número correctamente")
      .required("Favor completar con tu número NIT")
      .typeError("El campo solo permite números"),
    cellphone_number: Yup.string()
    .required("Favor ingresar un numero de télefono")
    .matches(phoneRegExp, 'Favor ingresar un numero de télefono valido'),
  }),
  Yup.object({
    type_of_work: Yup.string().required("Favor selecionar una opción"),
    company_name: Yup.string().required(
      "Favor ingresar el nombre de la compañia"
    ),
    company_line_of_work: Yup.string().required(
      "Favor ingresar a que se dedica la compañia"
    ),
    job_title: Yup.string().required("Favor ingresar titulo de su cargo"),
    time_in_the_company: Yup.number()
      .min(10, "Verifica que estes ingresando el número correctamente")
      .required("Favor ingresar tiempo laboral en la empresa"),
    phone: Yup.string()
    .required("Favor ingresar un numero de télefono")
    .matches(phoneRegExp, 'Favor ingresar un numero de télefono valido'),
    full_address: Yup.string().required(
      "Favor ingresar el nombre de la compañia"
    ),
  }),
  Yup.object({
    type_of_work_aut_person: Yup.string().required(
      "Favor selecionar una opción"
    ),
    authorized_persons: Yup.array().of(
      Yup.object().shape({
        name_of_aut_person: Yup.string()
          .max(15, "Debe ser mas de 10 caracteres.")
          .required("Favor ingresar tu nombre completo"),
        day_of_birth_aut_person: Yup.string().required(
          "Favor introducir fecha de nacimiento"
        ),
        place_of_birth_aut_person: Yup.string().required(
          "Favor introducir lugar de nacimiento"
        ),
        email_aut_person: Yup.string()
          .email("Invalid email address")
          .required(
            "Debes ingresar tu dirección de correo con el siguiente formato: tuemail@ejemplo.com"
          ),
        doc_id_aut_person: Yup.string().required(
          "Favor introducir la fecha de vencimiento"
        ),
        nationality_aut_person: Yup.string().required(
          "Favor introducir nacionalidad"
        ),
        job_title_aut_person: Yup.string().required(
          "Favor introducir nombre del cargo"
        ),
        phone_number_aut_person: Yup.string()
        .required("Favor ingresar un numero de télefono")
        .matches(phoneRegExp, 'Favor ingresar un numero de télefono valido'),
        address_aut_person: Yup.string().required("Favor introducir dirección"),
      })
    ),
  }),
  Yup.object({
    stock_purchase: Yup.string().required("Favor selecionar una opción"),
    sale_values: Yup.string().required("Favor selecionar una opción"),
    woner_of_the_account: Yup.string().required(
      "Favor ingresar titular de cuenta"
    ),
    bank_name: Yup.string().required("Favor ingresar nombre del banco"),
    type_of_account: Yup.string().required("Favor ingresar tipo de cuenta"),
    account_number: Yup.string().required("Favor ingresar tipo de cuenta"),
    receive_email_auth: Yup.string().required("Favor ingresar tipo de cuenta"),
    PEP: Yup.string().required("Favor selecionar una opción"),
    green_card: Yup.string().required("Favor selecionar una opción"),
  }),
];
