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

const getFormFields = (links) => {
  let fields = [];

  const platformField = {
    name: "platform-0",
    label: "Platform",
    type: "select",
    options: allowedPlatforms,
  };
  fields.push(platformField);

  const linkField = {
    name: "link-0",
    label: "Link",
    type: "text",
  };
  fields.push(linkField);

  return fields;
};

const validationSchema = yup.object().shape({
  
});

export { getFormFields, validationSchema };
