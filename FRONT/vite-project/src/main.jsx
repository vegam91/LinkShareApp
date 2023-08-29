import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalStyles from "@mui/material/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles
      styles={{
        html: {
          boxSizing: "border-box",
        },
        "*, *:before, *:after": {
          boxSizing: "inherit",
        },

        "html, body": { margin: 0, padding: 0 },
      }}
    />
    <RouterProvider router={router} />
  </>
);
