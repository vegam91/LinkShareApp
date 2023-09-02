import * as yup from "yup";

const getFormFields = (options) => [

  {
    name: "Platform",
    label: "Platform",
    type: "select",

    options: options.map((option) => ({
      label: option.name,
      value: option._id,
    })),
    multiple: false,

  },
//   {
//     name: "logo",
//     label: "Logo",
//     type: "file",
//   },
];

const validationSchema = yup.object().shape({
  // date: yup.date().required("El campo es requerido"),
});

export { getFormFields, validationSchema };
