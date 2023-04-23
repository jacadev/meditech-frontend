<<<<<<< HEAD
// import { Box, Flex, Image, Icon, Text, Button } from '@chakra-ui/react';
// import { useHistory } from 'react-router-dom';
// import { BsStarFill, BsStar } from 'react-icons/bs';
=======
import { Box, Flex, Image, Icon, Text, Button} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
>>>>>>> 1b5289dc93e98c59871e65ca5510e506672b82b4



// const StarIcon = ({ filled }) => (
//   <svg viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em">
//     <path
//       fillRule="evenodd"
//       d="M10.77,2.078c-.171-.426-.794-.426-.964,0l-2.934,6.834-4.334.398c-.488.045-.682.688-.301,1.018l3.25,2.94-1.023,5.778c-.123.691.582,1.232,1.178.87l4.028-2.57,4.028,2.57c.413.263.95-.179.86-.64l-1.023-5.778,3.25-2.94C17.72,7.999,17.526,7.355,17.038,7.311z"
//       clipRule="evenodd"
//       fillOpacity={filled ? "1" : "0.25"}
//     />
//   </svg>
// );

// const SpecialistCard = ({ specialist }) => {
//   const { profile_image, person, specialties, location, consultation_cost, phone, about_me } = specialist;
//   const Specialty1 = specialties[0].specialty;
//   const numStars = Math.round(Math.random() * 4) + 1;
//   // const numStars = Math.round(specialist.rating);
//   const stars = Array.from({ length: numStars });


//   const history = useHistory();
  
//   const handleClick = () => {
//     history.push({
//       pathname: '/user/reserve',
//       state: {
//         photo: specialist.profile_image,
//         name: person.first_name,
//         last_name: person.last_name,
//         specialty: Specialty1,
//         address: location.address,
//         city: location.city,
//         phone: person.phone,
//         email: person.email,
//         consultationFee: specialist.consultation_cost,
//       }
//     });
//   };




//   return (
//     <Box borderWidth="1px" borderRadius="lg" padding="1" mb="10" width="500px" boxShadow="dark-lg">
//       <Flex >
//         <Image
//           src={profile_image}
//           borderRadius="full"
//           boxSize="150px"
//           mr="4"
//         />
//         <Box>
//           <Flex fontSize="xl" fontWeight="bold">
//             <Box whiteSpace="nowrap">{person.first_name}</Box>
//             <Box whiteSpace="nowrap" ml="1">{person.last_name}</Box>
//           </Flex>


//           <Text fontSize="md">{Specialty1}</Text>



//           <Box mt="2" alignItems="center">
//             {/* Iteramos sobre el arreglo de estrellas y las renderizamos */}
//             {stars.map((_, i) => (
//               <Icon as={BsStarFill} key={i} color="yellow.400" w={5} h={5} />
//             ))}
//             {/* Renderizamos las estrellas vacías si no se llenaron todas */}
//             {Array.from({ length: 5 - numStars }).map((_, i) => (
//               <Icon as={BsStar} key={numStars + i} color="yellow.400" w={3} h={3} />
//             ))}
//           </Box>

//           {/* <Text fontSize="sm">{location.address}</Text> */}
//           <Text fontSize="sm" my={2} fontStyle="italic">" {specialist.about_me} "</Text>
//           <Text fontSize="sm"><Text fontWeight="bold">Telefono Personal:</Text> {person.phone}</Text>
//           <Text fontSize="sm"><Text fontWeight="bold">Correo Personal:</Text> {person.email}</Text>
//           <Text fontSize="lg" fontWeight="bold" mt="4">
//             Price of the consultation: ${specialist.consultation_cost}
//           </Text>
         
//           <Box marginTop='10px'>
//           <Button
//             bg="#48bb78"
//             color="white"
//             borderRadius="5px"
//             padding="10px"
//             width="100%"
//             _hover={{ bg: '#38a169' }}
//             onClick={handleClick}
//           >
//             Request an appointment
//           </Button>
//         </Box>
       
//         </Box>

        
//       </Flex>
//     </Box>

//   );
// };


// export default SpecialistCard; 

import React from "react";
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

  return (
<<<<<<< HEAD
    <Box
      key={props.specialist.id}
      mb={8}
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      w="100%"
    >
      <Box alignItems="center" justifyContent="center" bg="blue.200" h="150px">
        <Image src={props.specialist.profile_image} alt={props.specialist.id} borderRadius="full" boxSize="100px" />
      </Box>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {props.specialist.person.gender}
          </Badge>
          <Text ml="2" textTransform="uppercase" fontSize="sm" fontWeight="bold" letterSpacing="wide">
            {props.specialist.specialties.map(specialty => specialty.specialty).join(", ")}
=======
    <Box  borderWidth="1px" borderRadius="lg" padding="1" mb="10" width="500px" boxShadow="dark-lg" bg="#F3f3f3">
      <Flex >
        <Image
          src={specialist.photo}
          alt={`Foto de ${specialist.name}`}
          borderRadius="full"
          boxSize="150px"
          mr="4"
        />
        <Box>
          <Text fontSize="xl" fontWeight="bold">{specialist.name}</Text>
          <Text fontSize="md">{specialist.specialty}</Text>
          <Box mt="2" alignItems="center" >
            {Array.from({ length: Math.round(specialist.rating) }).map((_, i) => (
             <Icon
             key={i}
             viewBox="0 0 20 20"
             fill="#ede60c"
             width="1em"
             height="1em"
             mr="0.1em" // Ajuste del margen derecho
           >
                <path
                  fillRule="evenodd"
                  d="M17.038,7.311l-4.334-.398L10.77,2.078c-.171-.426-.794-.426-.964,0l-2.934,6.834-4.334.398c-.488.045-.682.688-.301,1.018l3.25,2.94-1.023,5.778c-.123.691.582,1.232,1.178.87l4.028-2.57,4.028,2.57c.413.263.95-.179.86-.64l-1.023-5.778,3.25-2.94C17.72,7.999,17.526,7.355,17.038,7.311z"
                  clipRule="evenodd"
                />
              </Icon>
            ))}
            {Array.from({ length: Math.round(5 - specialist.rating) }).map((_, i) => (
                 <Icon
             key={i}
             viewBox="0 0 20 20"
             fill="currentColor"
             width="1em"
             height="1em"
             mr="0.1em" // Ajuste del margen derecho
           >
                <path
                  fillRule="evenodd"
                  d="M17.038,7.311l-4.334-.398L10.77,2.078c-.171-.426-.794-.426-.964,0l-2.934,6.834-4.334.398c-.488.045-.682.688-.301,1.018l3.25,2.94-1.023,5.778c-.123.691.582,1.232,1.178.87l4.028-2.57,4.028,2.57c.413.263.95-.179.86-.64l-1.023-5.778,3.25-2.94C17.72,7.999,17.526,7.355,17.038,7.311z"
                  clipRule="evenodd"
                  fillOpacity=".25"
                />
              </Icon>
            ))}
          </Box>
          <Text fontSize="sm">{specialist.address}</Text>
          <Text fontSize="sm">{specialist.city}</Text>
          <Text fontSize="lg" fontWeight="bold" mt="4">
          Price of the consultation: ${specialist.consultationFee}
>>>>>>> 1b5289dc93e98c59871e65ca5510e506672b82b4
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
