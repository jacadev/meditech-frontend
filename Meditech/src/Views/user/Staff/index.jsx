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
  const [specialistsPerPage] = useState(4);

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
  <SpecialistCard key={specialist.id} specialist={specialist} />
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