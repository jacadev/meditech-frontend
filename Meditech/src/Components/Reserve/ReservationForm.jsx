import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { enviarObjetoDeEstado } from "./../../Redux/Actions/actions"
/* import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz'; */
import {
  Box,
  Stack,
  Text,
  Image,
  Checkbox,
  VStack,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Badge,
} from '@chakra-ui/react';

const FormularioReserva = () => {
  // const { specialistId } = useParams();
  const [comment, setComentario] = useState('');
  const [dataTreatment, setConsentimiento] = useState(false);
  const [receiveCommunication, setRecibirComunicaciones] = useState(false);
  const location = useLocation();
  const { id, name, specialties, consultationCost, location: address, profileImage, disponibilties } =
    location.state;
  const history = useHistory();
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.userInfo.id)



  //console.log(userInfo)
  const handleSubmit = (e) => {
    /*     e.preventDefault(); */
    const formData = {
      patient_id: userInfo,
      date: disponibilties[0].date,
      disponibilty_id: disponibilties[0].id,
      consultationReason: comment,
      preload: false,
      consultationCost
    };
    dispatch(enviarObjetoDeEstado(formData));
    history.push("/user/payment");

  };



  return (

    <Box marginTop="100px">
      <Stack direction="row" spacing={1} alignItems="flex-start">
        <Box flex="70%">
          <Box>
            <form onSubmit={handleSubmit}>


              <FormControl id="comment">
                <FormLabel>Comentario para el especialista (opcional):</FormLabel>
                <Textarea value={comment} onChange={(e) => setComentario(e.target.value)} />
              </FormControl>


              <FormLabel>Fecha:</FormLabel>
              {disponibilties[0].date}

              <FormControl id="hour">
                <FormLabel>Hora:</FormLabel>
                {disponibilties[0].timetable.startTime}
                <hr />
                <br />
              </FormControl>


              <Checkbox
                isChecked={dataTreatment}
                onChange={() => setConsentimiento(!dataTreatment)}
                required={true}
              >

                Doy mi consentimiento para el tratamiento de mis datos personales relacionados con la salud y su transferencia al especialista para concertar la cita
              </Checkbox>

              <Checkbox
                isChecked={receiveCommunication}
                onChange={() => setRecibirComunicaciones(!receiveCommunication)}>

                Sí, me gustaría recibir comunicaciones de Meditech.
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
                  Pedir una cita
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
                  Nuevo
                  </Badge>
                  <Box
                    ml="2"
                    fontSize="2xl"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    
                  Reservando una cita con {name}
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
                    Costo de la consulta:
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
{/* 
      {showConfirmation && (
        <Box backgroundColor="blue" color="white" p={4} borderRadius="md" mt={4}>
          Solicitud de cita enviada correctamente.
        </Box>
      )} */}
    </Box>
  );
};

export default FormularioReserva;


