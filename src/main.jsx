import "@fontsource-variable/roboto-condensed";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { theme } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
