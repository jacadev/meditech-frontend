import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPatientByName, getAllPatients } from "../../Redux/Actions/actions";
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

const SearchBarUsers = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const changeHandler = (event) => {
    setName(event.target.value);
  };

  const searchName = async () => {
    if (name.trim()) {
      dispatch(getAllPatientByName(name));
      setName("");
    } else {
      alert("ingresa un nombre para buscar");
    }
  };

  const allUser = () => {
    dispatch(getAllPatients())
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
          borderColor={useColorModeValue("lightgray", "white")}
          onChange={changeHandler}
          width="auto"
          _placeholder={{
            color: textColor,
          }}
        />

        <InputRightElement width="100px">
          <Button
            onClick={() => searchName()}
            colorScheme={buttonColorScheme}
            width="full"
            roundedRight="0"
            fontWeight="bold"
          >
            <Icon
              as={AiOutlineSearch}
              width="20px"
              height="20px"
              color="white"
            />
          </Button>
          <Button
            onClick={() => allUser()}
            colorScheme={buttonColorScheme}
            color={useColorModeValue("gray.800", "#1a2128")}
            width="full"
            roundedLeft="0"
            fontWeight="bold"
          >
            Todos
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBarUsers;
