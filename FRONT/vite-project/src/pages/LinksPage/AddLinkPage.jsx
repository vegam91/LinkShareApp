import { Stack, Box, Typography, Button } from "@mui/material";
import Form from "../../Form";
import { getFormFields, validationSchema } from "./form-fields";
import { useState, useEffect } from "react";
import useLinks from "../../hooks/useLinks";

function AddlinkForm() {
  const [newLink, setNewLink] = useState({});

  const { links, setLinks } = useLinks();
  const handleNewLink = () => {
    if (!_.isEmpty(newLink)) return;

    setNewLink({
      id: "new",
      platform: "",
      link: "",
    });
  };

  const onSubmit = (data) => {
    const transformData = [];

    for (const prop in data) {
      const id = prop.split("-")[2];
      const index = prop.split("-")[1];
      const field = prop.split("-")[0];

      transformData[index] = {
        ...transformData[index],
        [field]: data[prop],
        id,
      };
    }

    console.log("VAMOS", transformData)}


  return (
    <Stack spacing="40px">
      <Box>
        <Form
          heading="New Link"
          buttonLabel="Add Link"
          formFields={getFormFields(links)}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </Box>
      {/* </Box> */}
    </Stack>
  );
}

export default AddlinkForm;
