import { Container, Stack, Box } from "@mui/material";

function Preview() {
  return (
    <Container
      sx={{
        border: "solid 1px red",
        direction: "column",
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
     padding:{xs:"0px", sm:"0px"} 
      }}
    >
      <Stack border={"1px solid blue"}
      width={"100%"}
      height={"100vh"}
      spacing={"60px"}
      paddingBottom={"237px"}
      padding={"0px"}>

        <Box bgcolor="green"
        padding={{xs:"16px", sm:"24"}}>
          <div>navbar</div>
        </Box>

        <Box bgcolor="blue">
          <div>mobile
            kasdjlaskjdlaskjdasdjalskjdsakjda
            sadkjsakdasdjalksjdlaksjdasdj
            asdjlasdjlaskjdlasjdlasjdlaskjdl
            lsdklasjdlaksjdlkasjdlksajdlskajdlaskjd
            asd
            
         </div>
        </Box>
      </Stack>
    </Container>
  );
}

export default Preview;
