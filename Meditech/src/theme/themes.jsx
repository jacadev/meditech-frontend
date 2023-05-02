
/* import { CardComponent } from "./additions/card/card";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { inputStyles } from "./components/input";
import { progressStyles } from "./components/progress";
import { sliderStyles } from "./components/slider";
import { textareaStyles } from "./components/textarea";
import { switchStyles } from "./components/switch";
import { linkStyles } from "./components/link"; */
import { mode } from "@chakra-ui/theme-tools";
import { breakpoints } from "./foundations/breakpoints";
import { globalStyles } from "./styles";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      light: {
        primary: "#2E64FE",
        secondary: "#00BFFF",
      },
      dark: {
        primary: "#00BFFF",
        secondary: "#2E64FE",
      },
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    stlyes: {
      global: globalStyles,
    }
  },
  { breakpoints }, // Breakpoints

);


export default theme;
