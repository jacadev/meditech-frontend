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
    dispatch(getDoctors());
  };

  return (
    <Box display="inline-flex" width="400px">
      <InputGroup>
        <Input
          placeholder="Doctor o Especialidad"
          value={name}
          onChange={changeHandler}
          width="auto"
          bg="white"
        />

        <Button
          onClick={() => searchName()}
          width="100px"
          colorScheme="blue"
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
