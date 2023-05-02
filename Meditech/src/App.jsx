import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/admin";
import UserLayout from "./layouts/user";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme/themes";
import { useSelector } from 'react-redux';

function App() {
  const userInfo = useSelector((state) => state.userInfo);

  const isAdmin = userInfo?.rol === 3; // si rol es igual a 3, es admin. sino, es user

  console.log('info del login', userInfo);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <React.StrictMode>
        <HashRouter>
          <Switch>
            {isAdmin ? (
              <Route path={`/admin`} component={AdminLayout} />
            ) : (
              <Route path={`/user`} component={UserLayout} />
            )}
            {isAdmin ? (
              <Redirect from='/' to='/admin/homeadmin' />
            ): (
              <Redirect from='/' to='/user/home' />
            )}
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </ChakraProvider>
  )
}
export default App;
