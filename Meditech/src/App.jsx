import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import AboutUs from "./Views/AboutUs/AboutUs";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/user`} component={AdminLayout} />
            <Route path={`/AboutUs`} component={AboutUs} />
            <Redirect from='/' to='/user' />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>
  
);
export default App
