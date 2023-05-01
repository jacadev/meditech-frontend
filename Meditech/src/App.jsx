import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
//import AdminLayout from "./layouts/admin";
import UserLayout from "./layouts/user";
import { ChakraProvider,ColorModeScript  } from "@chakra-ui/react";
import theme from "./theme/themes";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const userInfo1 = useSelector((state) => state.userInfo);
return(
  <ChakraProvider theme={theme}>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
    
        <HashRouter>
          <Switch>
           
            <Route path={`/user`} component={UserLayout} />
            <Redirect from='/' to='/user' />
          </Switch>
        </HashRouter>
     
    </React.StrictMode>
  </ChakraProvider>
  
);
}
export default App;
