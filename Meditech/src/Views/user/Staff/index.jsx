// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { BsStarFill, BsStar } from 'react-icons/bs';
// import axios from 'axios';
// import {
//   Box,
//   Heading,
//   Grid,
//   Select,
//   Text,
//   Button,
//   Badge,
//   Flex,
//   Image,
//   UnorderedList,
//   ListItem,
// } from "@chakra-ui/react";


// function Specialists() {
//   const [specialists, setSpecialists] = useState([]);
//   const [specialtyFilter, setSpecialtyFilter] = useState("");
//   const [genderFilter, setGenderFilter] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const [sortOrderRating, setSortOrderRating] = useState(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [specialistsPerPage] = useState(10);

//   useEffect(() => {
//     async function fetchData() {
//       const result = await axios.get("http://localhost:3001/doctors");
//       const dataWithRatings = result.data.map((specialist) => ({
//         ...specialist,
//         rating: Math.floor(Math.random() * 5) + 1 // Genera un número aleatorio entre 1 y 5
//       }));
//       setSpecialists(dataWithRatings);
//     }
//     fetchData();
//   }, []);

//   const handleSpecialtyChange = (event) => {
//     setSpecialtyFilter(event.target.value);
//     setCurrentPage(1); // Resetear la página al cambiar el filtro de especialidad
//   };

//   const handleGenderChange = (event) => {
//     setGenderFilter(event.target.value);
//     setCurrentPage(1); // Resetear la página al cambiar el filtro de género
//   };

//   const handleSortingChange = () => {
//     if (sortOrder === "asc") {
//       setSortOrder("desc");
//     } else {
//       setSortOrder("asc");
//     }
//   };

//   const handleSortingRatingChange = () => {
//     if (sortOrderRating === "asc") {
//       setSortOrderRating("desc");
//     } else {
//       setSortOrderRating("asc");
//     }
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   let filteredSpecialists = [...specialists];

//   if (specialtyFilter !== "") {
//     filteredSpecialists = filteredSpecialists.filter((specialist) =>
//       specialist.specialties.some((specialty) => specialty.specialty === specialtyFilter)
//     );
//   }

//   if (genderFilter !== "") {
//     filteredSpecialists = filteredSpecialists.filter((specialist) =>
//       specialist.person.gender === genderFilter
//     );
//   }

//   if (sortOrder === "asc") {
//     filteredSpecialists.sort((a, b) => a.consultation_cost - b.consultation_cost);
//   } else if (sortOrder === "desc") {
//     filteredSpecialists.sort((a, b) => b.consultation_cost - a.consultation_cost);
//   }

//   if (sortOrderRating === "asc") {
//     filteredSpecialists.sort((a, b) => a.rating - b.rating);
//   } else if (sortOrderRating === "desc") {
//     filteredSpecialists.sort((a, b) => b.rating - a.rating);
//   }

//   const indexOfLastSpecialist = currentPage * specialistsPerPage;
//   const indexOfFirstSpecialist = indexOfLastSpecialist - specialistsPerPage;
//   const currentSpecialists = filteredSpecialists.slice(indexOfFirstSpecialist, indexOfLastSpecialist);

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(filteredSpecialists.length / specialistsPerPage); i++) {
//     pageNumbers.push(i);
//   }

// function renderStars(rating) {
//   const stars = [];
//   for (let i = 0; i < 5; i++) {
//     if (i < rating) {
//       stars.push(<BsStarFill key={i} color="yellow" />);
//     } else {
//       stars.push(<BsStar key={i} color="yellow" />);
//     }
//   }
//   return stars;
// }

// return (
//     <Box mt="5rem">
//       <Box mb={4}>
//         <Select value={specialtyFilter} onChange={handleSpecialtyChange} mb={4}>
//           <option value="">All Specialties</option>
//           {specialists.map((specialist) =>
//             specialist.specialties.map((specialty) => (
//               <option key={specialty.id} value={specialty.specialty}>
//                 {specialty.specialty}
//               </option>
//             ))
//           )}
//         </Select>
//         <Select value={genderFilter} onChange={handleGenderChange} mb={4}>
//           <option value="">All Genders</option>
//           <option value="Masculino">Male</option>
//           <option value="Femenino">Female</option>
//         </Select>
//         <Button onClick={handleSortingChange} mb={4} colorScheme="blue">
//           {sortOrder === "" ? "Sort by Price" : sortOrder === "asc" ? "Price Low to High" : "Price High to Low"}
//         </Button>
//         <Button onClick={handleSortingRatingChange} mb={4} colorScheme="blue">
//           {sortOrderRating === "" ? "Sort by Rating" : sortOrderRating === "asc" ? "Rating Low to High" : "Rating High to Low"}
//         </Button>
//       </Box>

//       <Grid templateColumns="repeat(2, 1fr)" gap={6} alignItems="start">
//         {currentSpecialists.map((specialist) => (
//           <Box key={specialist.id} mb={8} borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="md" w="100%">
//             <Flex alignItems="center" justifyContent="center" bg="blue.200" h="150px">
//               <Image src={specialist.profile_image} alt={specialist.id} borderRadius="full" boxSize="100px" />
//             </Flex>
//             <Box p="6">
//               <Box d="flex" alignItems="baseline">
//                 <Badge borderRadius="full" px="2" colorScheme="teal">
//                   {specialist.person.gender}
//                 </Badge>
//                 <Text ml="2" textTransform="uppercase" fontSize="sm" fontWeight="bold" letterSpacing="wide">
//                   {specialist.specialties.map((specialty) => specialty.specialty).join(", ")}
//                 </Text>
//               </Box>

//               <Box my="2">
//                 <Text fontSize="xl" fontWeight="bold">
//                   {specialist.person.first_name} {specialist.person.last_name}
//                 </Text>

//                 <Text mb={2} fontStyle="italic">
//                   " {specialist.about_me} 
//                 </Text>
//                 <span style={{ display: 'inline-flex', flexWrap: 'nowrap' }}>{renderStars(specialist.rating)}</span>
//               </Box>
//                <Box>
//                 <Text mb="2">
//                   <strong>Consultation Cost:</strong> ${specialist.consultation_cost.toFixed(2)}
//                 </Text>
//               </Box>
//               {specialist.specialties && (
//                 <Box mt={4}>
//                   <Text><strong>Specialties:</strong></Text>
//                   <UnorderedList>
//                     {specialist.specialties.map((specialty, index) => (
//                       <ListItem key={index}>{specialty.specialty}</ListItem>
//                     ))}
//                   </UnorderedList>
//                   <Link to={{
//                     pathname: "/user/reserve",
//                     state: {
//                       id: specialist.id,
//                       name: `${specialist.person.first_name} ${specialist.person.last_name}`,
//                       specialties: specialist.specialties.map(s => s.specialty),
//                       consultationCost: specialist.consultation_cost,
//                       location: specialist.location.address,
//                       profileImage: specialist.profile_image
//                     }
//                   }}>
//                     <Button colorScheme="purple" size="md" mt={4}>
//                       Agendar Cita Ahora
//                     </Button>
//                   </Link>
//                </Box>
//               )}
//             </Box>
//           </Box>
//         ))}
//       </Grid>
//       <Flex justifyContent="center" mt={4}>
//         <Box>
//           {pageNumbers.map((pageNumber) => (
//             <Button
//               key={pageNumber}
//               onClick={() => handlePageChange(pageNumber)}
//               colorScheme={currentPage === pageNumber ? "blue" : null}
//               mx={1}
//             >
//               {pageNumber}
//             </Button>
//           ))}
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default Specialists;

import React, { useState, useEffect } from "react";
import axios from "axios";

import SpecialistCard from '../../../Components/Especialista/SpecialistCard.jsx';

import { Box, Grid, Select, Text, Button, Badge, Flex } from "@chakra-ui/react";

function Specialists() {
  const [specialists, setSpecialists] = useState([]);
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortOrderRating, setSortOrderRating] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [specialistsPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3001/doctors");
      const dataWithRatings = result.data.map(specialist => ({
        ...specialist,
        rating: Math.floor(Math.random() * 5) + 1, // Genera un número aleatorio entre 1 y 5
      }));
      setSpecialists(dataWithRatings);
    }
    fetchData();
  }, []);

  const handleSpecialtyChange = event => {
    setSpecialtyFilter(event.target.value);
    setCurrentPage(1); // Resetear la página al cambiar el filtro de especialidad
  };

  const handleGenderChange = event => {
    setGenderFilter(event.target.value);
    setCurrentPage(1); // Resetear la página al cambiar el filtro de género
  };

  const handleSortingChange = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
  };

  const handleSortingRatingChange = () => {
    if (sortOrderRating === "asc") {
      setSortOrderRating("desc");
    } else {
      setSortOrderRating("asc");
    }
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  let filteredSpecialists = [...specialists];

  if (specialtyFilter !== "") {
    filteredSpecialists = filteredSpecialists.filter(specialist =>
      specialist.specialties.some(specialty => specialty.specialty === specialtyFilter)
    );
  }

  if (genderFilter !== "") {
    filteredSpecialists = filteredSpecialists.filter(specialist => specialist.person.gender === genderFilter);
  }

  if (sortOrder === "asc") {
    filteredSpecialists.sort((a, b) => a.consultation_cost - b.consultation_cost);
  } else if (sortOrder === "desc") {
    filteredSpecialists.sort((a, b) => b.consultation_cost - a.consultation_cost);
  }

  if (sortOrderRating === "asc") {
    filteredSpecialists.sort((a, b) => a.rating - b.rating);
  } else if (sortOrderRating === "desc") {
    filteredSpecialists.sort((a, b) => b.rating - a.rating);
  }

  const indexOfLastSpecialist = currentPage * specialistsPerPage;
  const indexOfFirstSpecialist = indexOfLastSpecialist - specialistsPerPage;
  const currentSpecialists = filteredSpecialists.slice(indexOfFirstSpecialist, indexOfLastSpecialist);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredSpecialists.length / specialistsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Box mt="5rem">
      <Box mb={4}>
        <Select value={specialtyFilter} onChange={handleSpecialtyChange} mb={4}>
          <option value="">All Specialties</option>
          {specialists.map(specialist =>
            specialist.specialties.map(specialty => (
              <option key={specialty.id} value={specialty.specialty}>
                {specialty.specialty}
              </option>
            ))
          )}
        </Select>
        <Select value={genderFilter} onChange={handleGenderChange} mb={4}>
          <option value="">All Genders</option>
          <option value="Masculino">Male</option>
          <option value="Femenino">Female</option>
        </Select>
        <Button onClick={handleSortingChange} mb={4} colorScheme="blue">
          {sortOrder === "" ? "Sort by Price" : sortOrder === "asc" ? "Price Low to High" : "Price High to Low"}
        </Button>
        <Button onClick={handleSortingRatingChange} mb={4} colorScheme="blue">
          {sortOrderRating === "" ? "Sort by Rating" : sortOrderRating === "asc" ? "Rating Low to High" : "Rating High to Low"}
        </Button>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} alignItems="start">
        {currentSpecialists.map(specialist => (
          <SpecialistCard specialist={specialist} />
        ))}
      </Grid>
      <Flex justifyContent="center" mt={4}>
        <Box>
          {pageNumbers.map(pageNumber => (
            <Button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              colorScheme={currentPage === pageNumber ? "blue" : null}
              mx={1}
            >
              {pageNumber}
            </Button>
          ))}
        </Box>
      </Flex>
    </Box>
  );
}

export default Specialists;
