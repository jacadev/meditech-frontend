// Chakra Imports
import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

// Custom Component
import { SidebarResponsive } from "./../sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";
// Assets
import routes from "./../../routes";
import { cleanDetail } from "../../Redux/Actions/Actionslogin";
import { useDispatch, useSelector } from "react-redux";

function HeaderLinks(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    history.push("/user/profilesettings");
  }

  function handleClickAppointment() {
    history.push("/user/appointment");
  }

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userImage");
    dispatch(cleanDetail());
    history.push("/");
  };

  const userImage = localStorage.getItem("userImage");
  const { secondary } = props;
  // Chakra Color Mode
  const userInfo1 = useSelector((state) => state.userInfo);
  localStorage.setItem("userInfo", JSON.stringify(userInfo1));
  let menuBg = useColorModeValue("white", "navy.800");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("#E6ECFA", "rgba(135, 140, 189, 0.3)");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );

  return (
    <Flex
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
      bg={menuBg}
      flexWrap={secondary ? { base: "wrap", md: "nowrap" } : "unset"}
      p="10px"
      borderRadius="30px"
      boxShadow={shadow}
    >
      <SidebarResponsive routes={routes} />

      {userInfo1.id && (
        <Menu>
          <MenuButton p="0px">
            <Avatar
              _hover={{ cursor: "pointer" }}
              name={userInfo1.user_name}
              src={userImage}
              bg="blue"
              size="sm"
              w="40px"
              h="40px"
              color="white"
            />
          </MenuButton>
          <MenuList
            boxShadow={shadow}
            p="0px"
            mt="10px"
            borderRadius="20px"
            bg={menuBg}
            border="none"
          >
            <Flex w="100%" mb="0px">
              <Text
                ps="20px"
                pt="16px"
                pb="10px"
                w="100%"
                borderBottom="1px solid"
                borderColor={borderColor}
                fontSize="sm"
                fontWeight="700"
                color={textColor}
              >
                👋&nbsp; Hola {userInfo1.user_name}
              </Text>
            </Flex>
            <Flex flexDirection="column" p="10px">
              {userInfo1.id && userInfo1.rol !== 3 && (
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                  onClick={handleClick}
                >
                  <Text fontSize="sm">Configuracion de Perfil</Text>
                </MenuItem>
              )}
              {userInfo1.id && userInfo1.rol !== 3 && (
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  borderRadius="8px"
                  px="14px"
                  onClick={handleClickAppointment}
                >
                  <Text fontSize="sm">Ver citas</Text>
                </MenuItem>
              )}
              <MenuItem
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                color="red.400"
                borderRadius="8px"
                px="14px"
                onClick={handleLogout}
              >
                <Text fontSize="sm">Cerrar sesión</Text>
              </MenuItem>
            </Flex>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};

export default HeaderLinks;
