/* import {
  Table,
  Thead,
  Tbody,
  Card,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Appointment() {
  const [appointmentsLists, setAppointmentsLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsListsPerPage, setappointmentsListsPerPage] = useState(0);
  const textColor = 'navy.700';
  const textColorSecondary = 'gray.400';

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3001/appointments');
      setAppointmentsLists(result.data);
      setappointmentsListsPerPage(result.data.length);
    }
    fetchData();
  }, []);

  const indexOfLastAppointment = currentPage * appointmentsListsPerPage;
  const indexOfFirstAppointment =
    indexOfLastAppointment - appointmentsListsPerPage;
  const currentAppointments = appointmentsLists.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );

  const history = useHistory();

  return (
    <Card p={5} mx="auto" mt={{ md: '12vh' }}>
      <TableContainer>
        <Table size="sm">
          <TableCaption>
            <Box
              textAlign="left"
              fontSize="sm"
              mb="4px"
              color={textColorSecondary}
            >
              Citas Medicas Vigentes
            </Box>
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Date</Th>
              <Th>Consultation Reason</Th>
              <Th>Disponibility</Th>
              <Th>Doctor Id</Th>
              <Th>Patient Id</Th>
              <Th>Patient First_Name</Th>
              <Th>Patient Last_Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentAppointments.map((appointment) => (
              <Tr key={appointment.id}>
                <Td>{appointment.id}</Td>
                <Td>{appointment.date}</Td>
                <Td>{appointment.consultationReason}</Td>
                <Td>{appointment.disponibilty.date}</Td>
                <Td>{appointment.disponibilty.doctor.id}</Td>
                <Td>{appointment.patient.id}</Td>
                <Td>{appointment.patient.person.first_name}</Td>
                <Td>{appointment.patient.person.last_name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Appointment;
 */