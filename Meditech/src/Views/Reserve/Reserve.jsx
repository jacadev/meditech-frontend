import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormularioReserva from '../../Components/Reserve/ReservationForm';
import ConfirmacionReserva from '../../Components/Reserve/ReservationConfirmed';
import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';


const Reserve = () => {
  const location = useLocation();

  const { photo, name, specialty, address, consultationFee } = location.state;

  return (
    <FormularioReserva
      specialist={{ photo, name, specialty, address, consultationFee }}
    />
  );
};
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
