import React from "react";

import CardServices from '../../../Components/CardServices/cardservices'
import { Box, Flex, Image, Text,Button } from "@chakra-ui/react";
import baner from '../../../assets/img/Banner/banner-Plano de fundo.jpg'
import Contador from '../../../Components/contador/contador2';
import { useHistory } from 'react-router-dom';

export default function Marketplace() {
  const history = useHistory();

  function handleClick() {
    history.push("/user/about-us");
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
         
          <Text color="white" fontWeight="bold" fontSize="lg">Are you ready for a consultation?</Text>
          <Text color="white" fontSize="lg">Your treatment will be performed by licensed doctors. Schedule your appointment now!</Text>
        </Flex>
      </Box>
      
        <CardServices/>

        <Contador/>
        <Flex flexDirection="column" alignItems="center" my={6}>
    <Text textAlign="center" fontSize="lg" >For more info</Text>
    <Button bg='#5C43FF' color="white" mt={2} onClick={handleClick} >Contact us</Button>
    
  </Flex>
        
    </Box>
  );
}