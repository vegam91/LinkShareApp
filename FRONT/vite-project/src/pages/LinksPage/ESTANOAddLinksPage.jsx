import { useState, useEffect } from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import { getFormFields, validationSchema } from "./form-fields";
import useLinks from "../../hooks/useLinks";
import linksService from "../../services/links-services";
import Form from "../../Form";
import _ from "lodash";

function AddLinksPage() {
  const [newLink, setNewLink] = useState({});

  const { links, setLinks } = useLinks();

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await linksService.getAll();
        setLinks(response);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };

    fetchLinks();
  }, [setLinks]);

  // console.log(links);
  console.log("SEST");
  // const fakeLinksFROMDB = [
  //   {
  //     _id: "234123",
  //     platform: "GitHub",
  //     link: "http://github.com/bla",
  //   },
  //   {
  //     _id: "234143",
  //     platform: "GitHub",
  //     link: "http://github.com/bla",
  //   },
  //   {
  //     _id: "234127",
  //     platform: "GitHub",
  //     link: "http://github.com/bla",
  //   },
  //   {
  //     _id: "2341266",
  //     platform: "GitHub",
  //     link: "http://github.com/bla",
  //   },
  // ];

  // if (!_.isEmpty(newLink)) {
  //   fakeLinksFROMDB.push(newLink);
  // }

  const handleNewLink = () => {
    if (!_.isEmpty(newLink)) return;

    setNewLink({
      id: "new",
      platform: "",
      link: "",
    });
  };

  const onSubmit = (data) => {
    const transformData = [];

    for (const prop in data) {
      const id = prop.split("-")[2];
      const index = prop.split("-")[1];
      const field = prop.split("-")[0];

      transformData[index] = {
        ...transformData[index],
        [field]: data[prop],
        id,
      };
    }

    console.log("VAMOS", transformData);

    // transformData.forEach((linkFields) => {
    //   if (linkFields.id === "new") {
    //     createNewLink(linkFields).then((newLink) => {
    //       setLinks([...links, newLink]);
    //       setNewLink({});
    //     });
    //   } else {
    //     updateLink(linkFields).then((updatedLink) => {
    //       const updatedLinks = links.map((link) =>
    //         link._id === updatedLink._id ? updatedLink : link
    //       );
    //       setLinks(updatedLinks);
    //     });
    //   }
    // });
  };
  // const createNewLink = async (linkFields) => {
  //   try {
  //     const response = await linksService.createLink(linkFields);
  //     return response;
  //   } catch (error) {
  //     console.error("Error creating link:", error);
  //     throw error;
  //   }
  // };
  // const updateLink = async (linkFields) => {
  //   try {
  //     const response = await linksService.updateLink(linkFields.id, linkFields);
  //     return response;
  //   } catch (error) {
  //     console.error("Error updating link:", error);
  //     throw error;
  //   }
  // };
  // console.log(linkFields, "AQUI HABRÁ QUE HACER UN PUT");

  // En el then si todo va bien puedes usar el setLinks que te da el hook para agregar el documento que te devuelva el post
  // Y seteas el setNewLink a {}

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
      <Box spacing={"20px"} sx={{ backgroundColor: "#FAFAFA" }}>
        <Box>
          <Button
            variant="outlined"
            sx={{ border: "solid #633CFF", color: "#633CFF", width: "100%" }}
            onClick={handleNewLink}
          >
            ADD NEW LINK
          </Button>
        </Box>
        <Typography fontFamily={"Instrument Sans"}>Platform</Typography>
        <Box>
          <Form
            heading="New Link"
            buttonLabel="Add Link"
            formFields={getFormFields(links)}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          />
        </Box>
      </Box>
    </Stack>
  );
}

export default AddLinksPage;
