import React from "react";
import {
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
  Button
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";


export default function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <Grid
    //   backgroundColor={"black"}
    //   templateAreas={`"nav main"`}
    //   gridTemplateRows={"50px 1fr 30px"}
    //   gridTemplateColumns={"150px 1fr"}
    //   h="100vh"
    //   w="100vw"
    //   gap="0"
    //   borderRadius="5px"
    //   color="blackAlpha.700"
    //   fontWeight="bold"
    // >
      <GridItem pl="5" borderRadius="5px" bg="inherit" area={"main"}>
        <Text
          marginTop="8rem"
          fontSize="m"
          p="4"
          borderRadius="lg"
          lineHeight="tall"
          fontFamily="Google Sans, sans-serif"
          mb={4}
        >
          MEDITECH is a digital platform designed to improve the management of medical appointments and facilitate the creation and storage of electronic medical records. Our goal is to offer a practical and effective solution to optimize the workflow in the healthcare field, providing a safe and efficient experience for patients and healthcare professionals.
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
          We are proud to be a leading company in the medical technology sector, with more than 50 years of experience in the development of innovative and reliable solutions. Our team of experts in health technology works tirelessly to offer cutting-edge tools that contribute to the well-being of the medical community and the patients they serve. At MEDITECH, we are dedicated to improving the quality of life of people through technology and high-quality healthcare.
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
          Contact us to learn more about our services.
          </Text>
          <>
            <Button
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
              marginTop="4rem"
              marginLeft="1em"
              fontFamily="Google Sans, sans-serif"
              fontSize="m"
              fontWeight="bold"
              bg="#5C43FF"
              color="#FFFFFF"
              borderRadius="lg"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
              transition="all 0.3s ease-in-out"
              _hover={{
                bg: "#5C43FF",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => setIsOpen(true)}
            >
              DEVELOPERS +
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
                  <HStack>
                    <Icon as={FaLinkedin} boxSize={6} />
                    <Link
                      href="https://www.linkedin.com/mwlite/in/filleral-yefreyner-mahecha-cantor-46ba451b6"
                      colorScheme="linkedin"
                      fontWeight="bold"
                    >
                      FILLERAL YEFREYNER MAHECHA CANTOR
                    </Link>
                  </HStack>
                  <br />
                  <HStack>
                    <Icon as={FaLinkedin} boxSize={6} />
                    <Link
                      href="https://www.linkedin.com/in/carlosnr9"
                      colorScheme="linkedin"
                      fontWeight="bold"
                    >
                      CARLOS FERNEY NARVAEZ RUALES
                    </Link>
                  </HStack>
                  <br />
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
      </GridItem>
    // </Grid>
  );
}
