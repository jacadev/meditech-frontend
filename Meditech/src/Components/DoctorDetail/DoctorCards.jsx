import React from 'react'
import { Box, Image, Text, Badge, SimpleGrid, Stack, Divider, VStack, HStack } from '@chakra-ui/react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../../Redux/Actions/actions";
import { Link } from 'react-router-dom';

const DoctorCards = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(state => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  return (
    <div>
        {doctors.map((doctor) => (
          <Link to={`/doctors/${doctor.id}`}>
            <Text>ID: {doctor.id}</Text>
            <SimpleGrid columns={2} spacing={2}>
              <Box  maxW="49%" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image maxW="15em" src={doctor.profile_image}  />
                  <Text>Nombre: {doctor.person.first_name}</Text>
                  <VStack spacing={1}>
                        {doctor.specialties.map((specialty) => (
                          <Badge key={specialty.specialty} colorScheme="teal">
                            {specialty.specialty}
                          </Badge>
                        ))}
                      </VStack>
                  <Divider />
              </Box>
            </SimpleGrid>
          </Link>
        ))}
    </div>
  )
}

export default DoctorCards