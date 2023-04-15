import React from 'react';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

const ConfirmacionReserva = () => {
  return (
    <Box>
      <Heading as="h2" mb={4}>¡Excelente!</Heading>
      <Text>
        Tu consulta ha sido reservada exitosamente. Te enviaremos un correo electrónico con los detalles de la cita, incluyendo fecha, hora y ubicación de la clínica.
      </Text>
    </Box>
  );
};

export default ConfirmacionReserva;
