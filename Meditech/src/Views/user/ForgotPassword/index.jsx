import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from './../../../Redux/Actions/Actionslogin';
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

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const success = useSelector((state) => state.success);
  const error = useSelector((state) => state.error);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [recoveryCode, setRecoveryCode] = useState('');
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const brandStars = useColorModeValue('brand.500', 'brand.400');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert(
        'Las contraseñas no coinciden. Por favor, verifica que las contraseñas ingresadas sean iguales.'
      );
      return;
    }
    dispatch(resetPassword(recoveryCode, newPassword, email));
  };
  const handleClick = () => setShow(!show);
  const handleClick1 = () => setShow1(!show1);
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
        <div>
          {success === true ? (
            <div>La contraseña se restableció correctamente</div>
          ) : (
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
                    value={email}
                    name="email"
                    placeholder="Ingresa el correo electronico asociado a la cuenta "
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    onChange={(e) => setEmail(e.target.value)}
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
                          value={newPassword}
                          name="newPassword"
                          mb="24px"
                          fontWeight="500"
                          size="lg"
                          onChange={(e) => setNewPassword(e.target.value)}
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
                          type={show ? 'text' : 'password'}
                          value={confirmPassword}
                          name="confirm-password"
                          mb="24px"
                          fontWeight="500"
                          size="lg"
                          onChange={(e) => setConfirmPassword(e.target.value)}
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
                    value={recoveryCode}
                    placeholder="Ingrese el codigo que recibió en su correo electrónico."
                    name="recoveryCode"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    onChange={(e) => setRecoveryCode(e.target.value)}
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
          )}
        </div>
      </Flex>
    </DefaultAuth>
  );
};

export default ForgotPassword;
