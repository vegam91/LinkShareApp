import { Box, Button, Stack, FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
import "@fontsource/roboto/300.css";

import Form from "../../Form";
import { getFormFields, validationSchema } from "./form-fields";
import { useAuth } from "../../hooks/auth";
import authService from "../../services/auth-service";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate;
  const [, dispatch] = useAuth();

  const onSubmit = (data) => {
    authService.login(data).then((user) => {
      let action = { type: "login" };

      action.payload = {
        email: user.email,
      };
      dispatch(action);

      navigate("/links");
    });
    // .catch((err) => {
    // 	err('Vuelve a intentarlo')
    // })
  };

  return (
    <Stack backgroundColor="##FFFFFF">
      <Form
        heading="Login"
        subheading="Add your details below to get back into the app"
        buttonLabel="Login"
        onSubmit={onSubmit}
        formFields={getFormFields()}
        validationSchema={validationSchema}
      />

      {/* <Button
        variant="contained"
        sx={{ background: "#633CFF", borderRadius: 8 }}
      >
        Login
      </Button> */}
    </Stack>
  );
}

export default LoginPage;
