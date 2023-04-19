import React from "react";


import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdMedicalServices,
  MdMedicalInformation
} from "react-icons/md";

// Admin Imports
import Home from "./Views/admin/home/index";
import Services from "./Views/admin/services/index";
import About from "./Views/admin/about us/index";
import Staff from "./Views/admin/Staff/index";
import Reserve from "./Views/admin/Reserve/Reserve"

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
];

export default routes;
