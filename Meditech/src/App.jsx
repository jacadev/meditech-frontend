import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import theme from "./theme/themes";
// import AdminLayout from "./layouts/admin";
import UserLayout from "./layouts/user";
import { ChakraProvider,ColorModeScript  } from "@chakra-ui/react";
import theme from "./theme/themes";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const userInfo = useSelector((state) => state.userInfo);

  const isAdmin = userInfo?.rol === 3; // si rol es igual a 3, es admin. sino, es user

  console.log('info del login', userInfo);

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