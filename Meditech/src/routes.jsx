import React from "react";


import { Icon } from "@chakra-ui/react";
import {
  MdPerson,
  MdHome,
  MdMedicalServices,
  MdMedicalInformation
} from "react-icons/md";

// Admin Imports
import MainDashboard from "./views/admin/default";
import Marketplace from "./Views/admin/marketplace/index";
import Profile from "./views/admin/profile";
import DataTables from "./views/admin/dataTables";

// Auth Imports
//import SignInCentered from "./views/auth/signIn";

const routes = [
  {
    name: "Home",
    layout: "/user",
    path: "/home",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
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
    component: Marketplace,
    secondary: true,
  },
  {
    name: "Staff",
    layout: "/user",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    path: "/staff",
    component: DataTables,
  },
  {
    name: "About us",
    layout: "/user",
    path: "/about-us",
    icon: <Icon as={MdMedicalInformation} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  //   component: SignInCentered,
  // },
];

export default routes;
