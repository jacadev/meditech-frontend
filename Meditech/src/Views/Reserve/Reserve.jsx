import React, { useState } from 'react';
import FormularioReserva from '../../Components/FormularioReserva';
import ConfirmacionReserva from '../../Components/ConfirmacionReserva';

const reservar = () => {
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const handleFormularioSubmit = () => {
    setMostrarConfirmacion(true);
  };

  return (
    <div>
      {
        mostrarConfirmacion ? (
          <ConfirmacionReserva />
        ) : (
          <div>
            <h2>Próximas disponibilidades</h2>
            <p>Elige una fecha y hora disponible para tu consulta.</p>
            <FormularioReserva onSubmit={handleFormularioSubmit} />
          </div>
        )
      }
    </div>
  );
};

export default reservar;
