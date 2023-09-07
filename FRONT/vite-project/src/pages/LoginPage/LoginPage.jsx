import { Box, Button, Stack, FormControl, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import "@fontsource/roboto/300.css";
import { Link } from 'react-router-dom'
import Form from "../../Form";
import RegistroPage from "../registroPage/RegistroPage";
import { getFormFields, validationSchema } from "./form-fields";
import { useAuth } from "../../hooks/auth";
import authService from "../../services/auth-service";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const navigate = useNavigate();
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
    <Stack spacing={"40px"}backgroundColor="##FFFFFF">
      <Form
        heading="Login"
        subheading="Add your details below to get back into the app"
        buttonLabel="Login"
        onSubmit={onSubmit}
        formFields={getFormFields()}
        validationSchema={validationSchema}
      />
 <Typography>
        Don't have an account? 
        <Link to="/registro"> 
          <Button variant="text">Create One</Button>
        </Link>
      </Typography>
     
    </Stack>
  );
}

export default LoginPage;
