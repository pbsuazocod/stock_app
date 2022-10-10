import * as yup from 'yup';

// Form initial values and validaiton schemas

export const initialValues = {
    form_id: 2,
    product: 'tarjeta',
    partial: false,
    entry_id: null,
    firstname: '',
    lastname: '',
    gender: '',
    municipalty: '',
    identification_card: '',
    cell_phone: '',
    email: '',
    study_level: '',
    profesion: '',
    monthly_income: '',
    job: '',
    job_longevity: '',
    local_type: '',
    house_time: '',
    number_of_dependents: '',
    reCaptcha: false,
    terms: false,
};
  
export const validationSchema = [
    yup.object().shape({
      firstname: yup
        .string()
        .required('Favor ingresar tu primer nombre'),
      lastname: yup
        .string()
        .required('Favor ingresar tu primer apellido'),
      gender: yup
        .string()
        .required('Favor selecionar tu sexo'),
      identification_card: yup
        .string()
        .required('Favor completar con tu número de cédula')
        .min(11, 'Verifíca que estes ingresando el número correcto'),
      cell_phone: yup
        .string()
        .min(10, 'Verifica que estes ingresando el número correctamente')
        .required('Favor completar con tu número celular'),
      email: yup
        .string()
        .email('Debes ingresar tu dirección de correo con el siguiente formato: tuemail@ejemplo.com')
        .required('Favor completar con tu dirección de correo con el siguiente formato: tuemail@ejemplo.com'),
      municipalty: yup
        .string()
        .required('Favor selecionar el municipio en que resides, o uno aledaño al suyo'),
      reCaptcha: yup
        .boolean()
        .oneOf([true], 'Este campo es requerido'),
      terms: yup
        .boolean()
        .oneOf([true], 'Este campo es requerido'),
    }),
    yup.object().shape({
      study_level: yup
        .string()
        .required('Favor selecionar tu nivel de estudios'),
      profesion: yup
        .string()
        .required('Favor selecionar tu profesión, o una similar'),
      monthly_income: yup
        .number()
        .required('Favor ingresar tus ingresos mensuales')
        .moreThan(10000, 'Debido a las políticas de crédito establecidas, es necesario que tus ingresos mensuales sean mayores a RD$ 10,000.00 pesos para continuar'),
      job: yup
        .string()
        .required('Favor selecionar el cargo que desempeña actualmente, o uno similar'),
      job_longevity: yup
        .string()
        .required('Favor selecionar la fecha de ingreso donde trabajas actualmente'),
    }),
    yup.object().shape({
      local_type: yup
        .string()
        .required('Favor selecionar el tipo de vivienda'),
      house_time: yup
        .number()
        .typeError('Favor ingresar el tiempo que tiene residiendo en la vivienda')
        .min(0,'Favor ingresar el tiempo que tiene residiendo en la vivienda'),
      number_of_dependents: yup
        .number()
        .typeError('Favor ingresar la cantidad de dependientes')
        .min(0,'Favor ingresar la cantidad de dependientes')
    })
];