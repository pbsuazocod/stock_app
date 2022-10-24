import * as Yup from "yup";

// Form initial values and validaiton schemas

export const initialValues = {
  aditionnal_language_option: "",
  language: "",
  reading_domain: "",
  writing_domain: "",
  oral_expresion_domain: "",
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
    reading_domain: Yup.number().required("Favor ingresar porcentaje"),
    writing_domain: Yup.number().required("Favor ingresar porcentaje"),
    oral_expresion_domain: Yup.number().required("Favor ingresar porcentaje"),
  }),
];
