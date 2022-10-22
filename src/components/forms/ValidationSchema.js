import * as Yup from "yup";

// Form initial values and validaiton schemas

export const initialValues = {
  name: "pedro",
  age: "21",
  type_of_document: "cedula",
  issue_date: "",
  marital_status: "casado",
  address: "calle 4",
  home_number: "8095555555",
  email: "pedro@gmail.com",
  recidency: "santo domingo",
  nacionality: "dominicano",
  day_of_birth: "",
  identification_card: "0011111111",
  expiration_date: "",
  profession: "ingeniero",
  nit_number: "0011111",
  cellphone_number: "8095555555",
  expiration_date: "",
  // step 2
  type_of_work: "",
  company_name: "",
  company_line_of_work: "",
  job_title: "",
  time_in_the_company: "",
  phone: "",
  full_address: "",
};

let today = new Date().toLocaleDateString();

export const validationSchema = [Yup.object({
  name: Yup.string().max(15, "Debe ser mas de 10 caracteres.").required("Favor ingresar tu nombre completo"),
  age: Yup.number().required("Favor ingresar tu edad").min(18, "Debe ser mayor de 18 años"),
  type_of_document: Yup.string().required("Favor ingresar tipo de documento"),
  issue_date: Yup.string().required("Favor introducir la fecha de emisión"),
  marital_status: Yup.string().required("Favor ingresar su estado civil"),
  address: Yup.string().required("Favor ingresar su dirección"),
  home_number: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Solo introdusca numeros")
    .min(10, "Debe contener 10 digitos")
    .max(10, "Debe contener 10 digitos")
    .required("Favor completar con tu número celular"),
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
  nit_number: Yup.number()
    .min(10, "Verifica que estes ingresando el número correctamente")
    .required("Favor completar con tu número NIT"),
  cellphone_number: Yup.string()
    .required()
    .matches(/^[0-9]+$/, "Solo introdusca numeros")
    .min(10, "Debe contener 10 digitos")
    .max(10, "Debe contener 10 digitos")
    .required("Favor completar con tu número celular")
}),
Yup.object({
  type_of_work: Yup.string().required("Favor selecionar una opción"),
  company_name: Yup.string().required("Favor ingresar el nombre de la compañia"),
  company_line_of_work: Yup.string().required("Favor ingresar a que se dedica la compañia"),
  job_title: Yup.string().required("Favor ingresar titulo de su cargo"),
  time_in_the_company: Yup.number()
    .min(10, "Verifica que estes ingresando el número correctamente")
    .required("Favor ingresar tiempo laboral en la empresa"),
  phone: Yup.number()
    .min(10, "Verifica que estes ingresando el número correctamente")
    .required("Favor completar con tu número celular"),
  full_address: Yup.string().required("Favor ingresar el nombre de la compañia"),
})
]
