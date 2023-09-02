import {
  Stack,
  Typography,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function LinksPage() {
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
          Customize your links
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          fontSize={"16px"}
          fontFamily={"instrument Sans"}
          color="#737373"
        >
          Add/edit/remove links below and then share all your profiles with the
          world!
        </Typography>
      </Box>
      <Box
        spacing={"20px"}
        border={"5px solid red"}
        sx={{ backgroundColor: "#FAFAFA" }}
      >
        <Box border={"5px solid green"}>
          <Button
            variant="outlined"
            sx={{ border: "solid #633CFF", color: "#633CFF", width: "100%" }}
          >
            ADD NEW LINK
          </Button>
        </Box>
        <Typography fontFamily={"Instrument Sans"}>Platform</Typography>
        <Box border={"5px solid black"}>
          <FormControl fullWidth>
            <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={age}
            // label="Age"
            // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <Typography fontFamily={"Instrument Sans"} sx={{ margin: "0" }}>
            Link
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            variant="outlined"
            placeholder="asdasda"
          />
        </Box>
      </Box>
    </Stack>
  );
}

export default LinksPage;
