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
} from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../../../Redux/Actions/actions";
import SearchBarUsers from "../../../Components/SearchBar/SearchBarUsers";
import SearchBar from "../../../Components/SearchBar/SearchBar";

function Doctor() {
  // const [userlists, setUserlists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userlistsPerPage, setSpecialistsPerPage] = useState(0);

  const patients = useSelector((state) => state.patients);
  console.log("los pacientes", patients);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get("http://localhost:3001/patients");
  //     setUserlists(result.data);
  //     setSpecialistsPerPage(result.data.length);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(getAllPatients());
  }, []);

  const indexOfLastSpecialist = currentPage * userlistsPerPage;
  const indexOfFirstSpecialist = indexOfLastSpecialist - userlistsPerPage;
  // const currentSpecialists = userlists.slice(
  //   indexOfFirstSpecialist,
  //   indexOfLastSpecialist
  // );

  const history = useHistory();
  console.log(patients);
  return (
    <Card p={5} mx="auto" mt={{ md: "12vh" }}>
      <SearchBarUsers />
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Correo electrónico</Th>
              <Th>Nombres completos</Th>
              <Th>Edad</Th>
              <Th>Telefono(s)</Th>
              <Th>Estado</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {patients?.map((specialist) => (
              <Tr key={specialist?.id}>
                <Td>{specialist.person.userName}</Td>
                <Td>{specialist.person.email}</Td>
                <Td>
                  {specialist.person.firstName} {specialist.person.lastName}
                </Td>
                <Td>{specialist.person.age}</Td>
                <Td>
                  <ul>
                    {specialist.person.phone?.map((phone) => (
                      <li>{phone}</li>
                    ))}
                  </ul>
                </Td>
                <Td>{specialist.person.status ? "Activo" : "Inactivo"}</Td>
                <Td>
                  <Tooltip hasArrow label="Editar" bg="blue.600">
                    <Button
                      leftIcon={<EditIcon />}
                      colorScheme="blue"
                      variant="solid"
                      onClick={() =>
                        history.push(`/admin/putPatient/${specialist.id}`)
                      }
                    ></Button>
                  </Tooltip>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Doctor;
