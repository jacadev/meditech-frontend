import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { postReserve } from '../../Redux/Actions/actions';


import {
  Box,
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
} from '@chakra-ui/react';

const FormularioReserva = ({ onSubmit }) => {
  const dispatch = useDispatch();
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
  const location = useLocation();
  const { photo, name, specialty, address, consultationFee } = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      nombres,
      apellidos,
      telefono,
      email,
      comentario,
      fecha,
      hora,
      dni,
      consentimiento,
      recibirComunicaciones,
      photo,
      name,
      specialty,
      address,
      consultationFee,
    };
    dispatch(postReserve(formData)); // Enviamos la acción con los datos del formulario
    console.log(`${nombres} ha reservado una consulta para el ${fecha} a las ${hora}.`);
    onSubmit();
  };

  


  return (
    <Box marginTop="100px">
    <Stack direction="row" spacing={1} alignItems="flex-start">
      <Box flex="70%">
      <Box
      >
        <form onSubmit={handleSubmit}>
        <FormControl id="nombres">
  <FormLabel>Name:</FormLabel>
  <Input type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} title="Ingrese sus nombres" required />
</FormControl>

<FormControl id="apellidos">
  <FormLabel>last name:</FormLabel>
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
  <FormLabel>Phone:</FormLabel>
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
  <FormLabel>Email:</FormLabel>
  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</FormControl>

<FormControl id="comentario">
  <FormLabel>Comment for the specialist (optional):</FormLabel>
  <Textarea value={comentario} onChange={(e) => setComentario(e.target.value)} />
</FormControl>

<FormControl id="fecha">
  <FormLabel>Date:</FormLabel>
  <Input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
</FormControl>

<FormControl id="hora">
  <FormLabel>Hour:</FormLabel>
  <Input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
</FormControl>


          

<Checkbox
  isChecked={consentimiento}
  onChange={() => setConsentimiento(!consentimiento)}
  required={true} 
>
I give my consent to the processing of my personal data related to health and its transfer to the specialist to make the appointment
</Checkbox>

<Checkbox
  isChecked={recibirComunicaciones}
  onChange={() => setRecibirComunicaciones(!recibirComunicaciones)}
  
>
  Yes, I would like to receive communications from Meditech.
</Checkbox>


          <div style={{ marginTop: "50px" }}>
          <Button
        type="submit"
        bg="#5C43FF"
        color="white"
        borderRadius="5px"
        padding="10px"
        width="100%"
        _hover={{ bg: '#38a169' }}
      >
       Schedule Appointment
      </Button>
          </div>
          
        </form>
        </Box>
      </Box>

      <Box flex="30%">
        <VStack spacing={6} alignItems="flex-start">
          <Image
            src={photo}
            alt="Foto del especialista"
          />

          <Heading as="h2" size="lg">
            {name}
          </Heading>

          <Text fontSize="md">{specialty}     </Text>

          <Text fontSize="sm">Appointment date: {fecha}</Text>
          <Text fontSize="sm">Appointment time: {hora}</Text>

          <Text fontSize="sm">{address}</Text>

          <Box borderBottom="1px" width="100%" />

          <Text fontSize="sm">$ {consultationFee} </Text>
          

          <Box borderBottom="1px" width="100%" />

          
        </VStack>
      </Box>
    </Stack>
    </Box>
  );
};

export default FormularioReserva;

