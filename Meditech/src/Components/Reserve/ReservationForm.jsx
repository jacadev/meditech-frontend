import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { enviarObjetoDeEstado } from "./../../Redux/Actions/actions"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { utcToZonedTime } from 'date-fns-tz';
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
  const { id, name, specialties, consultationCost, location: clinicLocation, profileImage, disponibilties } = location.state;
    location.state;
  const history = useHistory();
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.userInfo.id)
  
  const [fecha, setFecha] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [hora, setHora] = useState([])
  const [formData, setFormdata] = useState({ 
    patient_id: userInfo,
    date: "",
    disponibilty_id: "",
    consultationReason: comment,
    preload: false,
    consultationCost})

  function handleDateSelect(info) {
    console.log("Fecha seleccionada:", info.dateStr);
    setSelectedDate(info.dateStr); // Actualizar fecha seleccionada en el estado
    setFecha(info.dateStr); // Actualizar fecha en el estado
  }
  function renderDayCellContent(selectedDate) {
    return function(info) {
      const dateStr = info.date.toISOString().slice(0,10);
  
      if (dateStr === selectedDate) {
        return (
          <Box borderRadius="md" bg="blue.100" p={1} height="100%" width="100%">
            <Box as="span" fontWeight="bold">{info.dayNumberText}</Box>
          </Box>
        )
      }
      else {
        return (
          <Box as="span" fontWeight="normal">{info.dayNumberText}</Box>
        )
      }
    }
  }

  function changeHandler (date, disponibilty_id) {
    //console.log('Hora seleccionada:', date, disponibilty_id);
    setFormdata({...formData, date, disponibilty_id })


    // Aquí puedes guardar la hora seleccionada en el estado o enviarla al servidor como parte de la reserva
  }

  const fechaLocal = utcToZonedTime(new Date(fecha), 'Europe/Madrid'); // Cambiamos a la zona horaria de Bogotá
  /* console.log("fecha: " + fecha);
  console.log("fechaLocal col: " + fechaLocal); */
  //console.log(userInfo)
  const handleSubmit = (e) => {
   
    dispatch(enviarObjetoDeEstado(formData));
    history.push("/user/payment");

  };

const statusTrue = () =>{

  const result = disponibilties.filter(disponibility => disponibility.status === true) // Filtrar solo aquellos con status true
  .map(disponibility => ({
    title: 'Disponible',
    id:disponibility.id,
    date: disponibility.date,
    day:disponibility.day,
    timetable:disponibility.timetable,
    color: '#6B46C1'
  }))

  setHora(result)
}
 useEffect (()=>{

  statusTrue()
 },[])
//console.log(hora ,"ASASASASAASA")
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
    

              <FullCalendar
                  plugins={[ dayGridPlugin, interactionPlugin ]}
                  initialView="dayGridMonth"
                  events={hora} 
                 

                  eventContent={({ event }) => (
                    <Box bg="purple.600" height="20px" borderRadius="8px" px={0.5} py={0.5} textAlign="center">
                      <Text color="white"  fontSize="xs">Disponible</Text>
                    </Box>
                  )}

                  dateClick={handleDateSelect}
                  dayCellContent={renderDayCellContent(selectedDate)} // Renderizado personalizado para cada día
            />
        <Box>
        {fecha && (
        <Text fontWeight="bold" mt={2}>
          Usted está reservando para el: {fecha && format(fechaLocal, 'EEEE, dd \'de\' MMMM \'de\' y', { locale: es })}
        </Text>
      )}
      {fecha && hora.filter((disponibility) => disponibility.date === fecha)
        .sort((a, b) => a.timetable.startTime.localeCompare(b.timetable.startTime))
        .map((disponibility, index) => {
          return (
            <Button 
              key={index}
              onClick={() => changeHandler(disponibility.date,disponibility.id )}
              colorScheme="blue"
              variant="solid" 
              mt={2}
            >
              {disponibility.timetable.startTime} - {disponibility.timetable.endTime}
            </Button>
          )
        })
      }
             </Box> 

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
    </Box>
  );
};

export default FormularioReserva;


