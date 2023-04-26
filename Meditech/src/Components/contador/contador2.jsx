import { Box,Icon,Text,Grid } from '@chakra-ui/react';
import Contador from '../contador/contador'
import {
    MdPerson,
    MdPeople,
    MdLocalHospital,
    MdStar

  
  } from "react-icons/md";
  

function Contador2() {
    const contadorStyles = {
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'

      };
      const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
    return (
        <Box marginTop='100px' display="flex" justifyContent="center" alignItems="center"bg={bgColor} borderRadius="10px">

    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <Box display="flex" flexDirection="column" alignItems="center" margin='40px'>
        <Icon as={MdPerson} width='50px' height='50px' color='white' />
        <Contador limite={100} />
        <Text style={contadorStyles}>PACIENTES TRATADOS</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center"margin='40px'>
        <Icon as={MdPeople} width='50px' height='50px' color='white' />
        <Contador limite={30} />
        <Text style={contadorStyles}>EQUIPOS PARAMÉDICOS</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center"margin='40px'>
        <Icon as={MdLocalHospital} width='50px' height='50px' color='white' />
        <Contador limite={40} />
        <Text style={contadorStyles}>DOCTORES</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center"margin='40px'>
        <Icon as={MdStar} width='50px' height='50px' color='white' />
        <Contador limite={150} />
        <Text style={contadorStyles}>PREMIOS MÉDICOS</Text>
      </Box>
    </Grid>
      </Box>
    );
  }
  
  export default Contador2;
  