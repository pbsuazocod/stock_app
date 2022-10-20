import * as Yup from "yup";

// Form initial values and validaiton schemas

export const initialValues = {
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
  expiration_date: "",
};

let today = new Date().toLocaleDateString();

console.log(today);

export const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Debe ser mas de 10 caracteres.")
    .required("Favor ingresar tu nombre completo"),
  age: Yup.number()
    .required("Favor ingresar su edad")
    .min(18, "Debe ser mayor de 18 años"),
  type_of_document: Yup.string().required("Favor ingresar tipo de documento"),
  issue_date: Yup.string().required("Favor introducir la fecha de emisión"),
  marital_status: Yup.string().required("Favor ingresar su estado civil"),
  address: Yup.string().required("Favor ingresar su dirección"),
  home_number: Yup.number()
    .min(10, "Verifica que estes ingresando el número correctamente")
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
  cellphone_number: Yup.number()
    .min(10, "Verifica que estes ingresando el número correctamente")
    .required("Favor completar con tu número celular"),
});

// export const validationSchema = [
//   yup.object().shape({
//     name: yup.string().required("Favor ingresar tu primer nombre"),
//     lastname: yup.string().required("Favor ingresar tu primer apellido"),
//     gender: yup.string().required("Favor selecionar tu sexo"),
//     identification_card: yup
//       .string()
//       .required("Favor completar con tu número de cédula")
//       .min(11, "Verifíca que estes ingresando el número correcto"),
//     cell_phone: yup
//       .string()
//       .min(10, "Verifica que estes ingresando el número correctamente")
//       .required("Favor completar con tu número celular"),
//     email: yup
//       .string()
//       .email(
//         "Debes ingresar tu dirección de correo con el siguiente formato: tuemail@ejemplo.com"
//       )
//       .required(
//         "Favor completar con tu dirección de correo con el siguiente formato: tuemail@ejemplo.com"
//       ),
//     municipalty: yup
//       .string()
//       .required(
//         "Favor selecionar el municipio en que resides, o uno aledaño al suyo"
//       ),
//     reCaptcha: yup.boolean().oneOf([true], "Este campo es requerido"),
//     terms: yup.boolean().oneOf([true], "Este campo es requerido"),
//   }),
//   yup.object().shape({
//     study_level: yup.string().required("Favor selecionar tu nivel de estudios"),
//     profesion: yup
//       .string()
//       .required("Favor selecionar tu profesión, o una similar"),
//     monthly_income: yup
//       .number()
//       .required("Favor ingresar tus ingresos mensuales")
//       .moreThan(
//         10000,
//         "Debido a las políticas de crédito establecidas, es necesario que tus ingresos mensuales sean mayores a RD$ 10,000.00 pesos para continuar"
//       ),
//     job: yup
//       .string()
//       .required(
//         "Favor selecionar el cargo que desempeña actualmente, o uno similar"
//       ),
//     job_longevity: yup
//       .string()
//       .required(
//         "Favor selecionar la fecha de ingreso donde trabajas actualmente"
//       ),
//   }),
//   yup.object().shape({
//     local_type: yup.string().required("Favor selecionar el tipo de vivienda"),
//     house_time: yup
//       .number()
//       .typeError("Favor ingresar el tiempo que tiene residiendo en la vivienda")
//       .min(0, "Favor ingresar el tiempo que tiene residiendo en la vivienda"),
//     number_of_dependents: yup
//       .number()
//       .typeError("Favor ingresar la cantidad de dependientes")
//       .min(0, "Favor ingresar la cantidad de dependientes"),
//   }),
// ];
