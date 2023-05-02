import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointmentPatienById, cleanDetail } from "../../Redux/Actions/actions";
import { Link } from "react-router-dom";
import { Box, Button, Heading, Text, Badge, Image } from "@chakra-ui/react";


const infoAppointment = () => {

  const dispatch = useDispatch()

  const userInfo = useSelector(state => state.userInfo)

  const datePatientDB = useSelector(state => state.appointmentOfPatientID)

  useEffect(() => {
    dispatch(getAppointmentPatienById(userInfo.id))
    return () => dispatch(cleanDetail())
  }, [])

  return (
    <Box marginTop='80px'>
      <Heading as="h1" size="xl" fontWeight="bold" mt="8">
        Todas tus citas Agendadas
      </Heading>
      {datePatientDB.length === 0 ? (
        <Text fontSize="lg">No tienes citas reservadas.</Text>
      ) : (
        datePatientDB.map((cita, index) => (
          <Box key={index} mt="8" display="flex" alignItems="center" borderRadius='10px' borderWidth="1px" width="100%" boxShadow="lg">
            <Box mr="4"  >
              <Image src={cita.disponibilty.doctor?.profileImage} width="200px" height="195px" objectFit="cover" borderRadius='10px' />
            </Box>
            <Box width="100%">
              <Box mt="4">
                <Text fontSize="lg"><span style={{ fontWeight: 'bold' }}>Fecha de la cita:</span> {cita.disponibilty?.date}</Text>
                <Text fontSize="lg"><span style={{ fontWeight: 'bold' }}>Día de la cita:</span> {cita.disponibilty.day?.day}</Text>
                <Text fontSize="lg"><span style={{ fontWeight: 'bold' }}>Hora de la cita: </span>{cita.disponibilty.timetable?.startTime}</Text>
                <Text fontSize="lg"><span style={{ fontWeight: 'bold' }}> Doctor: </span>{cita.disponibilty.doctor.person?.first_name}{' '}{cita.disponibilty.doctor.person?.last_name}</Text>
                <Text fontSize="lg"><span style={{ fontWeight: 'bold' }}>Especialidad:</span>{' '}
                  {cita.disponibilty.doctor?.specialties.map((specialty) => (
                    <Badge key={specialty.id} mr="2">
                      {specialty.specialty}
                    </Badge>
                  ))}
                </Text>
                <Text fontSize="lg"><span style={{ fontWeight: 'bold' }}>Razón de la consulta:</span> {cita?.consultationReason}</Text>
              </Box>
            </Box>
          </Box>

        ))
      )}
      <Link to="/user/staff">
        <Button mt="8" colorScheme="blue">
          Atrás
        </Button>
      </Link>
    </Box >


  )

}

export default infoAppointment;