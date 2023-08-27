import React from "react";
// import "./css/Global.css"
import LinkForm from "./linkform";
import NavBar from "./navbar";
import { Container,Box, CssBaseline } from "@mui/material";
function app() {
  return (
   
    <Box
      sx={{
        backgroundColor: "#FAFAFA",
        display: "flex",
        padding: "16px",
        alignItems: "flex-start",
        gap: "24px",
        flex: "1 0 0",
        alignSelf: "stretch",
      }}
    >
      <Container
        sx={{
          backgroundColor:"#FFFFFF",
          display: "flex",
          padding: "24px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "40px",
          flex: "1 0 0",
          alignSelf: "stretch",
        }}
      >
        <Container
          sx={{
            displayRaw: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: "24px 16px 16px 16px",
            gap: "8px",
            borderRadius: "12px",
            background: "red",
            width: "100%",
          }}
        >
          <NavBar />
        </Container>
        <LinkForm />
      </Container>
    </Box>
    
  );
}
export default app;
