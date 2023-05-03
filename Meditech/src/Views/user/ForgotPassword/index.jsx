import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanSuccess,
  resetPassword,
} from './../../../Redux/Actions/Actionslogin';
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import DefaultAuth from './../../../layouts/user/Default';
import illustration from '../../../assets/img/fondos/Meditech.png';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import Loading from '../../../Components/Loading/Loading'

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const success = useSelector((state) => state.success);
  const error = useSelector((state) => state.error);
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const [input, setInput] = useState({
    email: '',
    newPassword: '',
    recoveryCode: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    setInput({ ...input, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (input.newPassword !== input.confirmPassword) {
      alert(
        'Las contraseñas no coinciden. Por favor, verifica que las contraseñas ingresadas sean iguales.'
      );
      return;
    }
  
    dispatch(cleanSuccess());
    setLoading(true);
    try {
      await dispatch(resetPassword(input));
      setLoading(false);
      setShowError(false);
      if (success) {
        setInput({
          email: '',
          newPassword: '',
          recoveryCode: '',
          confirmPassword: '',
        });
        history.push('/user/signin');
      } else {
        history.push('user/forgotpassword');
      }
    } catch (error) {
      setLoading(false);
    /*   setShowError(true);
      console.error(error); */
    }
  };


  const handleClick = () => setShow(!show);
  const handleClick1 = () => setShow1(!show1);

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      {loading && <Loading />}
    
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
        <div>
          {success ? (
            <div>
              <Box me="auto">
                <Heading color={textColor} fontSize="36px" mb="10px">
                  Recuperación de cuenta
                </Heading>
              </Box>
              <form onSubmit={handleSubmit}>
                <div>
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    Correo electronico:<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Input
                    isRequired={true}
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: '0px', md: '0px' }}
                    type="email"
                    value={input.email}
                    name="email"
                    placeholder="Ingresa el correo electronico asociado a la cuenta "
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-between"
                  >
                    <div>
                      <FormLabel
                        display="flex"
                        ms="4px"
                        fontSize="sm"
                        fontWeight="500"
                        color={textColor}
                        mb="8px"
                      >
                        Nueva contraseña:<Text color={brandStars}>*</Text>
                      </FormLabel>
                      <InputGroup size="md">
                        <Input
                          isRequired={true}
                          variant="auth"
                          fontSize="sm"
                          ms={{ base: '0px', md: '0px' }}
                          type={show ? 'text' : 'password'}
                          value={input.newPassword}
                          name="newPassword"
                          mb="24px"
                          fontWeight="500"
                          size="lg"
                          onChange={(e) => handleChange(e)}
                        />
                        <InputRightElement
                          display="flex"
                          alignItems="center"
                          mt="4px"
                        >
                          <Icon
                            color={textColorSecondary}
                            _hover={{ cursor: 'pointer' }}
                            as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                            onClick={handleClick}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </div>

                    <div>
                      <FormLabel
                        display="flex"
                        ms="4px"
                        fontSize="sm"
                        fontWeight="500"
                        color={textColor}
                        mb="8px"
                      >
                        Confirmar contraseña:<Text color={brandStars}>*</Text>
                      </FormLabel>
                      <InputGroup size="md">
                        <Input
                          isRequired={true}
                          variant="auth"
                          fontSize="sm"
                          ms={{ base: '0px', md: '0px' }}
                          type={show1 ? 'text' : 'password'}
                          value={input.confirmPassword}
                          name="confirmPassword"
                          mb="24px"
                          fontWeight="500"
                          size="lg"
                          onChange={(e) => handleChange(e)}
                        />
                        <InputRightElement
                          display="flex"
                          alignItems="center"
                          mt="4px"
                        >
                          <Icon
                            color={textColorSecondary}
                            _hover={{ cursor: 'pointer' }}
                            as={show1 ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                            onClick={handleClick1}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </div>
                  </Flex>
                </div>

                <div>
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    Codigo:<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Input
                    isRequired={true}
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: '0px', md: '0px' }}
                    type="number"
                    value={input.recoveryCode}
                    placeholder="Ingrese el codigo que recibió en su correo electrónico."
                    name="recoveryCode"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    onChange={(e) => handleChange(e)}
                  />

                  <br />
                </div>

                <div>
                  <Button
                    fontSize="sm"
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    fontWeight="500"
                    w="100%"
                    h="50"
                    mb="24px"
                    _hover={{ boxShadow: 'xl' }}
                    _active={{ boxShadow: 'lg' }}
                    borderRadius="md"
                  >
                    Restablecer contraseña
                  </Button>
                </div>
              </form>
            </div>
          ) : error ? (
            <div>{error.message}</div>
          ) : null}
        </div>
      </Flex>
    </DefaultAuth>
  );
};

export default ForgotPassword;
