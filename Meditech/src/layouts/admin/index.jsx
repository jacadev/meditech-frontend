// Chakra imports
import { Portal, Box} from "@chakra-ui/react";
import Footer from "../../Components/footer/FooterUser"
// Layout components
import Navbar from "../../Components/navbar/NavbarAdmin.jsx";
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import { SidebarContext } from "../../contexts/SidebarContext.js";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes.jsx";

// Custom Chakra theme
function Admin(props) {
  const { ...rest } = props;
  // states and functions

  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components

  const getRoute = () => {
    return window.location.pathname !== "/admin/home";
  };

  const getActiveRoute = (routes) => {
    
    for (let i = 0; i < routes.length; i++) {
    
         if( window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1){

          return routes[i].name;
        }
      }
    }
    
  
    const getRoutes = (routes) => {
      return routes.map((prop, key) => {
        const { layout, path, component } = prop;
        switch (layout) {
          case "/admin":
            return (
              <Route
              path={layout + path}
              component={component}
              key={key}
              />
            );
          // case "/user/detail/:id":
          // case "/user/reserve":
          // case "/user/payment":
          // case "/user/signup":
          // case "/user/paymentprocess":
          // case "/user/profilesettings":
          // case "/user/signin":
          // case "/user/forgotpassword":
          // case "/user/appointment":
          case "/admin/putPatient":
            return (
              <Route
                path={layout}
                component={component}
                key={key}
              />
            );
          default:
            return null;
        }
      });
    };
 
 
  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}>
        {/* <Sidebar routes={routes} display='none' {...rest} /> */}
        <Box
          float='right'
          minHeight='100vh'
          height='100%'
          overflow='auto'
          position='relative'
          maxHeight='100%'
          w={{ base: "100%", xl: "calc( 100% - 290px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
          transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
          transitionDuration='.2s, .2s, .35s'
          transitionProperty='top, bottom, width'
          transitionTimingFunction='linear, linear, ease'>
          <Portal> 
            <Box>
              <Navbar
              brandText={getActiveRoute(routes)}/>
              {/* esta es el header de cada componente y renderizo el tirulo de cada uno */}
            </Box>
          </Portal>

          {getRoute() ? (/* aca renderizo el componente de cada ruta cumpliendo una condicion para saber donde esta parada mi ruta y renderizo esta misma */
            <Box
              mx='auto'
              p={{ base: "20px", md: "30px" }}
              pe='20px'
              minH='100vh'
              pt='50px'>
              <Switch>
                {getRoutes(routes)}
              </Switch>
            </Box>
          ) : null}
          <Box>
            <Footer />
          </Box>
        </Box>
        </SidebarContext.Provider>
        </Box>
  );
}
export default Admin;