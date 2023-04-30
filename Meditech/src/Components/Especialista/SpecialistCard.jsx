import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { BsStarFill, BsStar } from 'react-icons/bs';
import {
  Box,
  Badge,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Heading,
  Avatar,
  Center,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from 'react-router-dom';

function SpecialistCard(props) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<BsStarFill key={i} color="yellow" />);
      } else {
        stars.push(<BsStar key={i} color="yellow" />);
      }
    }
    return stars;
  };
  const { colorMode } = useColorMode();

  return (

    <Box
      cursor='pointer'
      _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
      _active={{ transform: "scale(0.98)" }}
      maxW={'450px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}>
      <Link to={{ pathname: `/user/detail/${props.specialist.id}` }}>
        <Avatar

          size={'xl'}
          src={props.specialist.profile_image}
          alt={props.specialist.id}

          mb={4}
          pos={'relative'}
        />
      </Link>
      <Heading fontSize={'2xl'} fontFamily={'body'}>
        {props.specialist.person.first_name} {props.specialist.person.last_name}
      </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {props.specialist.person.gender}
      </Text>
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}>
        {props.specialist.about_me}{' '}
      </Text>
      <span style={{ display: "inline-flex", flexWrap: "nowrap" }}>{renderStars(props.specialist.rating)}</span>
      <Text mb="2">
        <strong>Precio de la consulta:</strong> ${props.specialist.consultation_cost.toFixed(2)}
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
        {props.specialist.specialties && (
          <Box>
            {props.specialist.specialties.map((specialty, index) => (

              <Badge
                key={index}
                px={2}
                py={1}
                bg={useColorModeValue('gray.50', 'gray.800')}
                fontWeight={'400'}>
                {specialty.specialty}
              </Badge>
            ))}

          </Box>
        )}
      </Stack>





      {/* <Link to={{pathname: `/user/detail/${props.specialist.id}`}}>
      <Box alignItems="center" justifyContent="center" bg="blue.200" h="150px">
        <Image src={props.specialist.profile_image} alt={props.specialist.id} borderRadius="full" boxSize="100px" objectFit="cover"/>
      </Box>
      </Link>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {props.specialist.person.gender}
          </Badge>
          <Text ml="2" textTransform="uppercase" fontSize="sm" fontWeight="bold" letterSpacing="wide">
            {props.specialist.specialties.map(specialty => specialty.specialty).join(", ")}
          </Text>
        </Box>

        <Box my="2">
          <Text fontSize="xl" fontWeight="bold">
            {props.specialist.person.first_name} {props.specialist.person.last_name}
          </Text>
          
          <Text mb={2} fontStyle="italic">
            " {props.specialist.about_me}
          </Text>
          <span style={{ display: "inline-flex", flexWrap: "nowrap" }}>{renderStars(props.specialist.rating)}</span>
        </Box>
        <Box>
          <Text mb="2">
            <strong>Consultation Cost:</strong> ${props.specialist.consultation_cost.toFixed(2)}
          </Text>
          
        </Box>
        {props.specialist.specialties && (
          <Box mt={4}>
            <Text>
              <strong>Specialties:</strong>
            </Text>
            <UnorderedList>
              {props.specialist.specialties.map((specialty, index) => (
                <ListItem key={index}>{specialty.specialty}</ListItem>
              ))}
            </UnorderedList>
            <Link
              to={{
                pathname: "/user/reserve",
                state: {
                  id: props.specialist.id,
                  name: `${props.specialist.person.first_name} ${props.specialist.person.last_name}`,
                  specialties: props.specialist.specialties.map(s => s.specialty),
                  consultationCost: props.specialist.consultation_cost,
                  location: props.specialist.location.address,
                  profileImage: props.specialist.profile_image,
                  disponibilties:props.specialist.disponibilties,
                },
              }}
            >
            </Link>
          </Box>
        )}
      </Box> */}
    </Box>
  );
}

export default SpecialistCard;