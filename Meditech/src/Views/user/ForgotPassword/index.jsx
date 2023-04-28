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
  useColorModeValue,
} from '@chakra-ui/react';
import DefaultAuth from './../../../layouts/user/Default';
import illustration from '../../../../public/Meditech.png';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const success = useSelector((state) => state.success);
  const error = useSelector((state) => state.error);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const textColor = useColorModeValue('navy.700', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert(
        'Las contraseñas no coinciden. Por favor, verifica que las contraseñas ingresadas sean iguales.'
      );
      return;
    }
    dispatch(resetPassword(token, newPassword, email));
  };

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
                      <Input
                        isRequired={true}
                        variant="auth"
                        fontSize="sm"
                        ms={{ base: '0px', md: '0px' }}
                        type="password"
                        value={newPassword}
                        name="new-password"
                        mb="24px"
                        fontWeight="500"
                        size="lg"
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
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
                      <Input
                        isRequired={true}
                        variant="auth"
                        fontSize="sm"
                        ms={{ base: '0px', md: '0px' }}
                        type="password"
                        value={confirmPassword}
                        name="confirm-password"
                        mb="24px"
                        fontWeight="500"
                        size="lg"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
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
                    Token:<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Input
                    isRequired={true}
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: '0px', md: '0px' }}
                    type="text"
                    value={token}
                    placeholder="Ingrese el token que recibió en su correo electrónico."
                    name="token"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    onChange={(e) => setToken(e.target.value)}
                  />

                  <br />
                </div>
                {error && <div>{error}</div>}
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
