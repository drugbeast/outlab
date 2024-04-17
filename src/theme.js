import { createTheme } from "@mui/material/styles";
import FuturaPTBold from "./assets/fonts/FuturaPT-Bold.ttf";
import FuturaPTBoldObl from "./assets/fonts/FuturaPT-BoldObl.ttf";
import FuturaPTBook from "./assets/fonts/FuturaPT-Book.ttf";
import FuturaPTLight from "./assets/fonts/FuturaPT-Light.ttf";

let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    bgColor: theme.palette.augmentColor({
      color: {
        main: "#000000",
      },
    }),
    textColor: theme.palette.augmentColor({
      color: {
        main: "#ffffff",
      },
    }),
    accentColor: theme.palette.augmentColor({
      color: {
        main: "#5d1499",
      },
    }),
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          fontFamily: "Futura PT"
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "Futura PT";
        src: url(${FuturaPTBoldObl}) format('truetype');
        font-weight: 700;
        font-style: italic;
      }

      @font-face {
        font-family: "Futura PT";
        src: url(${FuturaPTBold}) format('truetype');
        font-weight: 700;
      }

      @font-face {
        font-family: "Futura PT";
        src: url(${FuturaPTBook}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: "Futura PT";
        src: url(${FuturaPTLight}) format('truetype');
        font-weight: 300;
      }
      `,
    },
  },
});

export { theme };
