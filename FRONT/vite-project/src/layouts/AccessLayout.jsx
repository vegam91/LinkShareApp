import { Outlet } from "react-router-dom";
import { Container, Stack, Box } from "@mui/material";

function AccessLayout() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: { sm: "center" },
        border: "1px solid red",
        height: "100vh",
        p: { xs: "32px", sm: "0" },
      }}
    >
      <Stack
        width={{ xs: "100%", sm: "476px" }}
        border={"1px solid red"}
        spacing={{ xs: "64px", sm: "51px" }}
      >
        <Box bgcolor="blue">LOGO</Box>
        <Box p={{ sm: "40px" }} bgcolor="green">
          <Outlet />
        </Box>
      </Stack>
    </Container>
  );
}

export default AccessLayout;
