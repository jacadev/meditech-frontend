import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { userSignUp } from "./../../../Redux/Actions/Actionslogin";
import {
  Box,
  Button,
  Checkbox,
  RadioGroup,
  HStack,
  Radio,
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
} from "@chakra-ui/react";
import DefaultAuth from "./../../../layouts/user/Default";
import illustration from "../../../assets/img/fondos/Meditech.png";

const validate = (input) => {
  let error = {};

  if (!input.user_name) {
    error.name = "The user_name is required.";
  }

  if (!/^[a-zA-Z ]+$/.test(input.first_name)) {
    error.name = "The title requires letters";
  }

  if (!/^[a-zA-Z ]+$/.test(input.last_name)) {
    error.name = "The title requires letters";
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(input.email)) {
    error.name = "The email is invalid.";
  }

  return error;
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const history = useHistory();
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const [input, setInput] = useState({
    user_name: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: [],
    age: "",
    gender: "",
    rol: [2],
    preload:false
  });

  const [error, setError] = useState({
    user_name: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const property = e.target.name;

    if (property === "phone") {
      const phoneArr = value.split(",").map((num) => parseInt(num.trim(), 10));
      setError(validate({ ...input, [property]: phoneArr }));
      setInput({ ...input, [property]: phoneArr });
    } else {
      setError(validate({ ...input, [property]: value }));
      setInput({ ...input, [property]: value });
    }
  };
  const handleClick = () => setShow(!show);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.user_name &&
      input.email &&
      input.password &&
      input.first_name &&
      input.last_name &&
      input.age
    ) {
      dispatch(userSignUp(input));
      setInput({
        user_name: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phone: [],
        age: "",
        gender: "",
        rol: [2],
        preload:false
      });
      history.push('/admin/default');
    } else {
      alert("!!Required Data");
    }
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
          <div>
            <Box me="auto">
              <Heading color={textColor} fontSize="36px" mb="10px">
                Register
              </Heading>
            </Box>
            <form onSubmit={handleSubmit}>
              <div>
                <Flex
                  direction={{ base: "column", md: "row" }}
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
                      User Name:<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                      isRequired={true}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      type="text"
                      value={input.user_name}
                      name="user_name"
                      placeholder="write your UserName...."
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                    />
                    {error.user_name && <span>{error.user_name}</span>}
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
                      Email<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                      isRequired={true}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      type="email"
                      value={input.email}
                      name="email"
                      placeholder="mail@simmmple.com"
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                    />
                    {error.email && <span>{error.email}</span>}
                  </div>
                </Flex>

                <Flex
                  direction={{ base: "column", md: "row" }}
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
                      First Name<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                      isRequired={true}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      type="text"
                      value={input.first_name}
                      name="first_name"
                      placeholder="write your FirstName...."
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                    />
                    {error.first_name && <span>{error.first_name}</span>}
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
                      LastName:<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                      isRequired={true}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      type="text"
                      value={input.last_name}
                      name="last_name"
                      placeholder="write your LastName...."
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                    />
                    {error.last_name && <span>{error.last_name}</span>}
                  </div>
                </Flex>
                <Flex
                  direction={{ base: "column", md: "row" }}
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
                      Phone:<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                      isRequired={true}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      type="text"
                      value={input.phone}
                      name="phone"
                      placeholder="Ej: 3102332211, 3152221133, 321....."
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                    />
                    {error.phone && <span>{error.phone}</span>}
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
                      Age:<Text color={brandStars}>*</Text>
                    </FormLabel>
                    <Input
                      isRequired={true}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      type="number"
                      value={input.age}
                      name="age"
                      placeholder="Ej:  32  "
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      onChange={(e) => handleChange(e)}
                    />
                    {error.age && <span>{error.age}</span>}
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
                  Password:<Text color={brandStars}>*</Text>
                </FormLabel>
                <InputGroup size="md">
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: "0px", md: "0px" }}
                  type={show ? 'text' : 'password'}
                  value={input.password}
                  name="password"
                  placeholder="write your Password...."
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  onChange={(e) => handleChange(e)}
                />
                {error.password && <span>{error.password}</span>}
                <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: 'pointer' }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
                </InputGroup>
                <br />
              </div>
              <Box mb="8px">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                >
                  Gender: <Text color={brandStars}>*</Text>
                </FormLabel>
                <div>
              
              <input
                type="radio"
                name="gender"
                value="Masculino"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="Masculino">Masculino</label>
              <input
                type="radio"
                name="gender"
                value="Femenino"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="Femenino">Femenino</label>
            </div>
              </Box>
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
                  _hover={{ boxShadow: "xl" }}
                  _active={{ boxShadow: "lg" }}
                  borderRadius="md"
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Flex>
    </DefaultAuth>
  );
};

export default SignUp;