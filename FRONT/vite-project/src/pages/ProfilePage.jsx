import { Stack, Typography, Box, FormControl, TextField } from "@mui/material";

function ProfilePage() {
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
          Profile Details
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          fontSize={"16px"}
          fontFamily={"instrument Sans"}
          color="#737373"
        >
          Add your details to create a personal touch to your profile.
        </Typography>
      </Box>
      <Box>
        <Typography fontFamily={"Instrument Sans"}>Profile Picture</Typography>
      </Box>

      <Box
        spacing={"12px"}
        height={"208px"}
        display={"flex"}
        border={"5px solid black"}
        alignItems={"center"}
      >
        <FormControl fullWidth>
          <Typography fontFamily={"Instrument Sans"} color={"#FAFAFA"}>
            First Name
          </Typography>
          <TextField
            sx={{ width: "432px", border: " 1px solid #D9D9D9" }}
            id="outlined-basic"
            variant="outlined"
            placeholder="asdasda"
          />
          <TextField
            sx={{ width: "432px", border: " 1px solid #D9D9D9" }}
            id="outlined-basic"
            variant="outlined"
            placeholder="asdasda"
          />
          <TextField
            sx={{ width: "432px", border: " 1px solid #D9D9D9" }}
            id="outlined-basic"
            variant="outlined"
            placeholder="asdasda"
          />
        </FormControl>
      </Box>
    </Stack>
  );
}

export default ProfilePage;
