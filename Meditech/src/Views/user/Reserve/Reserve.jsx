import { useState } from "react";
import { useLocation } from "react-router-dom";
import FormularioReserva from "../../../Components/Reserve/ReservationForm";
import ConfirmacionReserva from "../../../Components/Reserve/ReservationForm";
import { Box, Heading, Text } from "@chakra-ui/react";

const Reserve = () => {
  const location = useLocation();

  const { photo, name, specialty, address, consultationFee, disponibilties } =
    location.state;

  return (
    <FormularioReserva
      specialist={{
        photo,
        name,
        specialty,
        address,
        consultationFee,
        disponibilties,
      }}
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
      {mostrarConfirmacion ? (
        <ConfirmacionReserva />
      ) : (
        <Box>
          <div
            style={{
              height: "10vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text marginTop="100px" fontSize="1.5rem" fontWeight="bold">
              Choose an available date and time for your consultation.
            </Text>
          </div>
          <FormularioReserva onSubmit={handleFormularioSubmit} />
        </Box>
      )}
    </Box>
  );
};

export default Reservar;
