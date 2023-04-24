import { Box, Image, Text, Badge, SimpleGrid, Stack, Divider, VStack, HStack } from '@chakra-ui/react';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DoctorCard = () => {
  const doctors = useSelector(state => state.doctors);
  console.log(doctors)
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/doctors/${id}`)
      .then((response) => {
        console.log(response.data)
      })
  }, [id]);

return(
  <div>
      
        <Box maxW="80%" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image maxW="20em" src={doctors.profile_image}  />
            <Box p="6">
              <Stack spacing="4">
                <Box d="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    {doctors.tuition_code}
                  </Badge>
                  <Text ml="2" fontSize="sm" fontWeight="bold" color="gray.600">
                    Consultation cost: ${doctors.consultation_cost}
                  </Text>
                </Box>

                <Text fontSize="2xl" fontWeight="bold" lineHeight="short">
                  {doctors.person.first_name} {doctors.person.last_name}
                </Text>

                <Text>{doctors.about_me}</Text>

                <VStack spacing={1}>
                  {doctors.specialties.map((specialty) => (
                    <Badge key={specialty.specialty} colorScheme="teal">
                      {specialty.specialty}
                    </Badge>
                  ))}
                </VStack>

                <Divider />

                <VStack align="stretch" spacing={4}>
                  <Text fontWeight="bold">Location:</Text>
                  <Text>{doctors.location.address}, {doctors.location.city}, {doctors.location.country}</Text>

                  <Text fontWeight="bold">Diseases treated:</Text>
                  <HStack wrap="wrap">
                    {doctors.diseases_treated.map((disease) => (
                      <Badge key={disease} colorScheme="green">
                        {disease}
                      </Badge>
                    ))}
                  </HStack>

                  <Text fontWeight="bold">Availability:</Text>
                  <SimpleGrid columns={3} spacing={4}>
                    {doctors.disponibilties.map((disponibility) => (
                      <Box key={disponibility.id}>
                        <Text fontWeight="bold">{disponibility.day.day}</Text>
                        <Text>{disponibility.date}</Text>
                        <Text>{disponibility.timetable.startTime} - {disponibility.timetable.endTime}</Text>
                      </Box>
                    ))}
                  </SimpleGrid>

                  <Text fontWeight="bold">Reviews:</Text>
                  <VStack align="stretch" spacing={4}>
                    {doctors.reviews.map((review) => (
                      <Box key={review.id}>
                        <HStack>
                          <Box as="span" color="orange.400">
                            ★
                          </Box>
                          <Box as="span" ml="2" fontWeight="semibold">
                            {review.rating} / 5
                          </Box>
                        </HStack>
                        <Text>{review.comment}</Text>
                      </Box>
                    ))}
                  </VStack>
                </VStack>
              </Stack>
            </Box>
          </Box>
  </div>
  );
}
  
export default DoctorCard;