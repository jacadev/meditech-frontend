import { useEffect, useState } from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import SpecialistCard from '../../Components/Especialista/SpecialistCard';
import SpecialistsData from '../../Data/Data';


const Specialists = () => {
  const [specialists, setSpecialists] = useState([]);
  const [filter, setFilter] = useState('all'); // Filtro por defecto
  const [sort, setSort] = useState('asc'); // Orden por defecto

  // Traer lista de especialistas desde Redux u otra fuente de datos (no incluida en este ejemplo)

  useEffect(() => {
    // Llamada a API o método para obtener datos de especialistas
    // Actualizar estado con los datos obtenidos
    setSpecialists(SpecialistsData);
    }, []);

  // Aplicar filtro seleccionado por el usuario
  const filteredSpecialists = specialists.filter(spec =>
    filter === 'all' ? true : spec.specialty === filter
  );

  // Aplicar orden seleccionado por el usuario
  const sortedSpecialists = [...filteredSpecialists].sort((a, b) =>
    sort === 'asc' ? a.consultationFee - b.consultationFee : b.consultationFee - a.consultationFee
  );

  // Renderizar componentes con la información de los especialistas
  return (
    <Box>
      {/* Filtros */}
      <Box mb="4">
        <Text fontSize="lg" fontWeight="bold">Filtrar por especialidad:</Text>
        <select onChange={e => setFilter(e.target.value)}>
          <option value="all">Todas las especialidades</option>
          <option value="Odontología">Odontología</option>
          <option value="Oftalmología">Oftalmología</option>
          {/* Otras opciones de filtro... */}
        </select>
      </Box>
      <Box mb="4">
        <Text fontSize="lg" fontWeight="bold">Ordenar por precio:</Text>
        <Button onClick={() => setSort(sort === 'asc' ? 'desc' : 'asc')}>
          {sort === 'asc' ? 'De mayor a menor' : 'De menor a mayor'}
        </Button>
      </Box>

      {/* Tarjetas de especialistas */}
      {sortedSpecialists.map(spec => (
        <SpecialistCard key={spec.id} specialist={spec} />
      ))}
    </Box>
      );
};

export default Specialists;
