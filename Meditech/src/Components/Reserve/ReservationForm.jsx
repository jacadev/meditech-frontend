import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
//import {postReserve} from "./../../Redux/Actions/actions"
import { useDispatch,useSelector } from 'react-redux'
//import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import PayPalCheckout from '../../Views/user/payment/index'
import { enviarObjetoDeEstado } from "./../../Redux/Actions/actions"
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
  Badge,
} from '@chakra-ui/react';

const FormularioReserva = () => {
 // const { specialistId } = useParams();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [firstName, setNombres] = useState('');
  const [lastName, setApellidos] = useState('');
  const [dni, setDni] = useState('');
  const [phone, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComentario] = useState('');
  const [date, setFecha] = useState(new Date().toISOString().substr(0, 10));
  const [hour, setHora] = useState('');
  const [dataTreatment, setConsentimiento] = useState(false);
  const [receiveCommunication, setRecibirComunicaciones] = useState(false);
  const location = useLocation();
  const { id, name, specialties, consultationCost, location: address, profileImage, disponibilties } =
    location.state;
  const history = useHistory();
  const dispatch = useDispatch()
  const userInfo = useSelector(state=>state.userInfo.id)



//console.log(userInfo)
  const handleSubmit =  (e) => {
/*     e.preventDefault(); */
const formData = {
      patient_id:userInfo,
      date:disponibilties[0].date,
      disponibilty_id:disponibilties[0].id,
      consultationReason:comment,
      preload:false,
      consultationCost
    };
     dispatch(enviarObjetoDeEstado(formData));
    history.push("/user/payment");
    // Mostrar mensaje de confirmación
 /*    setShowConfirmation(true);
    console.log("Información del formulario:", formData); 

    
    
    setNombres("");
    setApellidos("");
    setTelefono("");
    setComentario("");
    setEmail("");
    setFecha("");
    setHora("");
    setDni("");
    setConsentimiento(false);
    setRecibirComunicaciones(false);  */
  };
  


  return (
    
    <Box marginTop="100px">
    <Stack direction="row" spacing={1} alignItems="flex-start">
      <Box flex="70%">
      <Box>
        <form onSubmit={handleSubmit}>


<FormControl id="comment">
  <FormLabel>Comment for the specialist (optional):</FormLabel>
  <Textarea value={comment} onChange={(e) => setComentario(e.target.value)} />
</FormControl>



  <FormLabel>Date:</FormLabel>
  {disponibilties[0].date}



<FormControl id="hour">
  <FormLabel>Hour:</FormLabel>
    {disponibilties[0].timetable.startTime}
    <hr/>
    <br />
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
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
  <Image src={profileImage} alt={name} />

  <Box p="6">
    <Box d="flex" alignItems="baseline">
      <Badge rounded="full" px="2" colorScheme="teal">
        New
      </Badge>
      <Box
        ml="2"
        fontSize="2xl"
        fontWeight="bold"   
        textAlign="center"
      >
        Reserving an appointment with {name}
      </Box>

    </Box>

    <Box mt="2" lineHeight="tight">
      <Text fontSize="xl">{specialties.join(", ")}</Text>
    </Box>
  
    <Box d="flex" mt="2" alignItems="center">
      <Box
        as="span"
        color="gray.600"
        fontSize="md"
        fontWeight="semibold"
        mr="2"
      >
        Consultation Cost:
      </Box>
      <Text fontSize="lg">${consultationCost.toFixed(2)}</Text>
    </Box>

    <Box d="flex" mt="2" alignItems="center">
      <Box
        as="span"
        color="gray.600"
        fontSize="md"
        fontWeight="semibold"
        mr="2"
      >
     
      </Box>
      
    </Box>
  </Box>
</Box>

                 
        </VStack>
      </Box>
    </Stack>

    {showConfirmation && (
      <Box backgroundColor="blue" color="white" p={4} borderRadius="md" mt={4}>
        Solicitud de cita enviada correctamente.
      </Box>
    )}
    </Box>
  );
};

export default FormularioReserva;


