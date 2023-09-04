import { Stack, Typography, Box, FormControl, TextField } from "@mui/material";
import { getFormFields, validationSchema } from "./form-fields";
import Form from "../../Form";
function ProfilePage() {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Stack spacing="40px">
      <Form
        heading=" Profile Details"
        subheading="Add your details to create a personal touch to your profile."
        buttonLabel="save"
        onSubmit={onSubmit}
        formFields={getFormFields()}
        validationSchema={validationSchema}
      />
    </Stack>
  );
}

export default ProfilePage;
