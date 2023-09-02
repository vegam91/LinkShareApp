import { Container, Stack, Box, Button, Avatar } from "@mui/material";

function Preview() {
  return (
    <Container
      sx={{
        // border: "10px solid  red",
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
        // border={"10px solid blue"}
        width={"100%"}
        height={"100vh"}
        spacing={"60px"}
        paddingBottom={"237px"}
        padding={"0px"}
      >
        <Box
          border="10px solid green"
          borderRadius={{ sm: "0px 0px 32px 32px" }}
          width={"100%"}
          bgcolor={{ sm: "#633CFF" }}
          padding={{ xs: "16px", sm: "24px" }}
          height={{ sm: "357px" }}
          justifyItems={"center"}
        >
          <Stack
            sx={{
              justifyContent: "space-between",
              border: "10px solid red ",
              width: "768px",
              flexDirection: "row",
            }}
          >
            <Button
              variant="outlined"
              sx={{ background: "white", borderRadius: 8, color: "#633CFF" }}
            >
              Back to editor
            </Button>
            <Button
              variant="contained"
              sx={{ background: "@633CFF", borderRadius: 8, color: "white" }}
            >
              Share Link
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{ borderRadius: "8px", transform: "translate(-50%,-50%)" }}
          display={"flex"}
          height={"617px"}
          position={"absolute"}
          top={"calc(50% - 60px)"}
          left={"50%"}
          bgcolor={{ sm: "blue" }}
          width={{ sm: "349px" }}
          padding={{ sm: "48px 56px" }}
          marginTop={"-60px"}
          borderradius={{ sm: "24px" }}
          justifyContent={"center"}
          spacing={"56px"}
        >
          <Avatar sx={{ width: "104px", height: "104px" }}>sdfsdfsf</Avatar>
        </Box>
        <Box
          spacing={"20px"}
          display={"flex"}
          position={"center"}
          sx={{
            // spacing:"20px",
            width: "349px",
            flexDirection: "column",
            position: "column",
            border: "5px solid red",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            UNO
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            UNO
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            DOS
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            TRRES
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default Preview;
