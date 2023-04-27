import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logoWhite from "./../../../assets/img/layout/logoWhite.png";
import citaIcono from "./../../../assets/img/layout/cita.png"
import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SidebarDocs() {
  const userInfo = useSelector((state) => state.userInfo);
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  const borderColor = useColorModeValue("white", "navy.800");
  const userName = localStorage.getItem("userName");
  const history = useHistory();

  function handleClick() {
    history.push('/user/signin');
  }
  return (
    <Flex
      justify='center'
      direction='column'
      align='center'
      bg={bgColor}
      borderRadius='30px'
      me='20px'
      position='relative'>
      <Flex
        border='5px solid'
        borderColor="white"
        bg='white'
        borderRadius='50%'
        w='94px'
        h='94px'
        align='center'
        justify='center'
        mx='auto'
        position='absolute'
        left='50%'
        top='-47px'
        transform='translate(-50%, 0%)'>
        <Image src={citaIcono} w='80px' h='80px' />
      </Flex>
      <Flex
        direction='column'
        mb='12px'
        align='center'
        justify='center'
        px='15px'
        pt='55px'>
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color='white'
          fontWeight='bold'
          lineHeight='150%'
          textAlign='center'
          px='10px'
          mb='14px'>
        Welcome to Meditech {userInfo.user_name}
        </Text>
        <Text
          fontSize='14px'
          color={"white"}
          px='10px'
          mb='14px'
          textAlign='center'>
        Request an appointment right now
        </Text>
      </Flex>
      <Link>
        <Button
          bg='whiteAlpha.300'
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          fontWeight='regular'
          fontSize='sm'
          minW='185px'
          mx='auto'>
          Request an appointment
        </Button>
      </Link>
      <Link>
      {!userInfo.id && (
        <Button
          bg="whiteAlpha.300"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          fontWeight="regular"
          fontSize="sm"
          minW="185px"
          mx="auto"
          onClick={handleClick}
        >
          Inicio de sesión
        </Button>
      )}
      </Link>
    </Flex>
  );
}
