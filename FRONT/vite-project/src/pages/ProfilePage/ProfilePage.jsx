import { Stack, Typography, Box, FormControl, TextField } from "@mui/material";
import { getFormFields, validationSchema } from "./form-fields";
import Form from "../../Form";
import userService from "../../services/user-service,js";
import useUser from "../../hooks/useUser";
import { useState } from "react";

function ProfilePage() {
  const { user, setUser } = useUser();
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",

  });

  const onSubmit = async (data) => {
    try {
      const updatedUser = await userService.update(data);

      setUser(updatedUser);

      console.log("Perfil actualizado:", updatedUser);
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
    }
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
