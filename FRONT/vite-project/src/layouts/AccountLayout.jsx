import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
function AccessLayout() {
  return (
    <Container>
      <div>Navbar</div>
      <div>Mobile</div>
      <Outlet />
      <div>botón</div>
    </Container>
  );
}

export default AccessLayout;
