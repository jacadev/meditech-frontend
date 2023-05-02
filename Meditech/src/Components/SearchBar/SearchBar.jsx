import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { getName } from "../../Redux/Actions/actions";
import { InputGroup, Input, InputRightElement, Button ,Box,Icon} from "@chakra-ui/react";
import {AiOutlineSearch } from 'react-icons/ai';




const SearchBar = ({frontPage}) => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const changeHandler = (event) => {
        setName(event.target.value);
    }

    const searchName = async () => {
        if (name.trim()) {
            frontPage()
            dispatch(getName(name))
            setName('');
        } else {
            alert('ingresa un nombre para buscar')
        }
    }

    return (
        
        <Box display="inline-flex"  width="400px" >
  <InputGroup>
    <Input placeholder="Doctor o Especialidad" value={name} onChange={changeHandler} width="auto" bg='white' />
   
                <Button  onClick={() => searchName()}  width="100px"  colorScheme="blue" leftIcon={<Icon as={AiOutlineSearch} width="20px" height="20px" color="white" />} >
                    Buscar
                </Button>
   
            </InputGroup>
        </Box> 
    )
}

export default SearchBar;