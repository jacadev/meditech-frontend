import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react';


const SpecialistCard = ({ specialist }) => {
  const handleReserveClick = () => {
    // Redireccionar al usuario a la página "reserve"
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" padding="4" mb="4">
      <Flex align="flex-start">
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
          <Box d="inline-flex" mt="2" alignItems="center">
            {Array.from({ length: Math.round(specialist.rating) }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em">
                <path
                  fillRule="evenodd"
                  d="M17.038,7.311l-4.334-.398L10.77,2.078c-.171-.426-.794-.426-.964,0l-2.934,6.834-4.334.398c-.488.045-.682.688-.301,1.018l3.25,2.94-1.023,5.778c-.123.691.582,1.232,1.178.87l4.028-2.57,4.028,2.57c.413.263.95-.179.86-.64l-1.023-5.778,3.25-2.94C17.72,7.999,17.526,7.355,17.038,7.311z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            {Array.from({ length: Math.round(5 - specialist.rating) }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em">
                <path
                  fillRule="evenodd"
                  d="M17.038,7.311l-4.334-.398L10.77,2.078c-.171-.426-.794-.426-.964,0l-2.934,6.834-4.334.398c-.488.045-.682.688-.301,1.018l3.25,2.94-1.023,5.778c-.123.691.582,1.232,1.178.87l4.028-2.57,4.028,2.57c.413.263.95-.179.86-.64l-1.023-5.778,3.25-2.94C17.72,7.999,17.526,7.355,17.038,7.311z"
                  clipRule="evenodd"
                  fillOpacity=".25"
                />
              </svg>
            ))}
          </Box>
          <Text fontSize="sm">{specialist.address}</Text>
          <Text fontSize="lg" fontWeight="bold" mt="4">
            Valor de la consulta: ${specialist.consultationFee}
          </Text>
        </Box>
        <Spacer />
        <Box>
          {/* Icono para reservar */}
          <Image src="/reserve-icon.png" alt="Reservar cita" onClick={handleReserveClick} />
        </Box>
      </Flex>
    </Box>
  );
};

export default SpecialistCard;