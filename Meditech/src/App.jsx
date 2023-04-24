import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "./layouts/admin";
import UserLayout from "./layouts/user";
import { ChakraProvider,ColorModeScript  } from "@chakra-ui/react";
import theme from "./theme/themes";
import { useSelector } from "react-redux";
import DoctorCard from "./Components/DoctorDetail/DoctorCard";
import DoctorCards from "./Components/DoctorDetail/DoctorCards";
function App() {
  const userInfo1 = useSelector((state) => state.userInfo);
    return (
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <React.StrictMode>
          <HashRouter>
            <Switch>
              <Route path="/auth" component={AdminLayout} />
              <Route path="/user" component={UserLayout} />
              <Route path="/doctors/:id" exact component={DoctorCards} />
              <Route path="/doctors" exact component={DoctorCards} />
              <Redirect to="/" />
            </Switch>
          </HashRouter>
        </React.StrictMode>
      </ChakraProvider>
    );
  }
  
  export default App;
