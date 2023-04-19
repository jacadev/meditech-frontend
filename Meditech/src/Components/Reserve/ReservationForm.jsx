import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {postReserve} from "./../../Redux/Actions/actions"
import {useDispatch} from 'react-redux'


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

const FormularioReserva = () => {
  const [firstName, setNombres] = useState('');
  const [lastName, setApellidos] = useState('');
  const [phone, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComentario] = useState('');
  const [date, setFecha] = useState('');
  const [hour, setHora] = useState('');
  const [dni, setDni] = useState('');
  const [dataTreatment, setConsentimiento] = useState(false);
  const [receiveCommunication, setRecibirComunicaciones] = useState(false);
  const location = useLocation();
  const { photo, name, specialty, address, consultationFee } = location.state;
const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      dni,
      phone,
      email,
      comment,
      date,
      hour,
      dataTreatment,
      receiveCommunication
      
    };
    dispatch(postReserve(formData)); // Enviamos la acción con los datos del formulario
   setNombres("")
   setApellidos("")
   setTelefono("")
   setComentario("")
   setEmail("")
   setFecha("")
   setHora("")
   setDni("")
   setConsentimiento(false)
   setRecibirComunicaciones(false)
  };
  
   function formatDate(date) {
     const year = date.getFullYear();
     const month = ("0" + (date.getMonth() + 1)).slice(-2);
     const day = ("0" + date.getDate()).slice(-2);
     return `${year}-${month}-${day}`;
 }


  return (
    
    <Box marginTop="100px">
    <Stack direction="row" spacing={1} alignItems="flex-start">
      <Box flex="70%">
      <Box
     
      >
        <form onSubmit={handleSubmit}>
        <FormControl id="firstName">
  <FormLabel>Name:</FormLabel>
  <Input type="text" value={firstName} onChange={(e) => setNombres(e.target.value)} title="Ingrese sus nombres" required />
</FormControl>

<FormControl id="lastName">
  <FormLabel>last name:</FormLabel>
  <Input type="text" value={lastName} onChange={(e) => setApellidos(e.target.value)} title="Ingrese sus apellidos" required />
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

<FormControl id="phone">
  <FormLabel>Phone:</FormLabel>
  <Input 
    type="tel" 
    value={phone} 
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

<FormControl id="comment">
  <FormLabel>Comment for the specialist (optional):</FormLabel>
  <Textarea value={comment} onChange={(e) => setComentario(e.target.value)} />
</FormControl>

{/* <div>
    <label>Fecha de lanzamiento</label>
    <input type='date' value={form.release_date ? formatDate(new Date(form.release_date)) : ''} onChange={changeHandler} name='release_date' />
  </div>
 */}
 <FormControl id="date">
  <FormLabel>Date:</FormLabel>
  <Input type="date" value={date ? formatDate(new Date(date)) : ''}  onChange={(e) => setFecha(e.target.value)} required />
</FormControl> 

<FormControl id="hour">
  <FormLabel>Hour:</FormLabel>
  <Input type="time" value={hour} onChange={(e) => setHora(e.target.value)} required />
</FormControl>


          

<Checkbox
  isChecked={dataTreatment}
  onChange={() => setConsentimiento(!dataTreatment)}
  required={true} 
>
I give my consent to the processing of my personal data related to health and its transfer to the specialist to make the appointment
</Checkbox>

<Checkbox
  isChecked={receiveCommunication}
  onChange={() => setRecibirComunicaciones(!receiveCommunication)}
  
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
       Request an Appointment
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

          <Text fontSize="sm">Appointment date: {date}</Text>
          <Text fontSize="sm">Appointment time: {hour}</Text>

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

