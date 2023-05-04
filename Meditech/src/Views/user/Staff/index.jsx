import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpecialistCard from "../../../Components/Especialista/SpecialistCard.jsx";
import baner from "../../../assets/img/Banner/banner-Plano de fundo.jpg";
import { Box, Grid, Select, Button, Flex, Text, Icon, useColorModeValue } from "@chakra-ui/react";
import { getDoctors, getSpecialties } from "../../../Redux/Actions/actions.jsx";
import SearchBar from "../../../Components/SearchBar/SearchBar.jsx";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Specialists() {
  const dispatch = useDispatch();

  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortOrderRating, setSortOrderRating] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [specialistsPerPage] = useState(6);

  const specialists = useSelector((state) => state.doctors);
  const specialties = useSelector((state) => state.specialties);

  const frontPage = () => {
    setCurrentPage(1);
    setSpecialtyFilter("");
    setGenderFilter("");
    setSortOrder("");
    setSortOrderRating(null);
  };

  useEffect(() => {
    dispatch(getDoctors());
    dispatch(getSpecialties());
  }, []);

  const allDoctors = () => {
    dispatch(getDoctors());
    setSpecialtyFilter("");
    setGenderFilter("");
    setSortOrder("");
    setSortOrderRating(null);
  };

  const handleSpecialtyChange = (event) => {
    setSpecialtyFilter(event.target.value);
    setCurrentPage(1); // Resetear la página al cambiar el filtro de especialidad
  };

  const handleGenderChange = (event) => {
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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let filteredSpecialists = specialists.filter(
    (doctor) => doctor.person.status === true
  );

  if (specialtyFilter !== "") {
    filteredSpecialists = filteredSpecialists.filter((specialist) =>
      specialist.specialties.some(
        (specialty) => specialty.specialty === specialtyFilter
      )
    );
  }

  if (genderFilter !== "") {
    filteredSpecialists = filteredSpecialists.filter(
      (specialist) => specialist.person.gender === genderFilter
    );
  }

  if (sortOrder === "asc") {
    filteredSpecialists.sort(
      (a, b) => a.consultation_cost - b.consultation_cost
    );
  } else if (sortOrder === "desc") {
    filteredSpecialists.sort(
      (a, b) => b.consultation_cost - a.consultation_cost
    );
  }

  if (sortOrderRating === "asc") {
    filteredSpecialists.sort((a, b) => a.rating - b.rating);
  } else if (sortOrderRating === "desc") {
    filteredSpecialists.sort((a, b) => b.rating - a.rating);
  }

  const indexOfLastSpecialist = currentPage * specialistsPerPage;
  const indexOfFirstSpecialist = indexOfLastSpecialist - specialistsPerPage;
  const currentSpecialists = filteredSpecialists.slice(
    indexOfFirstSpecialist,
    indexOfLastSpecialist
  );

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredSpecialists.length / specialistsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  const textColor = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box marginTop="5rem">
      <Box
        textAlign="center"
        backgroundImage={baner}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderRadius="10px"
        px={20}
        py={20}
        color={textColor}
        bg={bgColor}
      >
        <Text fontWeight="bold" fontSize="lg">
          Estás listo para una consulta?
        </Text>
        <Text fontSize="lg">
          Su tratamiento será realizado por médicos autorizados. ¡Agenda tu cita
          ahora!
        </Text>

        <Flex alignItems="flex-start" justifyContent="space-between">
          <Flex flexDirection="column" marginTop="40px">
            <Select
              value={specialtyFilter}
              onChange={handleSpecialtyChange}
              mb={4}
              width="400px"
              color={textColor}
              borderColor="lightgray"
              _focus={{ backgroundColor: "blue" }}
            >
              <option value="">Todas las Especialidades</option>
              {specialties.map((specialty) => (
                <option key={specialty.id} value={specialty.specialty}>
                  {specialty.specialty}
                </option>
              ))}
            </Select>
            <Select
              value={genderFilter}
              onChange={handleGenderChange}
              mb={4}
              width="400px"
              color={textColor}
              borderColor="lightgray"
              _focus={{ backgroundColor: "blue" }}
            >
              <option value="">Todos los Generos</option>
              <option value="Masculino">Hombre</option>
              <option value="Femenino">Mujer</option>
            </Select>
          </Flex>
          <Flex justifyContent="center" alignItems="center" marginTop="40px">
            <SearchBar frontPage={frontPage} />
          </Flex>

          <Flex flexDirection="column" marginLeft="20px" >
            <Text>Ordenar por Precio:</Text>
            <Button
              onClick={handleSortingChange}
              mb={4}
              colorScheme={sortOrder === "asc" ? "blue" : "gray"}
              bgColor={bgColor}
              color={textColor}
              borderWidth={sortOrder === "asc" ? 0 : "1px"}
              borderColor={sortOrder === "asc" ? "transparent" : "gray.200"}
              _hover={{ bgColor: sortOrder === "asc" ? "blue.600" : "gray.50" }}
            >
              {sortOrder === "asc" ? (
                <>
                  Menor a Mayor <Icon as={FaArrowUp} ml={2} />
                </>
              ) : (
                <>
                  Mayor a Menor <Icon as={FaArrowDown} ml={2} />
                </>
              )}
            </Button>
            <Text>Ordenar por Calificación:</Text>
            <Button
              onClick={handleSortingRatingChange}
              mb={4}
              colorScheme={sortOrderRating === "asc" ? "blue" : "gray"}
              bgColor={bgColor}
              color={textColor}
              borderWidth={sortOrderRating === "asc" ? 0 : "1px"}
              borderColor={
                sortOrderRating === "asc" ? "transparent" : "gray.200"
              }
              _hover={{
                bgColor: sortOrderRating === "asc" ? "blue.600" : "gray.50",
              }}
            >
              {sortOrderRating === "asc" ? (
                <>
                  Menor a Mayor <Icon as={FaArrowUp} ml={2} />
                </>
              ) : (
                <>
                  Mayor a Menor <Icon as={FaArrowDown} ml={2} />
                </>
              )}
            </Button>
            <Button onClick={() => allDoctors()} colorScheme="blue" mb={4}>
              Todos los doctores
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mt={6}
      >
        {currentSpecialists.map((specialist) => (
          <SpecialistCard key={specialist.id} specialist={specialist} />
        ))}
      </Grid>
      <Flex justifyContent="center" mt={4}>
        <Box>
          {pageNumbers.map((pageNumber) => (
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
