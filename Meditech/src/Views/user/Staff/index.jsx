import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import SpecialistCard from '../../../Components/Especialista/SpecialistCard.jsx';

import { Box, Grid, Select, Button, Flex } from "@chakra-ui/react";
import { getDoctors } from "../../../Redux/Actions/actions.jsx";
import SearchBar from "../../../Components/SearchBar/SearchBar.jsx";

function Specialists() {

  const dispatch = useDispatch();
  
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortOrderRating, setSortOrderRating] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [specialistsPerPage] = useState(6);

  const specialists = useSelector(state => state.doctors);
  
  useEffect(() => {
    
    dispatch(getDoctors())
    
  },[]);

  const allDoctors = () => {
    dispatch(getDoctors())
  }

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

  let filteredSpecialists = specialists;

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
    <Box mt="5rem" >
      <Box display="inline-flex" alignItems="center">
        <Select value={specialtyFilter} onChange={handleSpecialtyChange} mb={4}  width="400px">
          <option value="">Todas las Especialidades</option>
          {specialists.map(specialist =>
            specialist.specialties.map(specialty => (
              <option key={`${specialty.id}-${specialty.specialty}`} value={specialty.specialty}>
                {specialty.specialty}
              </option>
            ))
          )}
        </Select>
        <Select value={genderFilter} onChange={handleGenderChange} mb={4} width="400px">
          <option value="">Todos los Generos</option>
          <option value="Masculino">Hombre</option>
          <option value="Femenino">Mujer</option>
        </Select>
        <Button onClick={handleSortingChange} mb={4} colorScheme="blue">
          {sortOrder === "" ? "Sort by Price" : sortOrder === "asc" ? "Price Low to High" : "Price High to Low"}
        </Button>
        <Button onClick={handleSortingRatingChange} mb={4} colorScheme="blue">
          {sortOrderRating === "" ? "Sort by Rating" : sortOrderRating === "asc" ? "Rating Low to High" : "Rating High to Low"}
        </Button>
        <Button onClick={() => allDoctors()} colorScheme="blue"  mb={4}>Todos los doctores</Button>
            
        
      </Box >
      <Flex justifyContent="center" alignItems="center">
      <Box>
      <SearchBar/>
      </Box>
      </Flex>
      <Grid
  templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
  gap={6}
  mt={6}
>
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