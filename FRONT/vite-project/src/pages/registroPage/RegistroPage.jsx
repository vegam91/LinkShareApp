import { Stack} from "@mui/material";
import Form from "../../Form";
import { getFormFields, validationSchema } from "./form-fields";
import { useAuth } from "../../hooks/auth";
import authService from "../../services/auth-service";
import { useNavigate } from "react-router-dom";

function RegistroPage() {



  
  const onSubmit = (data) => {
    console.log(data);
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
    </Stack>
  );
}

export default RegistroPage;
