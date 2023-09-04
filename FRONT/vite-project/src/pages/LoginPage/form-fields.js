import * as yup from "yup";

const getFormFields = () => [
  {
    name: "email",
    label: "email",
    placeholder: "e.g. alex@email.com",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

const validationSchema = yup.object().shape({});

export { getFormFields, validationSchema };
