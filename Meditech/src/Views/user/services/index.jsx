import React from "react";

import CardServices from '../../../Components/CardServices/cardservices'
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import baner from '../../../assets/img/Banner/—Pngtree—blue minimalistic flat medical health_1050949.jpg'


export default function Marketplace() {
  
 
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
        
    </Box>
  );
}
