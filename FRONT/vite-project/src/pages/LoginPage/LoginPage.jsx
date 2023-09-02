import { Box, Button, Stack, FormControl } from "@mui/material";
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
        <FormControl>
          <Typography fontFamily={"Instrument Sans"} sx={{ margin: "0" }}>
            Email address
          </Typography>
          <TextField
            fullWidth
            sx={{ width: "100%" }}
            id="outlined-basic"
            variant="outlined"
            placeholder="e.g. alex@email.com"
            label=""
          />
          <Typography fontFamily={"Instrument Sans"} sx={{ margin: "0" }}>
            Password
          </Typography>

          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter your password"
            label=""
          />
        </FormControl>
      </Box>

      <Button
        variant="contained"
        sx={{ background: "#633CFF", borderRadius: 8 }}
      >
        Login
      </Button>
    </Stack>
  );
}

export default LoginPage;
