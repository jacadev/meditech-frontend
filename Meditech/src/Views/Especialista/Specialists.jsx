import { useState, useEffect } from "react";
import { Box, Text, Button, SimpleGrid } from "@chakra-ui/react";
import SpecialistCard from "../../components/Especialista/SpecialistCard";
import SpecialistsData from "../../data/DataSpecialist";

const Specialists = () => {
  const [specialists, setSpecialists] = useState([]);
  const [filterSpecialty, setFilterSpecialty] = useState("");
  const [filterCity, setFilterCity] = useState("all");
  const [sort, setSort] = useState("asc");
  const [sort2, setSort2] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Estado para la paginación

  //***************************** */
  const ELEMENTOS_POR_PAGINA = 10;
  const startIndex = (currentPage - 1) * ELEMENTOS_POR_PAGINA;
  const endIndex = startIndex + ELEMENTOS_POR_PAGINA;
  //***************************** */

  useEffect(() => {
    // Simulación de llamada a API o método para obtener datos de especialistas y ciudades
    setSpecialists(SpecialistsData);
  }, []);

  const filteredSpecialists = specialists
    .filter(
      (spec) =>
        filterSpecialty === "" ? true : spec.specialty === filterSpecialty
    )
    .filter((spec) => (filterCity === "all" ? true : spec.city === filterCity))
    .filter((spec) =>
      searchTerm === ""
        ? true
        : spec.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedSpecialists = [...filteredSpecialists].sort((a, b) =>
    sort === "asc"
      ? a.consultationFee - b.consultationFee
      : b.consultationFee - a.consultationFee
  );

  const sortedRating = [...filteredSpecialists].sort((a, b) =>
    sort2 === "asc" ? b.rating - a.rating : a.rating - b.rating
  );

  const handleFilterSpecialtyChange = (e) =>
    setFilterSpecialty(e.target.value);

  const handleFilterCityChange = (e) => setFilterCity(e.target.value);

  const handleSortClick = () => setSort(sort === "asc" ? "desc" : "asc");

  const handleSortClick2 = () => setSort2(sort2 === "asc" ? "desc" : "asc");

  return (
    <>
      <Box>
        <Box mb="4">
          <Text fontSize="lg" fontWeight="bold">
            Filtrar por especialidad:
          </Text>
          <select value={filterSpecialty} onChange={handleFilterSpecialtyChange}>
            <option value="">Todas las especialidades</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Dermatología">Dermatología</option>
            <option value="Ginecología">Ginecología</option>
            <option value="Medicina General">Medicina General</option>
            <option value="Neurología">Neurología</option>
            <option value="Nutrición">Nutrición</option>
            <option value="Odontología">Odontología</option>
            <option value="Oftalmología">Oftalmologia</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Psicología">Psicología</option>
          </select>
        </Box>
        <Box mb="4">
          <Text fontSize="lg" fontWeight="bold">
            Filtrar por ciudad:
          </Text>
          <select value={filterCity} onChange={handleFilterCityChange}>
            <option value="all">Todas las ciudades</option>
            <option value="Barranquilla">Barranquilla</option>
            <option value="Bogota">Bogotá</option>
            <option value="Cali">Cali</option>
            <option value="Cartagena">Cartagena</option>
            <option value="Medellin">Medellín</option>
          </select>
        </Box>

        <Box mb="4">
          <Text fontSize="lg" fontWeight="bold">
            Ordenar por precio:
          </Text>
          <Button onClick={handleSortClick}>
            {sort === "asc" ? "De menor a mayor" : "De mayor a menor"}
          </Button>
        </Box>

        <Box mb="4">
          <Text fontSize="lg" fontWeight="bold">
            Ordenar por popularidad:
          </Text>
          <Button onClick={handleSortClick2}>
            {sort2 === "asc" ? "De mayor a menor" : "De menor a mayor"}
          </Button>
        </Box>

        <Box mb="4">
          <Text fontSize="lg" fontWeight="bold">
            Buscar Especialista:
          </Text>
          <input
            type="text"
            placeholder="Buscar por nombre de especialista"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

        <SimpleGrid columns={2} spacing={6}>
          {sortedRating.slice(startIndex, endIndex).map((spec) => (
            <SpecialistCard key={spec.id} specialist={spec} />
          ))}
        </SimpleGrid>

        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Página anterior
        </Button>
        <Button
          disabled={endIndex >= sortedRating.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Siguiente página
        </Button>

      </Box>
    </>
  );
};

export default Specialists;
