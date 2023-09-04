import * as yup from "yup";

const getFormFields = () => [
  {
    name: "email",
    label: "Email address",
    placeholder: "e.g. alex@email.com",
  },
  {
    name: "createpassword",
    label: "Create password",
    type: "password",
    placeholder: "At least .8 characters",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholder:  "At least .8 characters",
    
  }
];

const validationSchema = yup.object().shape({});

export { getFormFields, validationSchema };
