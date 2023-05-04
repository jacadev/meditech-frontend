import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Card,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Tooltip,
  Image,
  TableContainer,
  useColorModeValue
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../../Redux/Actions/actions";
import SearchBarDoctors from "../../../Components/SearchBar/SearchBarDoctors";

function doctor() {
  const [specialists, setSpecialists] = useState([]);
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [specialistsPerPage] = useState(specialists.length);

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get("http://localhost:3001/doctors");
  //     const dataWithRatings = result.data.map((specialist) => ({
  //       ...specialist,
  //       rating: Math.floor(Math.random() * 5) + 1, // Genera un número aleatorio entre 1 y 5
  //     }));
  //     console.log('dataa', dataWithRatings);
  //     setSpecialists(dataWithRatings);
  //   }
  //   fetchData();
  // }, []);

  const doctors = useSelector(state => state.doctors)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDoctors())
  },[])

  

  let filteredSpecialists = [...doctors];

  if (specialtyFilter !== "") {
    filteredSpecialists = filteredSpecialists.filter((specialist) =>
      specialist.specialties.some(
        (specialty) => specialty.specialty === specialtyFilter
      )
    );
  }

  const indexOfLastSpecialist = currentPage * specialistsPerPage;
  const indexOfFirstSpecialist = indexOfLastSpecialist - specialistsPerPage;
  const currentSpecialists = filteredSpecialists.slice(
    indexOfFirstSpecialist,
    indexOfLastSpecialist
  );
  const history = useHistory();
  
  
  const tableHeaderColor = useColorModeValue("#EDF2F7", "#2D3748");
  return (
    <>
      <Button
        mt={{ md: "12vh" }}
        leftIcon={<AddIcon />}
        colorScheme="blue"
        variant="solid"
        onClick={() => history.push("/admin/createdoctor")}
      >
        Crear
      </Button>

      <Card p={5} mx="auto" mt={{ md: "2vh" }}>
        <SearchBarDoctors />
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th bg={tableHeaderColor}>Img</Th>
                <Th bg={tableHeaderColor}>Nombres</Th>
                <Th bg={tableHeaderColor}>Genero</Th>
                <Th bg={tableHeaderColor}>Especialidad</Th>
                <Th bg={tableHeaderColor}>Costo</Th>
                <Th bg={tableHeaderColor}>Estado</Th>
                <Th bg={tableHeaderColor}>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredSpecialists.map((specialist) => (
                <Tr key={specialist.id}>
                  <Td>
                    <Image
                      src={specialist.profile_image}
                      alt={specialist.id}
                      borderRadius="full"
                      boxSize="40px"
                    />
                  </Td>
                  <Td>{specialist.person.first_name} {specialist.person.last_name}</Td>
                  <Td>{specialist.person.gender}</Td>
                  <Td>
                    {specialist.specialties
                      .map((specialty) => specialty.specialty)
                      .join(", ")}
                  </Td>
                  <Td>${specialist.consultation_cost}</Td>
                  <Td>{specialist.person.status ? 'Activo' : 'Inactivo'}</Td>
                  <Td>
                  <Tooltip hasArrow label="Editar" bg="blue.600">
                      <Button
                        onClick={() =>
                          history.push(`/user/editdoctor/${specialist.id}`)
                        }
                        leftIcon={<EditIcon />}
                        colorScheme="blue"
                        variant="solid"
                      ></Button>
                    </Tooltip>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
export default doctor;
