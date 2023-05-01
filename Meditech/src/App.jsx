import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { ChakraProvider, ColorModeProvider, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import theme from "./theme/themes";
import AdminLayout from "./layouts/admin";
import UserLayout from "./layouts/user";
import { useDispatch, useSelector } from "react-redux";

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      variant="ghost"
    />
  );
}

function App() {
  const userInfo1 = useSelector((state) => state.userInfo);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: false,
        }}
      >
        <HashRouter>
          <Switch>
           
            <Route path={`/user`} component={UserLayout} />
            <Redirect from="/" to="/user" />
          </Switch>
        </HashRouter>
        <DarkModeToggle />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;