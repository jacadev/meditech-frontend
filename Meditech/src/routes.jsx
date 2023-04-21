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
import ReviewForm from "./Components/Review/ReviewForm";
import ReviewList from "./Components/Review/ReviewList";

// Auth Imports
//import SignInCentered from "./views/auth/signIn";

const routes = [
  {
    name: "Home",
    layout: "/user",
    path: "/home",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Home,
  },
  {
    name: "Services",
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
    name: "Staff",
    layout: "/user",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/staff",
    component: Staff,
  },
  {
    name: "About us",
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
    name: "Sing in",
    layout: "/user",
    path: "/sing-in",
    icon: <Icon as={MdMedicalInformation} width='20px' height='20px' color='inherit' />,
    component: singIn,
  },
 /*  {
    layout: "/user/sing-in",
    component: singIn,
  } */
];

export default routes;