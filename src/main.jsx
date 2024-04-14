import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource-variable/roboto-condensed";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RouterProvider>
  </React.StrictMode>
);
