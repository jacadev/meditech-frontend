import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { ChakraProvider, ColorModeProvider, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import theme from "./theme/themes";
// import AdminLayout from "./layouts/admin";
import UserLayout from "./layouts/user";
import { useSelector } from "react-redux";

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
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;