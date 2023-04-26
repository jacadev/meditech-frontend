import React from "react";


import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdMedicalServices,
  MdMedicalInformation
} from "react-icons/md";

// Admin Imports
import Home from "./Views/user/home/index";
import Services from "./Views/user/services/index";
import About from "./Views/user/about us/index";
import Staff from "./Views/user/Staff/index";
import Reserve from "./Views/user/Reserve/Reserve"
import singIn from "./Views/user/Sing in";
import payment from "./Views/user/payment";
import signup from "./Views/user/Sing up/Index"
import Gallery from "./Components/GaleriaImg/Gallery"
import paymentProcess from "./Components/PaymentProcess/paymentProcess";
import Detail from "./Views/user/Deatails/detail";


// Auth Imports
//import SignInCentered from "./views/auth/signIn";

const routes = [
  {
    name: "Inicio",
    layout: "/user",
    path: "/home",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Home,
  },
  {
    name: "Servicios",
    layout: "/user",
    path: "/services",
    icon: (
      <Icon
        as={MdMedicalServices}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Services,
    secondary: true,
  },
  {
    name: "Personal Medico",
    layout: "/user",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/staff",
    component: Staff,
  },
  {
    name: "Quienes Somos",
    layout: "/user",
    path: "/about-us",
    icon: <Icon as={MdMedicalInformation} width='20px' height='20px' color='inherit' />,
    component: About,
  },
  {
  
    layout: "/user/reserve",
    component: Reserve,

  },
  {
    name: "Iniciar Sesión",
    layout: "/user",
    path: "/sing-in",
    icon: <Icon as={MdMedicalInformation} width='20px' height='20px' color='inherit' />,
    component: singIn,
  },
   {
    layout: "/user/payment",
    component: payment,
  },
  {
    layout: "/user/signup",
    component: signup,
  },
     {
    layout: "/user/paymentprocess",
    component: paymentProcess,
  },
  {
    name: 'Detalles del Medico',
    layout: "/user/detail/:id",
    component: Detail,
  },



];

export default routes;