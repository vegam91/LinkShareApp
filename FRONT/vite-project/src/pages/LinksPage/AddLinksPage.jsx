import * as React from "react";
import { Stack, Typography, Box, Button,TextField } from "@mui/material";
import { getFormFields, validationSchema } from "./form-fields";
import useLinks from "../../hooks/useLinks";
import Form from "../../Form";


function AddLinksPage() {
  const { Links } = useLinks();

  const onSubmit = (data) => {};

  return (
    <Stack spacing="40px">
      <Box>
        <Typography
          variant="h1"
          gutterBottom
          fontWeight={"700"}
          fontFamily={"Instrument Sans"}
          align="left"
          fontSize={"32px"}
        >
          Customize your links
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          fontSize={"16px"}
          fontFamily={"instrument Sans"}
          color="#737373"
        >
          Add/edit/remove links below and then share all your profiles with the
          world!
        </Typography>
      </Box>
      <Box spacing={"20px"} sx={{ backgroundColor: "#FAFAFA" }}>
        <Box>
          <Button
            variant="outlined"
            sx={{ border: "solid #633CFF", color: "#633CFF", width: "100%" }}
          >
            ADD NEW LINK
          </Button>
        </Box>
        <Typography fontFamily={"Instrument Sans"}>Platform</Typography>
        <Box>
          <Form
            fullWidth
            heading="New Link"
            buttonLabel="Add Link"
            formFields={getFormFields(Links)}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          />

          <Typography fontFamily={"Instrument Sans"} sx={{ margin: "0" }}>
            Link
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            variant="outlined"
            placeholder="asdasda"
          />
        </Box>
      </Box>
    </Stack>
  );
}

export default AddLinksPage;
