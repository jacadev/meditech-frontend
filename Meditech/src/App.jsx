import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/admin";
import UserLayout from "./layouts/user";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import ReviewForm from "./Components/Review/ReviewForm";

function App() {
return(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AdminLayout} />
            <Route path={`/user`} component={UserLayout} />
            <Route path={`/reviews`} component={ReviewForm} />
            <Redirect from='/' to='/user' />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>
  
);
}
export default App
