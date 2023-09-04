import * as yup from "yup";

const getFormFields = () => [
  {
    name: "First name",
    label: "First name",
    placeholder: "e.g. John",
  },
  {
    name: "Last Name",
    label: "Last Name",

    placeholder: "e.g. Appleseed",
  },
  ,
  {
    name: "Email",
    label: "Email",

    placeholder: "e.g. email@example.com",
  },
  { name: "logo",  type: "file" },
];

const validationSchema = yup.object().shape({});

export { getFormFields, validationSchema };
