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
} from "@chakra-ui/react";
import {Link} from 'react-router-dom';

function SpecialistCard(props) {
  const renderStars = rating => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
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
      key={props.specialist.id}
      mb={8}
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      w="100%"
      bg={colorMode === "light" ? "white" : "gray.700"} 
    >
      <Link to={{pathname: `/user/detail/${props.specialist.id}`}}>
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
              <Button colorScheme="purple" size="md" mt={4}>
                Agendar Cita Ahora
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SpecialistCard;