import {
  Stack,
  Typography,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";

import { validationSchema, allowedPlatforms } from "./form-fields";
import { useEffect } from "react";
import NoLinksPage from "./NoLinksPage";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import fieldLib from "../../Form/fields";
import useLinks from "../../hooks/useLinks";

import _ from "lodash";

import linksService from "../../services/links-services";

// No uso form reutilizable pero si los campos
const { input: InputField, select: SelectField } = fieldLib;

function LinksPage() {
  // Traigo el array de links del usuario ({platform, link})
  const { links, loading, setLinks } = useLinks();

  // Engancho useForm para el estado del formulario
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Engancho useFieldArray para extender el comportamiento de useForm para que gestione el estado de un array dinámico de campos
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: "links",
  });

  // Confirguro un useEffect para que en el re-render que hace cuando recibe los links de la api, actualice con el metodo `update` que saca de useFieldArray, los campos que debe mostrar con los valores correspondientes.
  useEffect(() => {
    links.forEach((value, index) => {
      update(index, {
        platform: value.platform,
        link: value.link,
        id: value._id,
      });
    });
  }, [links, update]);

  // AL HACER SUBMIT RECIBE LA DATA NUEVA CUMPLIMENTADA

  const onSubmit = (data) => {
    const formLinks = data.links;
    const databaseLinks = links;

    const linksToUpdate = _.intersectionWith(
      formLinks,
      databaseLinks,
      (formLink, databaseLink) => formLink.id === databaseLink._id
    );

    const linksToCreate = _.differenceWith(
      formLinks,
      databaseLinks,
      (formLink, databaseLink) => formLink.id === databaseLink._id
    );
    const linksToDelete = _.differenceWith(
      databaseLinks,
      formLinks,
      (databaseLink, formLink) => formLink.id === databaseLink._id
    );

    console.log("FORM", formLinks);
    console.log("DATABASE", databaseLinks);

    console.log("linksToUpdate:", linksToUpdate);
    console.log("linksToCreate:", linksToCreate);
    console.log("linksToDelete", linksToDelete);

    linksToUpdate.forEach((updatedLink) =>
      linksService.update(updatedLink, updatedLink.id)
    );

    linksToCreate.forEach((newLink) => linksService.create(newLink));

    linksToDelete.forEach((deletedLink) =>
      linksService.delete(deletedLink._id)
    );
  };

  return (
    <Stack spacing="40px">
      <Box>
        <Typography
          variant="h1"
          fontFamily={"Instrument Sans"}
          color={"#333"}
          fontSize={"32px"}
          fontWeight={"700"}
          lineheight={"150%"}
        >
          Customize your links
        </Typography>
        <Typography
          fontFamily={"Instrument Sans<"}
          fontSize={"16px"}
          color={"#737373"}
        >
          Add/edit/remove links below and then share all your profiles with the
          world!
        </Typography>
      </Box>

      <Box spacing={"20px"} sx={{ backgroundColor: "#FAFAFA" }}>
        <Button
          variant="outlined"
          onClick={() => {
            append({ platform: "", link: "" });
          }}
          sx={{ border: "solid #633CFF", color: "#633CFF", width: "100%" }}
        >
          ADD NEW LINK
        </Button>
        {loading ? (
          <CircularProgress />
        ) : !_.isEmpty(fields) || !_.isEmpty(links) ? (
          <Stack marginTop={"50px"} spacing="40px">
            <Box>
              <form
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
                noValidate
              >
                <Stack
                  spacing={"24px"}
                  sx={{
                    "& > :not(style)": { m: 1 },
                  }}
                >
                  {fields.map((item, index) => (
                    <div key={item.id}>
                      <Controller
                        render={({ field: { ref, ...field } }) => (
                          <SelectField
                            placeholder="Elije una plataforma"
                            {...field}
                            options={allowedPlatforms}
                            errors={errors.links?.[index]?.platform}
                          />
                        )}
                        name={`links.${index}.platform`}
                        control={control}
                      />
                      <Controller
                        render={({ field: { ref, ...field } }) => (
                          <InputField
                            {...field}
                            errors={errors.links?.[index]?.link}
                          />
                        )}
                        name={`links.${index}.link`}
                        control={control}
                      />
                      <Button
                        variant="outlined"
                        sx={{ color: "#633CFF", marginLeft: "10px" }}
                        onClick={() => remove(index)}
                      >
                        delete
                      </Button>
                    </div>
                  ))}
                </Stack>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    onSubmit={onSubmit}
                    sx={{
                      background: "#633CFF",
                      borderRadius: "8px",
                      mt: "24px",
                      width: "100%",
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </form>
            </Box>
          </Stack>
        ) : (
          <NoLinksPage />
        )}
      </Box>
    </Stack>
  );
}

export default LinksPage;
