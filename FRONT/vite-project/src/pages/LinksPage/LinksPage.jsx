import { Stack, Typography, Box, Button } from "@mui/material";

import { validationSchema, allowedPlatforms } from "./form-fields";
import { useEffect } from "react";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import fieldLib from "../../Form/fields";
import useLinks from "../../hooks/useLinks";
import _ from "lodash";

// No uso form reutilizable pero si los campos
const { input: InputField, select: SelectField } = fieldLib;

function AddLinksPage() {
  // Traigo el array de links del usuario ({platform, link})
  const { links, setLinks } = useLinks();

  // Engancho useForm para el estado del formulario
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Engancho useFieldArray para extender el comportamiento de useForm para que gestione el estado de un array dinámico de campos
  const { fields, append, update } = useFieldArray({
    control,
    name: "links",
  });

  // Confirguro un useEffect para que en el re-render que hace cuando recibe los links de la api, actualice con el metodo `update` que saca de useFieldArray, los campos que debe mostrar con los valores correspondientes.
  useEffect(() => {
    links.forEach((value, index) => {
      update(index, {
        platform: value.platform,
        link: value.link,
      });
    });
  }, [links, update]);

  // AL HACER SUBMIT RECIBE LA DATA NUEVA CUMPLIMENTADA
  const onSubmit = (data) => {
    console.log("DASDSADDSA", data);
    // AQUI LA LOGICA QUE ACTUALZIA LOS CAMBIOS RECIBIDOS EN LA BASE DE DATOS
  };

  return (
    <Stack spacing="40px">
      <Box>
        <>
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
        </>

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
        <Button
          variant="outlined"
          onClick={() => {
            append({ platform: "", link: "" });
          }}
          sx={{ border: "solid #633CFF", color: "#633CFF", width: "100%" }}
        >
          ADD NEW LINK
        </Button>

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
                  </div>
                ))}
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
                  Save
                </Button>
              </Box>
            </form>
          </Box>
        </Stack>
      </Box>

      {/* {links.length ? <AddLinksPage/> : */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        sx={{ width: "601px", height: "344px" }}
        alignItems={"center"}
      >
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="251"
            height="161"
            viewBox="0 0 251 161"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M49.1933 15.4213C23.8784 25.2238 5.09338 50.0679 1.35764 80.1285C-1.76307 105.459 5.69322 133.446 49.5881 141.419C134.994 156.939 223.034 158.754 243.452 116.894C263.869 75.0336 235.927 8.00293 192.579 3.36363C158.183 -0.326546 98.6463 -3.7206 49.1933 15.4213Z"
              fill="white"
            />
            <path
              d="M157.522 9.56689H93.5438C89.5306 9.56689 86.2773 12.8202 86.2773 16.8334V137.744C86.2773 141.757 89.5306 145.01 93.5438 145.01H157.522C161.535 145.01 164.789 141.757 164.789 137.744V16.8334C164.789 12.8202 161.535 9.56689 157.522 9.56689Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M125.533 140.872C128.674 140.872 131.22 138.326 131.22 135.185C131.22 132.044 128.674 129.498 125.533 129.498C122.392 129.498 119.846 132.044 119.846 135.185C119.846 138.326 122.392 140.872 125.533 140.872Z"
              fill="#333333"
            />
            <path
              d="M157.127 21.3208H93.9312V126.779H157.127V21.3208Z"
              fill="#EFEBFF"
            />
            <path
              opacity="0.03"
              d="M118.297 120.508C119.437 120.508 120.362 119.583 120.362 118.443C120.362 117.302 119.437 116.377 118.297 116.377C117.156 116.377 116.231 117.302 116.231 118.443C116.231 119.583 117.156 120.508 118.297 120.508Z"
              fill="#333333"
            />
            <path
              opacity="0.44"
              d="M125.533 120.508C126.674 120.508 127.598 119.583 127.598 118.443C127.598 117.302 126.674 116.377 125.533 116.377C124.392 116.377 123.468 117.302 123.468 118.443C123.468 119.583 124.392 120.508 125.533 120.508Z"
              fill="white"
            />
            <path
              opacity="0.03"
              d="M132.769 120.508C133.91 120.508 134.834 119.583 134.834 118.443C134.834 117.302 133.91 116.377 132.769 116.377C131.628 116.377 130.704 117.302 130.704 118.443C130.704 119.583 131.628 120.508 132.769 120.508Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M148.699 32.9531H102.367V72.5049H148.699V32.9531Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M134.872 80.1284H102.367V83.7503H134.872V80.1284Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M148.699 80.1284H137.067V83.7503H148.699V80.1284Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M117.553 91.2368H102.367V94.8587H117.553V91.2368Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M148.699 91.2368H120.78V94.8587H148.699V91.2368Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M137.454 102.353H102.367V105.975H137.454V102.353Z"
              fill="#333333"
            />
            <path
              d="M79.1552 21.3208H15.959V126.779H79.1552V21.3208Z"
              fill="#EFEBFF"
            />
            <path
              opacity="0.44"
              d="M40.3246 120.508C41.4652 120.508 42.3899 119.583 42.3899 118.443C42.3899 117.302 41.4652 116.377 40.3246 116.377C39.1839 116.377 38.2593 117.302 38.2593 118.443C38.2593 119.583 39.1839 120.508 40.3246 120.508Z"
              fill="white"
            />
            <path
              opacity="0.03"
              d="M47.5609 120.508C48.7015 120.508 49.6262 119.583 49.6262 118.443C49.6262 117.302 48.7015 116.377 47.5609 116.377C46.4203 116.377 45.4956 117.302 45.4956 118.443C45.4956 119.583 46.4203 120.508 47.5609 120.508Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M54.7967 120.508C55.9374 120.508 56.862 119.583 56.862 118.443C56.862 117.302 55.9374 116.377 54.7967 116.377C53.6561 116.377 52.7314 117.302 52.7314 118.443C52.7314 119.583 53.6561 120.508 54.7967 120.508Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M70.7268 32.9531H24.3945V72.5049H70.7268V32.9531Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M56.9 80.1284H24.3945V83.7503H56.9V80.1284Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M70.7271 80.1284H59.0947V83.7503H70.7271V80.1284Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M39.5805 91.2368H24.3945V94.8587H39.5805V91.2368Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M70.7269 91.2368H42.8076V94.8587H70.7269V91.2368Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M59.4816 102.353H24.3945V105.975H59.4816V102.353Z"
              fill="#333333"
            />
            <path
              d="M235.1 21.3208H171.903V126.779H235.1V21.3208Z"
              fill="#EFEBFF"
            />
            <path
              opacity="0.03"
              d="M196.269 120.508C197.41 120.508 198.334 119.583 198.334 118.443C198.334 117.302 197.41 116.377 196.269 116.377C195.128 116.377 194.204 117.302 194.204 118.443C194.204 119.583 195.128 120.508 196.269 120.508Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M203.505 120.508C204.645 120.508 205.57 119.583 205.57 118.443C205.57 117.302 204.645 116.377 203.505 116.377C202.364 116.377 201.439 117.302 201.439 118.443C201.439 119.583 202.364 120.508 203.505 120.508Z"
              fill="#333333"
            />
            <path
              opacity="0.44"
              d="M210.741 120.508C211.882 120.508 212.806 119.583 212.806 118.443C212.806 117.302 211.882 116.377 210.741 116.377C209.6 116.377 208.676 117.302 208.676 118.443C208.676 119.583 209.6 120.508 210.741 120.508Z"
              fill="white"
            />
            <path
              opacity="0.03"
              d="M226.671 32.9531H180.339V72.5049H226.671V32.9531Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M212.844 80.1284H180.339V83.7503H212.844V80.1284Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M226.671 80.1284H215.039V83.7503H226.671V80.1284Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M195.525 91.2368H180.339V94.8587H195.525V91.2368Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M226.679 91.2368H198.76V94.8587H226.679V91.2368Z"
              fill="#333333"
            />
            <path
              opacity="0.03"
              d="M215.426 102.353H180.339V105.975H215.426V102.353Z"
              fill="#333333"
            />
            <path
              opacity="0.1"
              d="M147.097 145.041C147.097 144.281 145.487 113.15 146.52 108.518C147.553 103.887 157.029 81.2445 154.53 78.6022C152.032 75.9598 142.883 81.9735 142.883 81.9735C142.883 81.9735 144.553 54.7071 140.605 52.7633C136.657 50.8195 134.903 58.4353 134.903 58.4353L132.799 88.9362L122.382 144.896L147.097 145.041Z"
              fill="#333333"
            />
            <path
              d="M140.058 113.295C141.387 107.98 143.384 102.794 144.66 97.4253C145.503 93.8718 150.954 79.02 152.48 74.6465C152.951 73.3025 153.354 71.6776 152.442 70.5842C152.135 70.2645 151.752 70.0274 151.329 69.8947C150.905 69.762 150.455 69.738 150.02 69.8249C149.143 70.0081 148.333 70.4313 147.682 71.0474C146.163 72.3838 143.361 78.9972 141.311 78.9896C138.828 78.9896 139.998 72.156 139.929 70.8424C139.648 65.1856 140.066 57.9343 137.856 52.6193C136.216 48.6709 132.146 49.2024 131.19 53.4697C130.233 57.7369 130.271 75.6184 130.271 75.6184C130.271 75.6184 114.387 72.8925 111.676 77.7368C108.965 82.5811 113.544 113.355 113.544 113.355L140.058 113.295Z"
              fill="#F4A28C"
            />
            <path
              d="M141.994 160.5L141.706 111.594L112.025 105.079L100.074 160.5H141.994Z"
              fill="#633CFF"
            />
            <path
              opacity="0.1"
              d="M141.995 160.5L141.706 111.594L127.538 108.48L125.001 160.5H141.995Z"
              fill="#333333"
            />
          </svg>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          spacing={"24px"}
          sx={{ width: "488px", height: "144px" }}
        >
          <Box></Box>
          <Box>
            <Typography
              fontFamily={"Instrument Sans"}
              fontSize={"32px"}
              color={"#333333"}
              fontWeight={"700"}
            >
              Let’s get you started
            </Typography>
          </Box>
          <Box>
            <Typography
              fontFamily={"Instrument Sans"}
              fontSize={"16px"}
              color={"#737373"}
              fontWeight={"700"}
            >
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* } */}
      {/* -----------hastaaqui */}
    </Stack>
  );
}

export default AddLinksPage;
