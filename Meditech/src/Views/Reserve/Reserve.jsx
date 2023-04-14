import { useState } from 'react';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import FormularioReserva from '../../Components/Reserve/ReservationForm';
import ConfirmacionReserva from '../../Components/Reserve/ReservationConfirmed';

const Reservar = () => {
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const handleFormularioSubmit = () => {
    setMostrarConfirmacion(true);
  };

  return (
    <Box>
      {
        mostrarConfirmacion ? (
          <ConfirmacionReserva />
        ) : (
          <Box>
            <div style={{ height: "10vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Heading as="h2">
                      Reserva de Cita
                    </Heading>
            </div>
            <div style={{ height: "10vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text>Elige una fecha y hora disponible para tu consulta.</Text>
            </div>
            <FormularioReserva onSubmit={handleFormularioSubmit} />
          </Box>
        )
      }
    </Box>
  );
};

export default Reservar;
