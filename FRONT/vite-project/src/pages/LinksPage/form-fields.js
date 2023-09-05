import * as yup from "yup";

const allowedPlatforms = [
  {
    label: "Github",
    value: "Github",
  },
  {
    label: "Facebook",
    value: "Facebook",
  },
  {
    label: "Twitter",
    value: "Twitter",
  },
  {
    label: "Twitch",
    value: "Twitch",
  },
  {
    label: "Dev.to",
    value: "Dev.to",
  },
  {
    label: "CodeWars",
    value: "CodeWars",
  },
  {
    label: "FreeCodeCamp",
    value: "FreeCodeCamp",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
  },
  {
    label: "Youtube",
    value: "Youtube",
  },
  {
    label: "Gitlab",
    value: "Gitlab",
  },
  {
    label: "Hashnode",
    value: "Hashnode",
  },
  {
    label: "Hashnode",
    value: "Hashnode",
  },
];

const validationSchema = yup.object().shape({
  links: yup.array().of(
    yup.object().shape({
      platform: yup
        .string()
        .required("La plataforma es obligatoria")
        .oneOf(
          allowedPlatforms.map((platform) => platform.value),
          "Plataforma no válida"
        ),
      link: yup
        .string()
        .required("El enlace es obligatorio")
        .url("Debe ser una URL válida"),
    })
  ),
});

export { allowedPlatforms, validationSchema };
