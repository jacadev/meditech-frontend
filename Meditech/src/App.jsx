import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/admin";
import UserLayout from "./layouts/user";
import { ChakraProvider,ColorModeScript  } from "@chakra-ui/react";
import theme from "./theme/themes";

import ReviewForm from "./Components/Review/ReviewForm";
import ReviewList from "./Components/Review/ReviewList";

function App() {
return(
  <ChakraProvider theme={theme}>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
    
        <HashRouter>
          <Switch>
            <Route path={`/auth`} component={AdminLayout} />
            <Route path={`/user`} component={UserLayout} />
            <Redirect from='/' to='/user' />
          </Switch>
        </HashRouter>
     
    </React.StrictMode>
  </ChakraProvider>
  
);
}
export default App
