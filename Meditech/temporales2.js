import React, { useState } from 'react';
import SpecialistCard from '../Especialista/SpecialistCard';
import {
  Stack,
  Heading,
  Text,
  Image,
  Checkbox,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
} from '@chakra-ui/react';

const specialist = {
  name: 'Juan Pérez',
  photo: '/ruta/a/la/foto.jpg',
  specialty: 'Especialidad',
  address: 'Dirección del especialista'
}

const FormularioReserva = ({ onSubmit }) => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [dni, setDni] = useState('');
  const [consentimiento, setConsentimiento] = useState(false);
  const [recibirComunicaciones, setRecibirComunicaciones] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario de reserva
    // a través de una API o servicio externo.
    // Por ahora, solo imprimiremos los datos en la consola:
    console.log(`${nombres} ha reservado una consulta para el ${fecha} a las ${hora}.`);
    onSubmit(); // Llamando a la función onSubmit que viene como prop
  };

  return (
    <Stack direction="row" spacing={1} alignItems="flex-start">
      <Box flex="70%">
      <Box
          width="50%"
          height="100%"
          //backgroundColor="white"
          position="absolute"
          left="10%"
          top="80%"
          transform="translateY(-50%)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          //textAlign="center"
      >
        <form onSubmit={handleSubmit}>
        <FormControl id="nombres">
  <FormLabel>Nombres Completos:</FormLabel>
  <Input type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} title="Ingrese sus nombres" required />
</FormControl>

<FormControl id="apellidos">
  <FormLabel>Apellidos Completos:</FormLabel>
  <Input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} title="Ingrese sus apellidos" required />
</FormControl>

<FormControl id="dni">
  <FormLabel>DNI:</FormLabel>
  <Input 
    type="number" 
    value={dni} 
    onChange={(e) => setDni(e.target.value)} 
    onKeyDown={(evt) =>
      ['e', 'E', '+', '-', '.'].includes(evt.key) && evt.preventDefault()
    }
    max={99999999}
    title="Ingrese su Identificacion"
    required
  />
</FormControl>

<FormControl id="telefono">
  <FormLabel>Teléfono:</FormLabel>
  <Input 
    type="tel" 
    value={telefono} 
    maxLength={10}
    onChange={(e) => setTelefono(e.target.value)}
    onKeyPress={(event) => {
      if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
      }
    }}
    pattern="[0-9]*"
    title="Ingrese solo números."
    required
  />
</FormControl>

<FormControl id="email">
  <FormLabel>Correo Electrónico:</FormLabel>
  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</FormControl>

<FormControl id="comentario">
  <FormLabel>Comentario para el especialista (opcional):</FormLabel>
  <Textarea value={comentario} onChange={(e) => setComentario(e.target.value)} />
</FormControl>

<FormControl id="fecha">
  <FormLabel>Fecha:</FormLabel>
  <Input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
</FormControl>

<FormControl id="hora">
  <FormLabel>Hora:</FormLabel>
  <Input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
</FormControl>


          

<Checkbox
  isChecked={consentimiento}
  onChange={() => setConsentimiento(!consentimiento)}
  required={true} 
>
  Doy mi consentimiento al tratamiento de mis datos personales relativos a la salud y a su cesión al especialista para concertar la cita
</Checkbox>

<Checkbox
  isChecked={recibirComunicaciones}
  onChange={() => setRecibirComunicaciones(!recibirComunicaciones)}
  
>
  Sí, me gustaría recibir comunicaciones de Meditech.
</Checkbox>


          <div style={{ marginTop: "50px" }}>
          <Button
        type="submit"
        bg="#48bb78"
        color="white"
        borderRadius="5px"
        padding="10px"
        width="100%"
        _hover={{ bg: '#38a169' }}
      >
        Agendar Cita
      </Button>
          </div>
          
        </form>
        </Box>
      </Box>

      <Box flex="30%">
        <VStack spacing={6} alignItems="flex-start">
        <SpecialistCard specialist={specialist} />
        </VStack>
      </Box>
    </Stack>
  );
};

export default FormularioReserva;



