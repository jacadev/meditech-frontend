import React from "react";

import CardServices from "../../../Components/CardServices/cardservices";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import baner from "../../../assets/img/Banner/banner-Plano de fundo.jpg";
import Contador from "../../../Components/contador/contador2";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Marketplace() {
  const history = useHistory();

  const userInfo = useSelector((state) => state.userInfo);

  function handleClick() {
    if (userInfo?.rol === 3) {
      history.push("/admin/about-us");
    } else {
      history.push("/user/about-us");
    }
  }

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      <Box
        backgroundImage={baner}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        px={20}
        py={20}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text color="white" fontWeight="bold" fontSize="lg">
            Estás listo para una consulta?
          </Text>
          <Text color="white" fontSize="lg">
            Su tratamiento será realizado por médicos autorizados. ¡Agenda tu
            cita ahora!
          </Text>
        </Flex>
      </Box>

      <CardServices />

      <Contador />
      <Flex flexDirection="column" alignItems="center" my={6}>
        <Text textAlign="center" fontSize="lg">
          Para mas Informacion
        </Text>
        <Button bg="#5C43FF" color="white" mt={2} onClick={handleClick}>
          Contacta con nosotros
        </Button>
      </Flex>
    </Box>
  );
}
