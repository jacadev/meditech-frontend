import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { forgotPassword } from './../../../Redux/Actions/Actionslogin';

function SignInForgot() {
  const history = useHistory();
  const { colorMode } = useColorMode(); // Obtener el modo de color actual
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

    setTimeout(() => {
      history.push('/user/forgotpassword');
    }, 1000);
  };

  return (
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
        <Heading
          color={colorMode === 'light' ? 'navy.700' : 'white'}
          fontSize="26px"
          mb="10px"
        >
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
            color={colorMode === 'light' ? 'navy.700' : 'white'}
            mb="8px"
          >
            Correo Electrónico<Text color={colorMode === 'light' ? 'brand.500' : 'brand.400'}>*</Text>
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
  variant={colorMode === 'light' ? 'brand' : 'brandDark'}
  fontWeight="500"
  w="100%"
  h="50"
  mb="24px"
  _hover={{
    bg: colorMode === 'light' ? 'brand.200' : 'brandDark.600',
    boxShadow: colorMode === 'light' ? '0px 2px 6px rgba(0, 0, 0, 0.2)' : 'dark-lg',
    filter: colorMode === 'light' ? 'brightness(80%)' : 'brightness(100%)',
  }}
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
