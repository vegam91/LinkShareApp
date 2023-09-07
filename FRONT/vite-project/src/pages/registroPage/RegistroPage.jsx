import { Stack, Typography, Button } from "@mui/material";
import Form from "../../Form";
import { getFormFields, validationSchema } from "./form-fields";
import { useAuth } from "../../hooks/auth";
import authService from "../../services/auth-service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function RegistroPage() {
  const navigate = useNavigate();

  const [, dispatch] = useAuth();

  const onSubmit = async (data) => {
    try {
      const token = await authService.register(data);
      const user = await authService.loginWithToken(token);

      let action = { type: "login" };

      action.payload = {
        email: user.email,
      };
      dispatch(action);

      navigate("/links", { replace: true });
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };
  return (
    <Stack spacing={"40px"} backgroundColor="##FFFFFF">
      <Form
        heading=" Create account"
        subheading="Let’s get you started sharing your links! "
        buttonLabel="Create new account"
        onSubmit={onSubmit}
        formFields={getFormFields()}
        validationSchema={validationSchema}
      />

<Typography>
       already have an account?
        <Link to="/"> 
          <Button  variant="text">Login</Button>
        </Link>
      </Typography>
     
    </Stack>

   
  );
}

export default RegistroPage;
