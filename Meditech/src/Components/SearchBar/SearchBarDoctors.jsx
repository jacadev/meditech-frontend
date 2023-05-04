import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDoctors, getName } from "../../Redux/Actions/actions";
import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Box,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBarDoctors = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const searchName = async () => {
    if (name.trim()) {
      dispatch(getName(name));
      setName("");
    } else {
      alert("ingresa un nombre para buscar");
    }
  };

  const allDoctors = () => {
    dispatch(getDoctors())
  }
  
  const textColor = useColorModeValue("gray.800", "white");
  const buttonColorScheme = useColorModeValue("blue", "teal");
  return (
    <Box display="inline-flex" width="400px">
      <InputGroup>
        <Input
          placeholder="Doctor o Especialidad"
          value={name}
          color={textColor}
          onChange={changeHandler}
          borderColor={useColorModeValue("lightgray", "white")}
          width="auto"
          _placeholder={{
            color: textColor,
          }}
        />


        <Button
          onClick={() => searchName()}
          width="100px"
          colorScheme={buttonColorScheme}
          leftIcon={
            <Icon
              as={AiOutlineSearch}
              width="20px"
              height="20px"
              color="white"
            />
          }
        >
          Buscar
        </Button>
        <Button onClick={() => allDoctors()} colorScheme="blue" mb={4}>
          Todos los doctores
        </Button>
      </InputGroup>
    </Box>
  );
};

export default SearchBarDoctors;
