import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Icon,
  HStack,
  Text,
  Modal,
  Link,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@chakra-ui/button";

export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid
      backgroundColor={"black"}
      templateAreas={`"header header" "nav main" "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="100vh"
      w="100vw"
      gap="0"
      borderRadius="5px"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" borderRadius="5px" bg="#3a3132" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" borderRadius="5px" bg="#386dbd" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" borderRadius="5px" bg="#0f4571" area={"main"}>
        
        <Text
          fontSize="m"
          p="4"
          borderRadius="lg"
          lineHeight="tall"
          fontFamily="Google Sans, sans-serif"
          mb={4}
        >
          MEDITECH es una plataforma digital diseñada para mejorar la gestión de
          citas médicas y facilitar la creación y almacenamiento de historias
          clínicas electrónicas. Nuestro objetivo es ofrecer una solución
          práctica y efectiva para optimizar el flujo de trabajo en el ámbito de
          la atención médica, brindando una experiencia segura y eficiente para
          pacientes y profesionales de la salud.
        </Text>
        <GridItem borderRadius="5px">
          <Text
            fontSize="m"
            p="4"
            borderRadius="lg"
            lineHeight="tall"
            fontFamily="Google Sans, sans-serif"
            mb={4}
          >
            Nos enorgullece ser una empresa líder en el sector de la tecnología
            médica, con más de 50 años de experiencia en el desarrollo de
            soluciones innovadoras y confiables. Nuestro equipo de expertos en
            tecnología de la salud trabaja incansablemente para ofrecer
            herramientas de vanguardia que contribuyan al bienestar de la
            comunidad médica y de los pacientes que atienden. En MEDITECH, nos
            dedicamos a mejorar la calidad de vida de las personas a través de
            la tecnología y la atención médica de alta calidad.
          </Text>
        </GridItem>
        <Text
          fontSize="m"
          p="4"
          borderRadius="lg"
          lineHeight="tall"
          fontFamily="Google Sans, sans-serif"
          mb={4}
          

        >
          Contáctanos para obtener más información sobre nuestros servicios.
          </Text>
          <>
            <Button
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
              marginTop="4rem"
              marginLeft="10em"
              fontFamily="Google Sans, sans-serif"
              fontSize="m"
              fontWeight="bold"
              bg="#000011"
              color="#333333"
              borderRadius="lg"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
              transition="all 0.3s ease-in-out"
              _hover={{
                bg: "#CCCCCC",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => setIsOpen(true)}
            >
              DESARROLLADORES
            </Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Perfiles de LinkedIn</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <HStack>
                    <Icon as={FaLinkedin} boxSize={6} />
                    <Link
                      href="https://www.linkedin.com/in/gastón-garcia-juri-76a3b2212"
                      colorScheme="linkedin"
                      fontWeight="bold"
                    >
                      GASTON GARCIA JURI
                    </Link>
                  </HStack>
                  <br />
                  <HStack>
                    <Icon as={FaLinkedin} boxSize={6} />
                    <Link
                      href="https://www.linkedin.com/in/franco-gonzalez-273154168/"
                      colorScheme="linkedin"
                      fontWeight="bold"
                    >
                      FRANCO GONZALES
                    </Link>
                  </HStack>
                  <br />
                  <HStack>
                    <Icon as={FaLinkedin} boxSize={6} />
                    <Link
                      href="https://www.linkedin.com/in/danilo-herrera-717665266"
                      colorScheme="linkedin"
                      fontWeight="bold"
                    >
                      DANILO HERRERA
                    </Link>
                  </HStack>
                  <br />
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
      </GridItem>
      <GridItem pl="2" borderRadius="5px" bg="#009ddd" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}
