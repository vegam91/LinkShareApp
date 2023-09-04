import { Button, Typography, Box, Stack } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { transformData } from "./helper";

import fields from "./fields";

const Form = ({
  heading,
  subheading,
  formFields,
  buttonLabel,
  onSubmit,
  validationSchema,
  defaultValues,
}) => {
  const {
    handleSubmit,
    control,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      noValidate
    >
      <Box mb="40px">
        <Typography
          variant="h1"
          gutterBottom
          fontWeight={"700"}
          fontFamily={"Instrument Sans"}
          align="left"
          fontSize={"32px"}
        >
          {heading}
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          fontSize={"16px"}
          fontFamily={"instrument Sans"}
          color="#737373"
        >
          {subheading}
        </Typography>
      </Box>

      <Stack
        spacing={"24px"}
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        {formFields.map(({ name, ...rest }) => {
          const InputForm = fields[rest.type] || fields.input;

          if (rest.type === "file") rest = { ...rest, setValue, clearErrors };
          console.log();
          return (
            <Controller
              key={name}
              control={control}
              name={name}
              render={({ field: { ref, ...field } }) => {
                return (
                  <InputForm
                    errors={errors[name]}
                    name={name}
                    {...rest}
                    {...field}
                  />
                );
              }}
            />
          );
        })}
      </Stack>
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
          {buttonLabel}
        </Button>
      </Box>
    </form>
  );
};

export default Form;
