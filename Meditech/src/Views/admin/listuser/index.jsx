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

function Doctor() {
  const [userlists, setUserlists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userlistsPerPage, setSpecialistsPerPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3001/patients");
      setUserlists(result.data);
      setSpecialistsPerPage(result.data.length);
    }
    fetchData();
  }, []);

  const indexOfLastSpecialist = currentPage * userlistsPerPage;
  const indexOfFirstSpecialist = indexOfLastSpecialist - userlistsPerPage;
  const currentSpecialists = userlists.slice(
    indexOfFirstSpecialist,
    indexOfLastSpecialist
  );

  const history = useHistory();
  console.log(userlists);
  return (
    <Card p={5} mx="auto" mt={{ md: "12vh" }}>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Username</Th>
              <Th>Correo electrónico</Th>
              <Th>Nombres completos</Th>
              <Th>Edad</Th>
              <Th>Telefono(s)</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userlists?.map((specialist) => (
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
                <Td>
                <Tooltip hasArrow label="Editar" bg="blue.600">
                  <Button
                    leftIcon={<EditIcon />}
                    colorScheme="blue"
                    variant="solid"
                    onClick={() =>
                      history.push(`/user/edituser/${specialist.id}`)
                    }
                  >
                  </Button>
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
