import { Stack, Box, Typography, Button } from "@mui/material";

import { validationSchema } from "./form-fields";
import { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useLinks from "../../hooks/useLinks";
import _ from "lodash";

function AddlinkForm() {

    const { links, setLinks } = useLinks();

    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(validationSchema),
    });
  
    const { fields, append, prepend, remove } = useFieldArray({
      control,
      name: "links",
    });


  const onSubmit = (data) => {
    console.log(data);
 
  };

  return (
    <Stack marginTop={"30px"} spacing="40px">
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
          ></Stack>
          <Box>
            <Button
              type="submit"
              variant="contained"
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
  );
}

export default AddlinkForm;
