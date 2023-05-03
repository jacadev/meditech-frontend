import React from 'react';
import { useHistory } from 'react-router-dom';
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import DefaultAuth from './../../../layouts/user/Default';
// Assets
//import illustration from '../../../assets/img/fondos/Meditech.png';
import { useDispatch } from 'react-redux';
import { forgotPassword } from './../../../Redux/Actions/Actionslogin';

function SignInForgot() {
  const history = useHistory();
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const dispatch = useDispatch();
  const [input, setInput] = React.useState({
    email: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setInput({ ...input, [property]: value });
  };
 
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(input.email));
    setInput({ email: '' });

    setTimeout(() =>{

      history.push('/user/forgotpassword')

    },1000)
  };

  return (
  //  <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: '100%', md: 'max-content' }}
        w="100%"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: '30px', md: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '40px', md: '14vh' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="26px" mb="10px">
            Solicitud Recuperacion Contraseña
          </Heading>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', md: '420px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
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
              ms={{ base: '0px', md: '0px' }}
              type="email"
              value={input.email}
              name="email"
              placeholder="mail@simmmple.com"
              mb="24px"
              fontWeight="500"
              size="lg"
              onChange={(e) => handleChange(e)}
            />

            <Button
              fontSize="sm"
              type="submit"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
            >
              Enviar Solicitud
            </Button>
          </form>
        </Flex>
      </Flex>
    //</DefaultAuth>
  );
}

export default SignInForgot;
