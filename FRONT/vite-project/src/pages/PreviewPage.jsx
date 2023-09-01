import { Container, Stack, Box, Avatar } from "@mui/material";

function Preview() {
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
        alignItems={"center"}
        border={"10px solid blue"}
        width={"100%"}
        height={"100vh"}
        spacing={"60px"}
        paddingBottom={"237px"}
        padding={"0px"}
      >
        <Box
          borderRadius={{ sm: "0px 0px 32px 32px" }}
          width={"100%"}
          bgcolor={{ sm: "#633CFF" }}
          padding={{ xs: "16px", sm: "24px" }}
          height={{ sm: "357px" }}
        >
          <Stack
          sx={{backgroundColor:"white"}}>


          </Stack>
        </Box>

        <Box
          sx={{ transform: "translate(-50%,-50%)" }}
          height={"617px"}
          position={"absolute"}
          top={"calc(50% - 60px)"}
          left={"50%"}
          bgcolor={{ sm: "blue" }}
          width={{ sm: "349px" }}
          padding={{ sm: "48px 56px" }}
          marginTop={"-60px"}
          borderradius= {{sm:"24px"}}
        >
    
        </Box>
      </Stack>
    </Container>
  );
}

export default Preview;
