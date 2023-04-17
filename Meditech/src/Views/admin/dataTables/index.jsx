import { useState, useEffect } from "react";
import { Box, Text, Button, Flex,Select,Input,SimpleGrid } from "@chakra-ui/react";
import SpecialistCard from "../../../Components/Especialista/SpecialistCard"
import SpecialistsData from "../../../Data/DataSpecialist";

const Specialists = () => {
  const [specialists, setSpecialists] = useState([]);
  const [filterSpecialty, setFilterSpecialty] = useState("");
  const [filterCity, setFilterCity] = useState("all");
  const [sort, setSort] = useState("asc");
  const [sort2, setSort2] = useState("asc");
  const [searchTerm, setSearchTerm] = useState('');   // ***********************************************
  const [currentPage, setCurrentPage] = useState(1);
  
  const ELEMENTOS_POR_PAGINA = 10;
  const startIndex = (currentPage - 1) * ELEMENTOS_POR_PAGINA;
  const endIndex = startIndex + ELEMENTOS_POR_PAGINA;

  useEffect(() => {
    // Simulación de llamada a API o método para obtener datos de especialistas y ciudades
    setSpecialists(SpecialistsData);
  }, []);



  //  modificar todoeste codigo para que funcione el buscador
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
  //*********************************************** */




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

  const handleSortClick = () => {
    if (sort === "asc") {
      setSort("desc");
      const sortedDescSpecialists = filteredSpecialists.sort((a, b) => b.consultationFee - a.consultationFee);
      setSpecialists(sortedDescSpecialists);
    } else {
      setSort("asc");
      const sortedAscSpecialists = filteredSpecialists.sort((a, b) => a.consultationFee - b.consultationFee);
      setSpecialists(sortedAscSpecialists);
    }
  };

  const handleSortClick2 = () => setSort2(sort2 === "asc" ? "desc" : "asc");

  return (
    <Box  marginTop="100px">
      <Flex direction="row" flexWrap="wrap" justify="space-between">
      <Box mb="4">
        <Text fontSize="lg" fontWeight="bold">
        Filter by specialty:
        </Text>
        <Select   bg="#5C43FF" color="white"value={filterSpecialty} onChange={handleFilterSpecialtyChange}>
          <option value="">All</option>
          <option value="Cardiología">Cardiología</option>
          <option value="Dermatología">Dermatología</option>
          <option value="Ginecología">Ginecología</option>
          <option value="Medicina General">General medicine</option>
          <option value="Neurología">Neurología</option>
          <option value="Nutrición">Nutrición</option>
          <option value="Odontología">Odontología</option>
          <option value="Oftalmología">Oftalmologia</option>
          <option value="Pediatría">Pediatría</option>
          <option value="Psicología">Psicología</option>
        </Select>
      </Box>
      
      <Box mb="4">
        <Text fontSize="lg" fontWeight="bold">
          Filter by city:
        </Text>
        <Select  bg="#5C43FF" color="white" value={filterCity} onChange={handleFilterCityChange}>
          <option value="all">All</option>
          <option value="Barranquilla">Barranquilla</option>
          <option value="Bogota">Bogotá</option>
          <option value="Cali">Cali</option>
          <option value="Cartagena">Cartagena</option>
          <option value="Medellin">Medellín</option>
        </Select>
      </Box>
      <Box mb="4">
        <Text fontSize="lg" fontWeight="bold">
        Search for doctors:
        </Text>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
      </Box>

     
      <Box mb="4">
        <Text fontSize="lg" fontWeight="bold">
        Sort by price:
        </Text>
        <Button onClick={handleSortClick} bg="#5C43FF" color="white">
          {sort === "asc" ? "Low to High" : "High to Low"}
        </Button>
      </Box>

      <Box mb="4">
        <Text fontSize="lg" fontWeight="bold">
        Sort by rating:
        </Text>
        <Button onClick={handleSortClick2} bg="#5C43FF" color="white">
          {sort2 === "asc" ? "High to Low" : "Low to High"}
        </Button>
      </Box>
      </Flex>
   

<SimpleGrid columns={2} spacing={2} justifyItems="center">
          {sortedRating.slice(startIndex, endIndex).map((spec) => (
            <SpecialistCard key={spec.id} specialist={spec} />
          ))}
        </SimpleGrid>
<Box display="flex" justifyContent="center" alignItems="center" >
        <Button
          color="white"
          bg="#5C43FF"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ↞ Previous page
        </Button>
        <Button 
          color="white"
          bg="#5C43FF"
          disabled={endIndex >= sortedRating.length}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next page ↠
        </Button>
        </Box>

    </Box>
  );
};

export default Specialists;
