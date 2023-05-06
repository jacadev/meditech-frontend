import React from "react";
import { useHistory } from "react-router-dom";
// Chakra imports
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Divider,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import DefaultAuth from "./../../../layouts/user/Default";
// Assets
import illustration from "../../../assets/img/fondos/Meditech.gif";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "./../../../Redux/Actions/Actionslogin";
import { useState } from "react";

function SignInForgot({ isOpen, onClose }) {
  const history = useHistory();
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const success = useSelector((state) => state.success);
  const [input, setInput] = React.useState({
    email: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setInput({ ...input, [property]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(forgotPassword(input.email));
    setInput({ email: "" });

    setShowModal(true);
  }; /* else{
      setIsModalOpen2(true)
    }
       */

  const handleModalClose = () => {
    setShowModal(false);
    history.push("/user/forgotpassword");
  };
  /* const handleModalClose2 = () => {
    setIsModalOpen2(false);
    /* setInput({ email: '' }); 
  
    history.push('/user/signin');
  }; */

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Box
        borderRadius="10px"
        marginTop="200px"
        marginRight="auto"
        boxShadow="lg"
      >
        <Flex alignItems="start" justifyContent="center" flexDirection="column">
          <Box me="auto">
            <Heading color={textColor} fontSize="26px" mb="30px">
              Solicitud Recuperacion Contraseña
            </Heading>
          </Box>
          <Flex
            mb="30px"
            zIndex="2"
            direction="column"
            w={{ base: "100%", md: "420px" }}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mx={{ base: "auto", lg: "unset" }}
            me="auto"
          >
            <form onSubmit={submitHandler}>
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Correo Electrónico<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
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
              <Box display="flex" justifyContent="center">
                <Button
                  fontSize="20px"
                  type="submit"
                  variant="brand"
                  fontWeight="500"
                  w="auto"
                  h="50"
                  mb="24px"
                  bg="blue"
                  color="white"
                  _hover={{
                    bg: "blue.400",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Enviar Solicitud
                </Button>
              </Box>
            </form>
          </Flex>
          <Modal isOpen={showModal} onClose={handleModalClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Le Enviamos una clave de recuperacion de contraseña a su correo
              </ModalHeader>
              {/*  <ModalBody>{errorMessage}</ModalBody>  */}
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* <Modal isOpen={isModalOpen2} onClose={handleModalClose2}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>correo invalido</ModalHeader>
          <ModalBody>por favor intentelo de nuevo</ModalBody>   
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalClose2}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
        </Flex>
      </Box>
    </DefaultAuth>
  );
}

export default SignInForgot;
