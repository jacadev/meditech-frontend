import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanDetail,
  userProfileSettings,
} from "./../../../Redux/Actions/Actionslogin";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import DefaultAuth from "./../../../layouts/user/Default";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

import illustration from "../../../assets/img/fondos/Meditech.png";

const validate = (input) => {
  let error = {};

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(input.email)) {
    error.name = "The email is invalid.";
  }

  return error;
};

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.userInfo);
  const id = userInfo.id;
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = React.useState(false);
  const [input, setInput] = useState({
    user_name: "",
    email: "",
    password: "",
    phone: [],
  });

  const [error, setError] = useState({
    user_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    if (property === "phone") {
      const phoneArr = value.split(",").map((num) => {
        const trimmedNum = num.trim();
        return !isNaN(trimmedNum) && trimmedNum !== ""
          ? parseInt(trimmedNum, 10)
          : "";
      });
      setError(validate({ ...input, [property]: phoneArr }));
      setInput({ ...input, [property]: phoneArr });
    } else {
      setError(validate({ ...input, [property]: value }));
      setInput({ ...input, [property]: value });
    }
  };

  const handleClick = () => setShow(!show);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userProfileSettings(id, input));
    dispatch(cleanDetail());
    setInput({
      user_name: "",
      email: "",
      password: "",
    });
    alert("Datos actualizados correctamente");
    history.push("/admin/default");
  };

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <div>
          <div>
            <Box me="auto">
              <Heading color={textColor} fontSize="36px" mb="10px">
                Configuracion de Perfil
              </Heading>
            </Box>
            <form onSubmit={handleSubmit}>
              <div>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                >
                  <div>
                    <FormLabel
                      display="flex"
                      ms="4px"
                      fontSize="sm"
                      fontWeight="500"
                      color={textColor}
                      mb="8px"
                    >
                      Nombre de Usuario:<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                      isRequired={false}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      type="text"
                      value={input.user_name}
                      name="user_name"
                      placeholder=""
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div>
                    <FormLabel
                      display="flex"
                      ms="4px"
                      fontSize="sm"
                      fontWeight="500"
                      color={textColor}
                      mb="8px"
                    >
                      Correo Electronico<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                      isRequired={false}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      type="email"
                      value={input.email}
                      name="email"
                      placeholder="mail@simmmple.com"
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                    />
                    {error.email && <span>{error.email}</span>}
                  </div>
                </Flex>

                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                >
                  <div>
                    <FormLabel
                      display="flex"
                      ms="4px"
                      fontSize="sm"
                      fontWeight="500"
                      color={textColor}
                      mb="8px"
                    >
                      Telefono:<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                      isRequired={false}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      type="text"
                      value={input.phone}
                      name="phone"
                      placeholder="Ej: 3102332211, 3152221133, 321....."
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                    />
                    {error.phone && <span>{error.phone}</span>}
                  </div>

                  <div>
                    <FormLabel
                      display="flex"
                      ms="4px"
                      fontSize="sm"
                      fontWeight="500"
                      color={textColor}
                      mb="8px"
                    >
                      Contraseña:<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <InputGroup size="md">
                      <Input
                        isRequired={false}
                        variant="auth"
                        fontSize="sm"
                        ms={{ base: "0px", md: "0px" }}
                        type="password"
                        value={input.password}
                        name="password"
                        placeholder="Escribe tu contraseña...."
                        mb="24px"
                        fontWeight="500"
                        size="lg"
                        onChange={(e) => handleChange(e)}
                      />

                      <br />
                      <InputRightElement
                        display="flex"
                        alignItems="center"
                        mt="4px"
                      >
                        <Icon
                          color={textColorSecondary}
                          _hover={{ cursor: "pointer" }}
                          as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                          onClick={handleClick}
                        />
                      </InputRightElement>
                    </InputGroup>
                  </div>
                </Flex>
              </div>

              <div>
                <Button
                  fontSize="sm"
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  _hover={{ boxShadow: "xl" }}
                  _active={{ boxShadow: "lg" }}
                  borderRadius="md"
                >
                  Actualizar Perfil
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Flex>
    </DefaultAuth>
  );
};

export default ProfileSettings;
