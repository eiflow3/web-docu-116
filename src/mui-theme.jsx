// Supports weights 100-900
import "@fontsource-variable/hepta-slab";
// Supports weights 200-900
import "@fontsource-variable/source-code-pro";
import { createTheme, ThemeProvider } from "@mui/material";

const colors = {
  primary: "#E7473C",
  secondary: "#000",
  bg: "#F0F0F0",
};

export default function ThemeProviderWrapper({ children }) {
  const theme = createTheme({
    typography: {
      one: {
        fontSize: ".8rem",
      },
      two: {
        fontSize: "1rem",
      },
      three: {
        fontSize: "1.2rem",
        fontWeight: 500,
      },
      four: {
        fontSize: "1.4rem",
        fontWeight: 600,
      },
      five: {
        fontSize: "1.8rem",
        fontWeight: 700,
      },
      six: {
        fontSize: "2rem",
      },
      seven: {
        fontSize: "2.2rem",
      },
      eight: {
        fontSize: "2.4rem",
        fontWeight: 800,
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Source Code Pro Variable",
          },
        },
      },
      defaultProps: {
        variantMapping: {
          one: "span",
          two: "span",
          three: "span",
          four: "p",
          five: "h4",
          six: "h3",
          seven: "h2",
          eight: "h1",
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
