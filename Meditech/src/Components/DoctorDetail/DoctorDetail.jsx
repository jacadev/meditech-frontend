import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Image, Badge, Text, Flex, Heading, Spacer } from "@chakra-ui/react";
import { fetchDoctorById } from '../../Redux/Actions/actions';

const DoctorDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const doctor = useSelector(state => state.doctors.doctor);
  const reviews = useSelector(state => state.doctors.reviews);

  useEffect(() => {
    dispatch(fetchDoctorById(id));
  }, [dispatch, id]);

  return (
    <Box>
      <Flex alignItems="center" mb={4}>
        <Image src={doctor.profileImage} w="120px" h="120px" rounded="full" alt={doctor.name} mr={4} />
        <Box>
          <Heading size="lg">{doctor.name}</Heading>
          <Text fontSize="lg" color="gray.500">{doctor.specialty}</Text>
          <Text fontSize="lg" color="gray.500">{doctor.city}</Text>
        </Box>
        <Spacer />
        <Box>
          <Badge variant="subtle" colorScheme="green" fontSize="lg">S/. {doctor.consultationCost}</Badge>
        </Box>
      </Flex>
      <Box>
        <Heading size="md" mb={2}>About me</Heading>
        <Text>{doctor.aboutMe}</Text>
      </Box>
      <Box mt={4}>
        <Heading size="md" mb={2}>Reviews</Heading>
        {reviews.map(review => (
          <Box key={review.id} bg="white" boxShadow="sm" rounded="md" p={4} mb={4}>
            <Flex alignItems="center">
              <Text fontWeight="bold">{review.user}</Text>
              <Spacer />
              <Badge variant="subtle" colorScheme="green">{review.rating}</Badge>
            </Flex>
            <Text>{review.comment}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DoctorDetail;