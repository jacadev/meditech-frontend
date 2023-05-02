import React from "react";
import {
  GridItem,
  Text,
  Image,
  Flex,
  useColorModeValue
} from "@chakra-ui/react";
import imagen1 from '../../../assets/img/fondos/medicos-masculinos-femeninos-papeles.jpg'
import { useColorMode } from "@chakra-ui/react";

export default function AboutUs() {
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  const bgColorDark = "radial-gradient(circle, rgba(0,191,255,1) 0%, rgba(46,100,254,0.605359331232493) 100%)"
  return (
    <GridItem pl="5" borderRadius="5px" bg="inherit"  area={"main"}>
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
        <Image src={imagen1} objectFit="cover" w={800} h={800} mr={{ md: "4rem" }} />
        <Flex direction="column" bg={useColorModeValue('white',`${bgColorDark}`)}>
          <Text
            marginTop="8rem"
            fontSize={{ base: 'md', lg: 'lg' }}
            color={useColorModeValue('gray.500', 'gray.100')}
            p="4"
            borderRadius="lg"
            lineHeight="tall"
            fontFamily="Google Sans, sans-serif"
            mb={4}
          >
           MEDITECH es una plataforma digital diseñada para mejorar la gestión de citas médicas y facilitar la creación y almacenamiento de historias clínicas electrónicas. Nuestro objetivo es ofrecer una solución práctica y efectiva para optimizar el flujo de trabajo en el campo de la salud, brindando una experiencia segura y eficiente para pacientes y profesionales de la salud.
          </Text>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={useColorModeValue('gray.500', 'gray.100')}
            p="4"
            borderRadius="lg"
            lineHeight="tall"
            fontFamily="Google Sans, sans-serif"
            mb={4}
          >
            Estamos orgullosos de ser una empresa líder en el sector de la tecnología médica, con más de 50 años de experiencia en el desarrollo de soluciones innovadoras y fiables. Nuestro equipo de expertos en tecnología de la salud trabaja incansablemente para ofrecer herramientas de vanguardia que contribuyan al bienestar de la comunidad médica y de los pacientes a los que atiende. En MEDITECH nos dedicamos a mejorar la calidad de vida de las personas a través de la tecnología y la atención médica de alta calidad.
          </Text>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={useColorModeValue('gray.500', 'gray.100')}
            p="4"
            borderRadius="lg"
            lineHeight="tall"
            fontFamily="Google Sans, sans-serif"
            mb={4}
          >
            Puede contactarnos para conocer más sobre nuestros servicios en nuestras redes sociales o por via correo a "Meditech@gmail.com".
        
          </Text>

        </Flex>
      </Flex>
    </GridItem>

  );
}