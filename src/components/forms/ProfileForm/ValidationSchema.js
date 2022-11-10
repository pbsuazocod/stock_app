import * as Yup from "yup";

const phoneRegExp = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

// Form initial values and validation schemas

export const step1 = {
  // client_id: "",
  stock_market_id: "",
  full_name: "",
  age: "",
  document_type: "",
  issue_date: "",
  marital_status: "",
  address: "",
  email: "",
  residence: "",
  nacionality: "",
  birthday: "",
  document_number: "",
  expiration_date: "",
  profession: "",
  nit: "",
  cellphone: "",
  phone: "",
};

export const step2 = {
  job_type: "",
  company_name: "",
  job_activity: "",
  job_position: "",
  time_in_company: "",
  job_phone: "",
  full_address: "",
};

export const authorized_persons_values = {
  signature_full_name: "",
  signature_birthday: "",
  signature_document_number: "",
  signature_nationality: "",
  signature_address: "",
  signature_email: "",
  signature_position: "",
  signature_phone: "",
  signature_workspace: "",
};
export const personal_reference_values = {
  name_of_ref_person: "",
  ref_place_of_work: "",
  ref_email_aut_person: "",
  phone_number_ref_person: "",
};

export const step3 = {
  personal_reference: [personal_reference_values],
};

export const step4 = {
  authorize_other_people: "",
  authorized_persons: [authorized_persons_values],
};

export const step5 = {
  stock_purchase: "",
  sale_values: "",
  account_holder_name: "",
  bank_name: "",
  account_type: "",
  account_number: "",
  receive_email_auth: "",
  PEP: "",
  green_card: "",
};

export const initialValues = {
  ...step1,
  ...step2,
  ...step3,
  ...step4,
  ...step5,
};

export const validationSchema = [
  // step1

  Yup.object({
    full_name: Yup.string()
      .max(15, "Debe ser mas de 10 caracteres.")
      .required("Favor ingresar tu nombre completo"),
    age: Yup.number()
      .required("Favor ingresar tu edad")
      .min(18, "Debe ser mayor de 18 años")
      .max(100, "Debe ser menor de 100 años"),
    document_type: Yup.string().required("Favor ingresar tipo de documento"),
    issue_date: Yup.string().required("Favor introducir la fecha de emisión"),
    marital_status: Yup.string().required("Favor ingresar su estado civil"),
    address: Yup.string().required("Favor ingresar su dirección"),
    email: Yup.string()
      .email("Correo electrónico no valido")
      .required(
        "Debes ingresar tu dirección de correo con el siguiente formato: tuemail@ejemplo.com"
      ),
    residence: Yup.string().required("Favor ingresar su residencia"),
    nacionality: Yup.string().required("Favor ingresar su nacionalidad"),
    birthday: Yup.string().required("Favor introducir la fecha de emisión"),
    document_number: Yup.string().required(
      "Favor introducir número de documento"
    ),
    expiration_date: Yup.string().required(
      "Favor introducir la fecha de vencimiento"
    ),
    profession: Yup.string().required("Favor ingresar su profesión"),
    nit: Yup.string()
      .required("Favor completar con tu número NIT")
      .typeError("El campo solo permite números"),
    cellphone: Yup.string()
      .required()
      .required("Favor ingresar un número de télefono")
      .matches(phoneRegExp, "Favor ingresar un número de télefono valido"),
    phone: Yup.string()
      .required()
      .required("Favor ingresar un número de télefono")
      .matches(phoneRegExp, "Favor ingresar un número de télefono valido"),
  }),

  // step2

  Yup.object({
    job_type: Yup.string().required("Favor selecionar una opción"),
    company_name: Yup.string().required(
      "Favor ingresar el nombre de la compañia"
    ),
    job_activity: Yup.string().required(
      "Favor ingresar a que se dedica la compañia"
    ),
    job_position: Yup.string().required("Favor ingresar titulo de su cargo"),
    time_in_company: Yup.number()
      .min(1, "Favor incresar tiempo minimo de un año")
      .max(60, "Favor incresar tiempo maximo de 70 años")
      .required("Favor ingresar tiempo laboral en la empresa"),
    job_phone: Yup.string()
      .required("Favor ingresar un número de télefono")
      .matches(phoneRegExp, "Favor ingresar un número de télefono valido"),
    full_address: Yup.string().required(
      "Favor ingresar el nombre de la compañia"
    ),
  }),

  // Step3

  Yup.object({
    personal_reference: Yup.array().of(
      Yup.object().shape({
        name_of_ref_person: Yup.string().required(
          "Favor ingresar nombre completo"
        ),
        ref_place_of_work: Yup.string().required(
          "Favor ingresar lugar de trabajo"
        ),
        ref_email_aut_person: Yup.string()
          .email("Correo electrónico no valido")
          .required(
            "Debes ingresar tu dirección de correo con el siguiente formato: tuemail@ejemplo.com"
          ),
        phone_number_ref_person: Yup.string()
          .required()
          .required("Favor ingresar un número de télefono")
          .matches(phoneRegExp, "Favor ingresar un número de télefono valido"),
      })
    ),
  }),

  // Step4

  Yup.object({
    authorize_other_people: Yup.string().required(
      "Favor selecionar una opción"
    ),
    authorized_persons: Yup.array().when("authorize_other_people", {
      is: "yes",
      then: (schema) =>
        schema.of(
          Yup.object().shape({
            signature_full_name: Yup.string().required(
              "Favor ingresar tu nombre completo"
            ),
            signature_birthday: Yup.string().required(
              "Favor introducir fecha de nacimiento"
            ),
            signature_document_number: Yup.string().required(
              "Favor introducir número de doc"
            ),
            signature_nationality: Yup.string().required(
              "Favor introducir nacionalidad"
            ),
            signature_address: Yup.string().required(
              "Favor introducir dirección"
            ),
            signature_email: Yup.string()
              .email("Correo electrónico no valido")
              .required(
                "Debes ingresar tu dirección de correo con el siguiente formato: tuemail@ejemplo.com"
              ),
            signature_position: Yup.string().required(
              "Favor introducir nombre del cargo"
            ),
            signature_phone: Yup.string()
              .required("Favor ingresar un número de télefono")
              .matches(
                phoneRegExp,
                "Favor ingresar un número de télefono valido"
              ),
            signature_workspace: Yup.string().notRequired(),
          })
        ),
    }),
  }),

  // Step 5

  Yup.object({
    stock_purchase: Yup.string().required("Favor selecionar una opción"),
    sale_values: Yup.string().required("Favor selecionar una opción"),
    account_holder_name: Yup.string().required(
      "Favor ingresar titular de cuenta"
    ),
    bank_name: Yup.string().required("Favor ingresar nombre del banco"),
    account_type: Yup.string().required("Favor ingresar tipo de cuenta"),
    account_number: Yup.string().required("Favor ingresar tipo de cuenta"),
    receive_email_auth: Yup.string().required("Favor ingresar tipo de cuenta"),
    PEP: Yup.string().required("Favor selecionar una opción"),
    green_card: Yup.string().required("Favor selecionar una opción"),
  }),
];
