import { Outlet } from "react-router-dom";
import { Container, Stack } from "@mui/material";
function AccessLayout() {
  return (
    <Container
      sx={{
        border: "10px solid  red",
        direction: "column",
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "0px", sm: "0px" },
      }}
    >
      <Stack
        border="1px solid  red"
        width={"100%"}
        alignItems={"flex-start"}
        sx={{ position: "absolute" }}
      >
        Navbar
        <div>Mobile</div>
        <Outlet />
        <div>botón</div>
      </Stack>
    </Container>
  );
}

export default AccessLayout;
