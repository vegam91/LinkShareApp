import { Box, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import "@fontsource/roboto/300.css";
import { Typography } from "@mui/material";

function LoginPage() {
  return (
    <Stack spacing={"40px"} backgroundColor="##FFFFFF">
      <Box>
        <Typography
          variant="h1"
          gutterBottom
          fontWeight={"700"}
          fontFamily={"Instrument Sans"}
          align="left"
          fontSize={"32px"}
        >
          Login
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          fontSize={"16px"}
          fontFamily={"instrument Sans"}
          color="#737373"
        >
          Add your details below to get back into the app
        </Typography>
      </Box>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="e.g. alex@email.com"
          variant="outlined"
        
        />
        <TextField
        sx={{width:"369px"}}
          id="outlined-basic"
          label="Enter your password"
          variant="outlined"
        />
      </Box>

      <Button
        variant="contained"
        sx={{ background: "#633CFF", borderRadius: 8}}
      >
        Login
      </Button>
    </Stack>
  );
}

export default LoginPage;
