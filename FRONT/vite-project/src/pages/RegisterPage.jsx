import { Stack, Box, Typography, TextField, Button } from "@mui/material";

function RegistroPage() {
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
          Create account
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          fontSize={"16px"}
          fontFamily={"instrument Sans"}
          color="#737373"
        >
          Let’s get you started sharing your links!
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
          label=""
          variant="outlined"
          placeholder="ben@example.com"
          // width="396px"
        />
        <TextField
          id="outlined-basic"
          label=""
          placeholder="•••••••••••••••••"
          variant="outlined"
        />

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="•••••••••••••••••"
        />
      </Box>

      <Button variant="contained" sx={{ background: "#633CFF", borderRadius: 8 }}>
        Create new account
      </Button>
    </Stack>
  );
}

export default RegistroPage;
