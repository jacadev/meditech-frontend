import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdPerson,
  MdHome,
  MdMedicalServices,
  MdMedicalInformation,
  MdPaid,
  MdAssignmentAdd,
  MdGroups2,
  MdOutlineAddHomeWork
} from 'react-icons/md';

// Admin Imports
import Home from './Views/user/home/index';
import Services from './Views/user/services/index';
import About from './Views/user/about us/index';
import Staff from './Views/user/Staff/index';
import Reserve from './Views/user/Reserve/Reserve';
import singIn from './Views/user/Sing in';
import payment from './Views/user/payment';
import signup from './Views/user/Sing up/Index';

import paymentProcess from './Components/PaymentProcess/paymentProcess';
import Details from './Views/user/Deatails/detail';
import Homeadmin from "./Views/admin/Home/Index"
import createdoctor from "./Views/admin/Postdoctor/Create"
import indexdoctor from "./Views/admin/Postdoctor/Index"
import indexuser from "./Views/admin/listuser/index"
import ProfileSettings from './Views/user/ProfileSettings/index';
import ForgotPassword from './Views/user/ForgotPassword';
import InfoAppointment from './Components/infoAppointment/infoAppointment';
import ModifyPatient from './Components/ModifyPatient/ModifyPatient'
import Pays from './Components/Pays/index';
// Auth Imports
//import SignInCentered from "./views/auth/signIn";

const routes = [
  {
    name: 'Inicio',
    layout: '/user',
    path: '/home',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: Home,
  },
  {
    name: 'Servicios',
    layout: '/user',
    path: '/services',
    icon: (
      <Icon as={MdMedicalServices} width="20px" height="20px" color="inherit" />
    ),
    component: Services,
    secondary: true,
  },
  {
    name: 'Personal Medico',
    layout: '/user',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    path: '/staff',
    component: Staff,
  },
  {
    name: 'Quienes Somos',
    layout: '/user',
    path: '/about-us',
    icon: (
      <Icon
        as={MdMedicalInformation}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: About,
  },
  {
    layout: '/user/reserve',
    component: Reserve,
  },
  {

    layout: '/user/signin',
    component: singIn,
  },
  {
    layout: '/user/payment',
    component: payment,
  },
  {
    layout: '/user/signup',
    component: signup,
  },
  {
    layout: '/user/paymentprocess',
    component: paymentProcess,
  },
  {
    name: 'Detalles del Medico',
    layout: '/user/detail/:id',
    component: Details,
  },
  {
    layout: '/user/forgotpassword',
    component: ForgotPassword,
  },
  {
    layout: '/user/appointment',
    component: InfoAppointment,
  },
  {
    layout: '/user/profilesettings',
    component: ProfileSettings,
  },
  //----------------------------rutas de admin-------------------------
  {
    name: 'Inicio',
    layout: '/admin',
    path: '/home',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: Home,
  },
  {
    name: 'Servicios',
    layout: '/admin',
    path: '/services',
    icon: (
      <Icon as={MdMedicalServices} width="20px" height="20px" color="inherit" />
    ),
    component: Services,
    secondary: true,
  },
  {
    name: 'Personal Medico',
    layout: '/admin',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    path: '/staff',
    component: Staff,
  },
  {
    name: 'Quienes Somos',
    layout: '/admin',
    path: '/about-us',
    icon: (
      <Icon
        as={MdMedicalInformation}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: About,
  },
  {
    name:'Panel de Administrador',
    layout: '/admin',
    path: '/dashboard',
    icon: <Icon as={MdOutlineAddHomeWork} width="20px" height="20px" color="inherit" />,
    component: Homeadmin,
  },
  {
    name: 'Lista de Doctores',
    layout: '/admin',
    path: '/indexdoctor',
    icon: (
      <Icon
        as={MdAssignmentAdd}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: indexdoctor,
  },
  {
    name: 'Lista de Usuarios',
    layout: '/admin',
    path: '/indexuser',
    icon: (
      <Icon
        as={MdGroups2}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: indexuser,
  },
  {
    name: 'Informacion de Pagos',
    layout: '/admin',
    path: '/pays',
    icon: (
      <Icon
        as={MdPaid}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Pays,
  },
  {
    layout: '/admin/createdoctor',
    component: createdoctor,
  },

  {
    layout: '/admin/putPatient',
    component: ModifyPatient,
  },
  {
    layout: '/admin/reserve',
    component: Reserve,
  },
  {

    layout: '/admin/signin',
    component: singIn,
  },
  {
    layout: '/admin/payment',
    component: payment,
  },
  {
    layout: '/admin/signup',
    component: signup,
  },
  {
    layout: '/admin/paymentprocess',
    component: paymentProcess,
  },
  {
    name: 'Detalles del Medico',
    layout: '/admin/detail/:id',
    component: Details,
  },
  {
    layout: '/admin/forgotpassword',
    component: ForgotPassword,
  },
  {
    layout: '/admin/appointment',
    component: InfoAppointment,
  },
  {
    layout: '/admin/profilesettings',
    component: ProfileSettings,
  },
];

export default routes;
