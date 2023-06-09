import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoogleLogin } from '@leecheuk/react-google-login';
import { useHistory } from 'react-router-dom';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@chakra-ui/react"
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import { HSeparator } from './../../../Components/separator/Separator';
import DefaultAuth from './../../../layouts/user/Default';
// Assets
import illustration from '../../../assets/img/fondos/Meditech.gif';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { gapi } from 'gapi-script';
import { useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  userInfo,
  forgotPassword,
  cleanSuccess,
} from './../../../Redux/Actions/Actionslogin';
import { userSigninGoogle } from './../../../Redux/Actions/Actionslogin';

function SignIn() {
  const history = useHistory();
  const userInfo1 = useSelector((state) => state.userInfo);
  const success = useSelector((state) => state.success);
  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' }
  );
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' }
  );
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const [input, setInput] = React.useState({
    email: '',
    password: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleClick1() {
    history.push('/user/signup');
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setInput({ ...input, [property]: value });
  };

  const handleClick = () => setShow(!show);
  const responseGoogle = (response) => {
    const user_name = response.profileObj.name;
    const userImage = response.profileObj.imageUrl;
    const email = response.profileObj.email;
    localStorage.setItem('userInfo', userInfo);
    localStorage.setItem('user_name', user_name);
    localStorage.setItem('userImage', userImage);
    localStorage.setItem('email', email);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_name,
        email,
        rol: [2],
        preload: false,
      }),
    };

    fetch('http://localhost:3001/patients/signinGoogle', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        dispatch(userSigninGoogle(data));
        console.log(data);
        history.push('/admin/default');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const onFailure = (error) => {
    console.log(error);
    // Aquí puedes manejar el error del inicio de sesión de Google
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try { 
      if (input.email && input.password ){
     await dispatch(userInfo(input));
     setInput({ email: '', password: '' });
     history.push('/user/home');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsModalOpen(true);
    }
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setErrorMessage('');
    history.push('/user/home');
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          '486483669928-rdvcde4ja0g9diu12md4bpf6ts4bj2d6.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
      });
    }
    gapi.load('client:auth2', start);
    dispatch(cleanSuccess());
  }, []);

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
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
          <Heading color={textColor} fontSize="36px" mb="10px">
            Inicio de Sesion
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Ingrese su correo electrónico y contraseña para iniciar sesión!
          </Text>
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
          <GoogleLogin
            clientId="486483669928-rdvcde4ja0g9diu12md4bpf6ts4bj2d6.apps.googleusercontent.com"
            buttonText="Inicio de sesion con Google"
            onSuccess={responseGoogle}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            scope="profile"
          ></GoogleLogin>
          <Flex align="center" mb="25px">
            <HSeparator />
            <Text color="gray.400" mx="14px">
              o
            </Text>
            <HSeparator />
          </Flex>

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
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Contraseña<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Min. 8 caracteres"
                mb="24px"
                size="lg"
                type={show ? 'text' : 'password'}
                value={input.password}
                name="password"
                variant="auth"
                onChange={(e) => handleChange(e)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="center">
                <Checkbox
                  id="remember-login"
                  colorScheme="brandScheme"
                  me="10px"
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  Mantenme Conectado
                </FormLabel>
              </FormControl>

              <NavLink
                to="/user/signinforgot"
                style={{ cursor: 'pointer' }}
                activeClassName="active"
              >
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  Has olvidado tu contraseña?
                </Text>
              </NavLink>
            </Flex>
            <Box  display="flex" justifyContent="center" alignItems="center">
            <Button
              fontSize="15px"
              type="submit"
              variant="brand"
              fontWeight="500"
              w="auto"
              h="50"
              bg='blue'
              color='white'
              _hover={{
                bg: "blue.400",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Iniciar sesion
            </Button>
            </Box>
          </form>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Todavía no estas registrado?
              <Button onClick={handleClick1}>
                <Text
                  color={textColorBrand}
                  as="span"
                  ms="5px"
                  fontWeight="500"
                >
                  Crear una cuenta
                </Text>
              </Button>
            </Text>
          </Flex>
        </Flex>
      </Flex>
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error de inicio de sesión</ModalHeader>
           <ModalBody>{errorMessage}</ModalBody> 
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DefaultAuth>
  );
}

export default SignIn;
