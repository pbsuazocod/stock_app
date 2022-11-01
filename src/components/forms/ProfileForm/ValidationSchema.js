import * as Yup from "yup";
const phoneRegExp = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
// Form initial values and validation schemas

export const step1 = {
  name: "pedro",
  age: "21",
  type_of_document: "Pasaportye",
  issue_date: "Thu Oct 06 2022 00:00:00 GMT-0800 (GMT-08:00) {}",
  marital_status: "Casado",
  address: "asdasdasd",
  home_number: "8099999999",
  email: "pbsue@gmail.com",
  residency: "familiar",
  nationality: "asdasd",
  day_of_birth: "Thu Oct 06 2022 00:00:00 GMT-0800 (GMT-08:00) {}",
  identification_card: "223-2323232-3",
  expiration_date: "Thu Oct 06 2022 00:00:00 GMT-0800 (GMT-08:00) {}",
  profession: "asdasdsa",
  nit_number: "1212-121212-121-2",
  cellphone_number: "8099999999",
};

export const step2 = {
  type_of_work: "PENSIONADO",
  company_name: "inversiones futuro",
  company_line_of_work: "prestamos",
  job_title: "contador",
  time_in_the_company: "20",
  phone: "8099999999",
  full_address: "calle 4 no. 3",
};

export const authorized_persons_values = {
  name_of_aut_person: "",
  day_of_birth_aut_person: "",
  doc_id_aut_person: "",
  nationality_aut_person: "",
  address_aut_person: "",
  email_aut_person: "",
  job_title_aut_person: "",
  phone_number_aut_person: "",
  place_of_work: "",
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
  type_of_work_aut_person: "",
  authorized_persons: [authorized_persons_values],
};

export const step5 = {
  stock_purchase: "Cheque a nombre de la casa",
  sale_values: "Cheque a nombre del cliente",
  owner_of_the_account: "Alexander abreu",
  bank_name: "BHD Leon",
  type_of_account: "De ahorro",
  account_number: "001-121444-5",
  receive_email_auth: "alex@gmail.com ",
  PEP: "yes",
  green_card: "yes",
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
    email: Yup.string()
      .email("Correo electrónico no valido")
      .required(
        "Debes ingresar tu dirección de correo con el siguiente formato: tuemail@ejemplo.com"
      ),
    residency: Yup.string().required("Favor ingresar su residencia"),
    nationality: Yup.string().required("Favor ingresar su nacionalidad"),
    day_of_birth: Yup.string().required("Favor introducir la fecha de emisión"),
    identification_card: Yup.string().required(
      "Favor introducir número de documento"
    ),
    expiration_date: Yup.string().required(
      "Favor introducir la fecha de vencimiento"
    ),
    profession: Yup.string().required("Favor ingresar su profesión"),
    nit_number: Yup.string()
      .required("Favor completar con tu número NIT")
      .typeError("El campo solo permite números"),
    cellphone_number: Yup.string()
      .required()
      .required("Favor ingresar un número de télefono")
      .matches(phoneRegExp, "Favor ingresar un número de télefono valido"),
  }),

  // step2

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
      .min(1, "Favor incresar tiempo minimo de un año")
      .max(60, "Favor incresar tiempo maximo de 70 años")
      .required("Favor ingresar tiempo laboral en la empresa"),
    phone: Yup.string()
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
        name_of_ref_person: Yup.string().required("requerido"),
      })
    ),
  }),

  // Step4

  Yup.object({
    type_of_work_aut_person: Yup.string().required(
      "Favor selecionar una opción"
    ),
    authorized_persons: Yup.array().when("type_of_work_aut_person", {
      is: "yes",
      then: (schema) =>
        schema.of(
          Yup.object().shape({
            name_of_aut_person: Yup.string().required(
              "Favor ingresar tu nombre completo"
            ),
            day_of_birth_aut_person: Yup.string().required(
              "Favor introducir fecha de nacimiento"
            ),
            doc_id_aut_person: Yup.string().required(
              "Favor introducir número de doc"
            ),
            nationality_aut_person: Yup.string().required(
              "Favor introducir nacionalidad"
            ),
            address_aut_person: Yup.string().required(
              "Favor introducir dirección"
            ),
            email_aut_person: Yup.string()
              .email("Correo electrónico no valido")
              .required(
                "Debes ingresar tu dirección de correo con el siguiente formato: tuemail@ejemplo.com"
              ),
            job_title_aut_person: Yup.string().required(
              "Favor introducir nombre del cargo"
            ),
            phone_number_aut_person: Yup.string()
              .required("Favor ingresar un número de télefono")
              .matches(
                phoneRegExp,
                "Favor ingresar un número de télefono valido"
              ),
            place_of_work: Yup.string().notRequired(),
          })
        ),
    }),
  }),
  Yup.object({
    stock_purchase: Yup.string().required("Favor selecionar una opción"),
    sale_values: Yup.string().required("Favor selecionar una opción"),
    owner_of_the_account: Yup.string().required(
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
